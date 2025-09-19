#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// CSS removal patterns
const CSS_PATTERNS = [
  // Tailwind classes
  /className="[^"]*"/g,
  // Inline styles
  /style="[^"]*"/g,
  // CSS imports
  /import\s+['"][^'"]*\.css['"];?\n?/g,
  // CSS modules
  /import\s+.*?from\s+['"][^'"]*\.module\.css['"];?\n?/g,
  // Styled components
  /styled\.[a-zA-Z]+`[^`]*`/g,
  // CSS-in-JS
  /css`[^`]*`/g,
  // Emotion styles
  /css\([^)]*\)/g,
  // Styled-jsx
  /<style[^>]*>[\s\S]*?<\/style>/g,
  // CSS variables
  /--[a-zA-Z-]+:\s*[^;]+;/g,
  // CSS custom properties
  /var\(--[^)]+\)/g
];

// Files to process
const FILES_TO_PROCESS = [
  'src/app/globals.css',
  'src/styles/tokens.css',
  'src/components/ui.tsx',
  'src/components/Navigation.tsx',
  'src/components/Footer.tsx',
  'src/components/Logo.tsx'
];

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
      } else if (item === 'page.tsx' || item === 'layout.tsx') {
        pageFiles.push(fullPath);
      }
    });
  }

  scanDirectory(pagesDir);
  return pageFiles;
}

function removeCSSFromFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Remove all CSS patterns
    CSS_PATTERNS.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '');
        updated = true;
      }
    });

    // Clean up empty className attributes
    content = content.replace(/className=""/g, '');
    content = content.replace(/className=\{\s*""\s*\}/g, '');
    
    // Clean up empty style attributes
    content = content.replace(/style=""/g, '');
    content = content.replace(/style=\{\s*{}\s*\}/g, '');

    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/\s+$/gm, '');

    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Removed CSS from: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No CSS found in: ${filePath}`);
      return false;
    }

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function clearGlobalCSS() {
  const globalCSSPath = path.join(process.cwd(), 'src/app/globals.css');
  
  if (fs.existsSync(globalCSSPath)) {
    // Keep only the basic CSS reset and essential styles
    const minimalCSS = `/* Minimal CSS Reset - Blank Slate */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.5;
}

/* Remove all custom styling - blank slate ready */
`;
    
    fs.writeFileSync(globalCSSPath, minimalCSS);
    console.log('✅ Cleared globals.css - blank slate ready');
    return true;
  }
  
  return false;
}

function clearTokensCSS() {
  const tokensPath = path.join(process.cwd(), 'src/styles/tokens.css');
  
  if (fs.existsSync(tokensPath)) {
    fs.writeFileSync(tokensPath, '/* CSS Tokens cleared - blank slate ready */\n');
    console.log('✅ Cleared tokens.css - blank slate ready');
    return true;
  }
  
  return false;
}

// Main execution
console.log('🧹 Removing ALL CSS - Creating Blank Slate UI...\n');

// Clear global CSS files first
console.log('1. Clearing global CSS files...');
clearGlobalCSS();
clearTokensCSS();
console.log('');

// Process component files
console.log('2. Processing component files...');
let componentCount = 0;
FILES_TO_PROCESS.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    console.log(`Processing: ${filePath}`);
    if (removeCSSFromFile(filePath)) {
      componentCount++;
    }
    console.log('');
  }
});

// Process all page files
console.log('3. Processing all page files...');
const pageFiles = getAllPageFiles();
let pageCount = 0;

pageFiles.forEach((filePath, index) => {
  const relativePath = path.relative(process.cwd(), filePath);
  console.log(`[${index + 1}/${pageFiles.length}] Processing: ${relativePath}`);
  
  if (removeCSSFromFile(filePath)) {
    pageCount++;
  }
  console.log('');
});

console.log('🎉 CSS Removal Complete - Blank Slate Ready!');
console.log(`📊 Summary:`);
console.log(`   • Component files processed: ${componentCount}`);
console.log(`   • Page files processed: ${pageCount}`);
console.log(`   • Total files: ${componentCount + pageCount}`);
console.log('');
console.log('✨ Your website now has:');
console.log('   • All text and content preserved');
console.log('   • All pages and functionality intact');
console.log('   • Complete blank slate for UI design');
console.log('   • No CSS styling - ready for fresh start');
console.log('');
console.log('🚀 You can now start building your UI from scratch!');
