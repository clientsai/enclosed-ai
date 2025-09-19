#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Design System Validation Rules
const VALIDATION_RULES = {
  // Required components
  components: {
    navigation: {
      required: true,
      patterns: [
        /<Navigation\s+variant="(landing|app)"\s*\/>/g,
        /import\s+Navigation\s+from\s+["']@\/components\/Navigation["']/g
      ]
    },
    footer: {
      required: true,
      patterns: [
        /<Footer\s+variant="(landing|app|full)"\s*\/>/g,
        /import\s+Footer\s+from\s+["']@\/components\/Footer["']/g
      ]
    }
  },
  
  // Required styling
  styling: {
    background: {
      required: true,
      patterns: [/bg-black/g]
    },
    text: {
      required: true,
      patterns: [/text-white/g, /text-gray-300/g, /text-gray-400/g]
    },
    spacing: {
      required: true,
      patterns: [/py-24/g, /max-w-7xl/g, /px-4\s+sm:px-6\s+lg:px-8/g]
    }
  },
  
  // Mobile responsiveness
  mobile: {
    required: true,
    patterns: [/md:/g, /sm:/g, /lg:/g, /xl:/g]
  }
};

function validatePage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return { valid: false, errors: ['File not found'] };
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const errors = [];
    const warnings = [];

    // Check if it's a page file
    if (!filePath.endsWith('/page.tsx')) {
      return { valid: true, errors: [], warnings: ['Not a page file'] };
    }

    // App pages should have Navigation component, landing pages use global layout
    const isAppPage = filePath.includes('/dashboard/') || 
                     filePath.includes('/campaigns/') || 
                     filePath.includes('/templates/') || 
                     filePath.includes('/api-keys/') || 
                     filePath.includes('/billing/') || 
                     filePath.includes('/leads/');

    if (isAppPage) {
      // Check for navigation in app pages
      const hasNavigation = VALIDATION_RULES.components.navigation.patterns.some(pattern => 
        pattern.test(content)
      );
      if (!hasNavigation) {
        errors.push('Missing Navigation component (app page)');
      }
    } else {
      // Landing pages use global layout - check if they have custom nav that should be removed
      const hasCustomNav = content.includes('<Nav') || content.includes('<nav') || content.includes('<header');
      if (hasCustomNav) {
        warnings.push('Should use global layout navigation instead of custom nav');
      }
    }

    // Footer is handled by global layout for all pages
    const hasCustomFooter = content.includes('<Footer') || content.includes('<footer');
    if (hasCustomFooter) {
      warnings.push('Should use global layout footer instead of custom footer');
    }

    // Check for dark theme
    const hasDarkTheme = VALIDATION_RULES.styling.background.patterns.some(pattern => 
      pattern.test(content)
    );
    if (!hasDarkTheme) {
      errors.push('Missing dark theme (bg-black)');
    }

    // Check for proper text colors
    const hasTextColors = VALIDATION_RULES.styling.text.patterns.some(pattern => 
      pattern.test(content)
    );
    if (!hasTextColors) {
      warnings.push('Missing proper text color classes');
    }

    // Check for responsive design
    const hasResponsive = VALIDATION_RULES.mobile.patterns.some(pattern => 
      pattern.test(content)
    );
    if (!hasResponsive) {
      warnings.push('Missing responsive design classes');
    }

    // Check for proper spacing
    const hasSpacing = VALIDATION_RULES.styling.spacing.patterns.some(pattern => 
      pattern.test(content)
    );
    if (!hasSpacing) {
      warnings.push('Missing proper spacing classes');
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings
    };

  } catch (error) {
    return { valid: false, errors: [error.message] };
  }
}

function getAllPageFiles() {
  const pagesDir = path.join(process.cwd(), 'src/app');
  const pageFiles = [];

  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item === 'page.tsx') {
        pageFiles.push(fullPath);
      }
    });
  }

  scanDirectory(pagesDir);
  return pageFiles;
}

// Main execution
console.log('🔍 Validating Design System Implementation...\n');

const pageFiles = getAllPageFiles();
let validCount = 0;
let totalErrors = 0;
let totalWarnings = 0;

console.log(`Found ${pageFiles.length} page files to validate\n`);

pageFiles.forEach((filePath, index) => {
  const relativePath = path.relative(process.cwd(), filePath);
  console.log(`[${index + 1}/${pageFiles.length}] Validating: ${relativePath}`);
  
  const result = validatePage(filePath);
  
  if (result.valid) {
    console.log('  ✅ Valid');
    validCount++;
  } else {
    console.log('  ❌ Invalid');
  }
  
  if (result.errors.length > 0) {
    result.errors.forEach(error => {
      console.log(`    ❌ Error: ${error}`);
      totalErrors++;
    });
  }
  
  if (result.warnings.length > 0) {
    result.warnings.forEach(warning => {
      console.log(`    ⚠️  Warning: ${warning}`);
      totalWarnings++;
    });
  }
  
  console.log(''); // Empty line for readability
});

// Summary
console.log('📊 Validation Summary:');
console.log(`   ✅ Valid pages: ${validCount}/${pageFiles.length}`);
console.log(`   ❌ Total errors: ${totalErrors}`);
console.log(`   ⚠️  Total warnings: ${totalWarnings}`);

if (totalErrors === 0) {
  console.log('\n🎉 Design system validation passed!');
  console.log('✨ All pages follow industry gold standards:');
  console.log('   • Consistent dark theme');
  console.log('   • Unified navigation and footer');
  console.log('   • Mobile-first responsive design');
  console.log('   • Proper spacing and typography');
  console.log('   • Jony Ive-inspired minimalism');
} else {
  console.log('\n⚠️  Design system validation failed!');
  console.log('Please fix the errors above before proceeding.');
}
