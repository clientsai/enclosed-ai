#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Footer links from the Footer component
const FOOTER_LINKS = {
  product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/templates", label: "Templates" },
    { href: "/integrations", label: "Integrations" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/docs", label: "Documentation" },
    { href: "/help", label: "Help Center" },
    { href: "/blog", label: "Blog" },
    { href: "/case-studies", label: "Case Studies" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/security", label: "Security" },
    { href: "/gdpr", label: "GDPR" },
  ],
};

function checkPageExists(href) {
  const pagePath = path.join(process.cwd(), 'src/app', href, 'page.tsx');
  return fs.existsSync(pagePath);
}

function verifyFooterLinks() {
  console.log('🔍 Verifying All Footer Links...\n');
  
  let totalLinks = 0;
  let workingLinks = 0;
  let brokenLinks = [];
  
  Object.entries(FOOTER_LINKS).forEach(([category, links]) => {
    console.log(`📂 ${category.toUpperCase()}:`);
    
    links.forEach(link => {
      totalLinks++;
      const exists = checkPageExists(link.href);
      
      if (exists) {
        console.log(`  ✅ ${link.href} - ${link.label}`);
        workingLinks++;
      } else {
        console.log(`  ❌ ${link.href} - ${link.label} (MISSING)`);
        brokenLinks.push(link);
      }
    });
    
    console.log('');
  });
  
  // Summary
  console.log('📊 VERIFICATION SUMMARY:');
  console.log(`   Total links: ${totalLinks}`);
  console.log(`   Working links: ${workingLinks}`);
  console.log(`   Broken links: ${brokenLinks.length}`);
  
  if (brokenLinks.length > 0) {
    console.log('\n❌ BROKEN LINKS FOUND:');
    brokenLinks.forEach(link => {
      console.log(`   • ${link.href} - ${link.label}`);
    });
  } else {
    console.log('\n🎉 ALL FOOTER LINKS ARE WORKING!');
  }
  
  return {
    total: totalLinks,
    working: workingLinks,
    broken: brokenLinks.length,
    brokenLinks
  };
}

// Main execution
const result = verifyFooterLinks();

// Exit with error code if there are broken links
if (result.broken > 0) {
  process.exit(1);
} else {
  console.log('\n✨ All footer links are verified and working!');
  process.exit(0);
}
