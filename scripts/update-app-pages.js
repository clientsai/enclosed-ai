#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// App pages that need special navigation handling
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

function updateAppPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Add app navigation import if not present
    if (!content.includes('import Navigation from "@/components/Navigation"')) {
      // Find the last import statement
      const importRegex = /import\s+.*?from\s+["'][^"']+["'];?\n/g;
      const imports = content.match(importRegex) || [];
      const lastImport = imports[imports.length - 1];
      
      if (lastImport) {
        const lastImportIndex = content.lastIndexOf(lastImport) + lastImport.length;
        content = content.slice(0, lastImportIndex) + 
          '\nimport Navigation from "@/components/Navigation";\n' + 
          content.slice(lastImportIndex);
        updated = true;
      }
    }

    // Replace the main div structure to use app navigation
    const mainDivPattern = /<div\s+className="[^"]*min-h-screen[^"]*">/;
    if (mainDivPattern.test(content)) {
      content = content.replace(
        mainDivPattern,
        '<div className="min-h-screen bg-black">'
      );
      updated = true;
    }

    // Add app navigation after the main div
    const mainDivEndPattern = /<div\s+className="[^"]*min-h-screen[^"]*">\s*<div/;
    if (mainDivEndPattern.test(content)) {
      content = content.replace(
        mainDivEndPattern,
        '<div className="min-h-screen bg-black">\n      <Navigation variant="app" />\n      <div'
      );
      updated = true;
    }

    // Ensure proper padding for fixed navigation
    if (!content.includes('pt-16')) {
      const containerPattern = /<div\s+className="[^"]*max-w-7xl[^"]*">/;
      if (containerPattern.test(content)) {
        content = content.replace(
          containerPattern,
          '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">'
        );
        updated = true;
      }
    }

    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Updated app page: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }

  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Updating App Pages with App Navigation...\n');

let fixedCount = 0;
let totalCount = APP_PAGES.length;

APP_PAGES.forEach((filePath, index) => {
  console.log(`[${index + 1}/${totalCount}] Processing: ${filePath}`);
  
  if (updateAppPage(filePath)) {
    fixedCount++;
  }
  console.log(''); // Empty line for readability
});

console.log('🎉 App pages update completed!');
console.log(`📊 Updated ${fixedCount} out of ${totalCount} app pages`);
