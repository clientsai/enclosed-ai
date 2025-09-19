#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Pages that need specific fixes
const PAGES_TO_FIX = [
  'src/app/auth/signup/page.tsx',
  'src/app/campaigns/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/faq/page.tsx',
  'src/app/gdpr/page.tsx',
  'src/app/help/billing/page.tsx',
  'src/app/help/campaigns/page.tsx',
  'src/app/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/security/page.tsx',
  'src/app/terms/page.tsx'
];

function fixPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Fix missing dark theme
    if (!content.includes('bg-black')) {
      // Replace common background patterns
      content = content.replace(/bg-gray-50/g, 'bg-black');
      content = content.replace(/bg-white/g, 'bg-black');
      content = content.replace(/bg-gray-100/g, 'bg-black');
      
      // Add bg-black to main div if missing
      const mainDivPattern = /<div\s+className="[^"]*min-h-screen[^"]*">/;
      if (mainDivPattern.test(content)) {
        content = content.replace(
          mainDivPattern,
          '<div className="min-h-screen bg-black">'
        );
        updated = true;
      }
    }

    // Fix text colors for dark theme
    const textColorMappings = {
      'text-gray-900': 'text-white',
      'text-gray-800': 'text-white',
      'text-gray-700': 'text-gray-300',
      'text-gray-600': 'text-gray-400',
      'text-black': 'text-white'
    };

    Object.entries(textColorMappings).forEach(([oldColor, newColor]) => {
      if (content.includes(oldColor)) {
        content = content.replace(new RegExp(oldColor, 'g'), newColor);
        updated = true;
      }
    });

    // Add Navigation component for app pages
    const isAppPage = filePath.includes('/campaigns/page.tsx') || 
                     filePath.includes('/help/billing/') || 
                     filePath.includes('/help/campaigns/');

    if (isAppPage && !content.includes('<Navigation')) {
      // Add import
      if (!content.includes('import Navigation from "@/components/Navigation"')) {
        const lastImportMatch = content.match(/import\s+.*?from\s+["'][^"']+["'];?\n/g);
        if (lastImportMatch) {
          const lastImport = lastImportMatch[lastImportMatch.length - 1];
          const lastImportIndex = content.lastIndexOf(lastImport) + lastImport.length;
          content = content.slice(0, lastImportIndex) + 
            '\nimport Navigation from "@/components/Navigation";\n' + 
            content.slice(lastImportIndex);
          updated = true;
        }
      }

      // Add Navigation component
      const mainDivPattern = /<div\s+className="[^"]*min-h-screen[^"]*">/;
      if (mainDivPattern.test(content)) {
        content = content.replace(
          mainDivPattern,
          '<div className="min-h-screen bg-black">\n      <Navigation variant="app" />\n      <div'
        );
        updated = true;
      }
    }

    // Add responsive classes
    const responsiveMappings = [
      { pattern: /text-3xl(?!\s+md:)/g, replacement: 'text-2xl md:text-3xl' },
      { pattern: /text-2xl(?!\s+md:)/g, replacement: 'text-xl md:text-2xl' },
      { pattern: /text-xl(?!\s+md:)/g, replacement: 'text-lg md:text-xl' },
      { pattern: /py-20(?!\s+md:)/g, replacement: 'py-16 md:py-24' },
      { pattern: /px-4(?!\s+sm:)/g, replacement: 'px-4 sm:px-6 lg:px-8' }
    ];

    responsiveMappings.forEach(({ pattern, replacement }) => {
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
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }

  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Fixing Remaining Design System Issues...\n');

let fixedCount = 0;
let totalCount = PAGES_TO_FIX.length;

PAGES_TO_FIX.forEach((filePath, index) => {
  console.log(`[${index + 1}/${totalCount}] Processing: ${filePath}`);
  
  if (fixPage(filePath)) {
    fixedCount++;
  }
  console.log(''); // Empty line for readability
});

console.log('🎉 Remaining issues fix completed!');
console.log(`📊 Fixed ${fixedCount} out of ${totalCount} pages`);
