#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Only fix the essential changes needed for the build
const PAGES_TO_FIX = [
  'src/app/api-keys/page.tsx',
  'src/app/billing/page.tsx',
  'src/app/campaigns/page.tsx',
  'src/app/campaigns/[id]/page.tsx',
  'src/app/careers/page.tsx',
  'src/app/cookies/page.tsx',
  'src/app/dashboard/page.tsx'
];

function safeFixPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Only fix background color - safest change
    if (content.includes('bg-gray-50') || content.includes('bg-white')) {
      content = content.replace(/bg-gray-50|bg-white/g, 'bg-black');
      updated = true;
    }

    // Fix text colors for dark theme
    if (content.includes('text-gray-900')) {
      content = content.replace(/text-gray-900/g, 'text-white');
      updated = true;
    }

    if (content.includes('text-gray-700')) {
      content = content.replace(/text-gray-700/g, 'text-gray-300');
      updated = true;
    }

    if (content.includes('text-gray-600')) {
      content = content.replace(/text-gray-600/g, 'text-gray-400');
      updated = true;
    }

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
console.log('🔧 Safe Fix - Only Essential Changes...\n');

let fixedCount = 0;
let totalCount = PAGES_TO_FIX.length;

PAGES_TO_FIX.forEach((filePath, index) => {
  console.log(`[${index + 1}/${totalCount}] Processing: ${filePath}`);
  if (safeFixPage(filePath)) {
    fixedCount++;
  }
  console.log(''); // Empty line for readability
});

console.log('🎉 Safe fix completed!');
console.log(`📊 Fixed ${fixedCount} out of ${totalCount} pages`);
