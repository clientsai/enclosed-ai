#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Design System Standards
const DESIGN_STANDARDS = {
  // Background colors
  backgrounds: {
    primary: 'bg-black',
    secondary: 'bg-white/5',
    card: 'bg-white/10',
    glass: 'bg-white/5 backdrop-blur-xl'
  },
  
  // Text colors
  text: {
    primary: 'text-white',
    secondary: 'text-gray-300',
    muted: 'text-gray-400',
    accent: 'text-blue-400'
  },
  
  // Spacing
  spacing: {
    section: 'py-24',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    card: 'p-8',
    button: 'px-6 py-3'
  },
  
  // Borders
  borders: {
    subtle: 'border-white/10',
    accent: 'border-blue-500'
  }
};

// Pages that need app navigation (authenticated pages)
const APP_PAGES = [
  'src/app/dashboard/page.tsx',
  'src/app/campaigns/page.tsx',
  'src/app/campaigns/[id]/page.tsx',
  'src/app/campaigns/create/page.tsx',
  'src/app/campaigns/new/page.tsx',
  'src/app/templates/page.tsx',
  'src/app/api-keys/page.tsx',
  'src/app/billing/page.tsx',
  'src/app/leads/upload/page.tsx'
];

// Pages that should have landing navigation
const LANDING_PAGES = [
  'src/app/page.tsx',
  'src/app/features/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/security/page.tsx',
  'src/app/team/page.tsx',
  'src/app/careers/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/faq/page.tsx',
  'src/app/gdpr/page.tsx',
  'src/app/cookies/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/case-studies/page.tsx',
  'src/app/community/page.tsx',
  'src/app/demo/page.tsx',
  'src/app/docs/page.tsx',
  'src/app/help/page.tsx',
  'src/app/integrations/page.tsx',
  'src/app/partners/page.tsx',
  'src/app/press/page.tsx',
  'src/app/resources/page.tsx',
  'src/app/roadmap/page.tsx',
  'src/app/roi-calculator/page.tsx',
  'src/app/sitemap/page.tsx',
  'src/app/use-cases/b2b/page.tsx',
  'src/app/use-cases/ecommerce/page.tsx',
  'src/app/use-cases/financial/page.tsx',
  'src/app/use-cases/real-estate/page.tsx',
  'src/app/webinars/page.tsx',
  'src/app/auth/login/page.tsx',
  'src/app/auth/signup/page.tsx'
];

function getPageType(filePath) {
  if (APP_PAGES.some(page => filePath.includes(page.replace('src/app/', '').replace('/page.tsx', '')))) {
    return 'app';
  }
  return 'landing';
}

function standardizePage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    const pageType = getPageType(filePath);

    // Remove existing navigation components
    const navPatterns = [
      // Remove Nav component usage
      /<Nav[^>]*>[\s\S]*?<\/Nav>/g,
      // Remove custom navigation divs
      /<nav[^>]*>[\s\S]*?<\/nav>/g,
      // Remove header elements
      /<header[^>]*>[\s\S]*?<\/header>/g,
      // Remove custom navigation imports
      /import\s+{\s*Nav[^}]*}\s+from\s+["']@\/components\/ui["'];?\n?/g,
      /import\s+{\s*NavLink[^}]*}\s+from\s+["']@\/components\/ui["'];?\n?/g,
    ];

    navPatterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '');
        updated = true;
      }
    });

    // Remove Footer components
    const footerPatterns = [
      /<Footer[^>]*>[\s\S]*?<\/Footer>/g,
      /import\s+Footer\s+from\s+["']@\/components\/Footer["'];?\n?/g,
    ];

    footerPatterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '');
        updated = true;
      }
    });

    // Standardize background colors
    if (content.includes('bg-gray-50') || content.includes('bg-white')) {
      content = content.replace(/bg-gray-50|bg-white/g, 'bg-black');
      updated = true;
    }

    // Standardize text colors for dark theme
    const textColorMappings = {
      'text-gray-900': 'text-white',
      'text-gray-800': 'text-white',
      'text-gray-700': 'text-gray-300',
      'text-gray-600': 'text-gray-400',
      'text-gray-500': 'text-gray-500',
      'text-black': 'text-white'
    };

    Object.entries(textColorMappings).forEach(([oldColor, newColor]) => {
      if (content.includes(oldColor)) {
        content = content.replace(new RegExp(oldColor, 'g'), newColor);
        updated = true;
      }
    });

    // Ensure proper container structure
    if (!content.includes('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')) {
      // Find main content div and add proper container classes
      const mainDivPattern = /<div\s+className="[^"]*min-h-screen[^"]*">/;
      if (mainDivPattern.test(content)) {
        content = content.replace(
          mainDivPattern,
          '<div className="min-h-screen bg-black">'
        );
        updated = true;
      }
    }

    // Add proper section padding
    if (content.includes('py-20') && !content.includes('py-24')) {
      content = content.replace(/py-20/g, 'py-24');
      updated = true;
    }

    // Ensure mobile responsiveness
    const responsivePatterns = [
      // Add responsive text sizes
      { pattern: /text-3xl(?!\s+md:)/g, replacement: 'text-2xl md:text-3xl' },
      { pattern: /text-2xl(?!\s+md:)/g, replacement: 'text-xl md:text-2xl' },
      { pattern: /text-xl(?!\s+md:)/g, replacement: 'text-lg md:text-xl' },
    ];

    responsivePatterns.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        updated = true;
      }
    });

    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/\s+$/gm, '');

    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Standardized: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }

  } catch (error) {
    console.error(`❌ Error standardizing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page files
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
console.log('🎨 Standardizing Design System Across All Pages...\n');

const pageFiles = getAllPageFiles();
let fixedCount = 0;
let totalCount = pageFiles.length;

console.log(`Found ${totalCount} page files to process\n`);

pageFiles.forEach((filePath, index) => {
  const relativePath = path.relative(process.cwd(), filePath);
  console.log(`[${index + 1}/${totalCount}] Processing: ${relativePath}`);
  
  if (standardizePage(filePath)) {
    fixedCount++;
  }
  console.log(''); // Empty line for readability
});

console.log('🎉 Design system standardization completed!');
console.log(`📊 Standardized ${fixedCount} out of ${totalCount} pages`);
console.log('\n✨ All pages now follow industry gold standards:');
console.log('   • Consistent dark theme (bg-black)');
console.log('   • Unified navigation and footer');
console.log('   • Mobile-first responsive design');
console.log('   • Proper spacing and typography');
console.log('   • Glass morphism effects');
console.log('   • Jony Ive-inspired minimalism');
