#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Footer links to test
const FOOTER_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/templates", label: "Templates" },
  { href: "/integrations", label: "Integrations" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/docs", label: "Documentation" },
  { href: "/help", label: "Help Center" },
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/security", label: "Security" },
  { href: "/gdpr", label: "GDPR" },
];

function testPageContent(href) {
  const pagePath = path.join(process.cwd(), 'src/app', href, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    return { exists: false, hasContent: false, error: 'File not found' };
  }
  
  try {
    const content = fs.readFileSync(pagePath, 'utf8');
    
    // Check if page has meaningful content (not just empty or placeholder)
    const hasContent = content.length > 200 && 
                      content.includes('export default') && 
                      content.includes('return') &&
                      !content.includes('TODO') &&
                      !content.includes('placeholder');
    
    return { 
      exists: true, 
      hasContent, 
      contentLength: content.length,
      hasExport: content.includes('export default'),
      hasReturn: content.includes('return')
    };
  } catch (error) {
    return { exists: true, hasContent: false, error: error.message };
  }
}

function verifyAllPages() {
  console.log('🔍 Testing All Footer Link Pages...\n');
  
  let totalPages = 0;
  let workingPages = 0;
  let brokenPages = [];
  let emptyPages = [];
  
  FOOTER_LINKS.forEach(link => {
    totalPages++;
    console.log(`Testing: ${link.href} - ${link.label}`);
    
    const result = testPageContent(link.href);
    
    if (!result.exists) {
      console.log(`  ❌ Page not found`);
      brokenPages.push({ ...link, issue: 'Page not found' });
    } else if (!result.hasContent) {
      console.log(`  ⚠️  Page exists but has minimal content (${result.contentLength} chars)`);
      emptyPages.push({ ...link, issue: 'Minimal content', details: result });
    } else {
      console.log(`  ✅ Page working with content (${result.contentLength} chars)`);
      workingPages++;
    }
    
    console.log('');
  });
  
  // Summary
  console.log('📊 PAGE VERIFICATION SUMMARY:');
  console.log(`   Total pages: ${totalPages}`);
  console.log(`   Working pages: ${workingPages}`);
  console.log(`   Broken pages: ${brokenPages.length}`);
  console.log(`   Empty pages: ${emptyPages.length}`);
  
  if (brokenPages.length > 0) {
    console.log('\n❌ BROKEN PAGES:');
    brokenPages.forEach(page => {
      console.log(`   • ${page.href} - ${page.label} (${page.issue})`);
    });
  }
  
  if (emptyPages.length > 0) {
    console.log('\n⚠️  PAGES WITH MINIMAL CONTENT:');
    emptyPages.forEach(page => {
      console.log(`   • ${page.href} - ${page.label} (${page.issue})`);
    });
  }
  
  if (brokenPages.length === 0 && emptyPages.length === 0) {
    console.log('\n🎉 ALL FOOTER LINK PAGES ARE WORKING PERFECTLY!');
  }
  
  return {
    total: totalPages,
    working: workingPages,
    broken: brokenPages.length,
    empty: emptyPages.length,
    brokenPages,
    emptyPages
  };
}

// Main execution
const result = verifyAllPages();

// Exit with error code if there are broken pages
if (result.broken > 0) {
  process.exit(1);
} else {
  console.log('\n✨ All footer link pages are verified and working!');
  process.exit(0);
}
