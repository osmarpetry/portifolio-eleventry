import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const siteDir = '_site';

// Test 1: Check if all required files exist
console.log('🧪 Testing build output...');

const requiredFiles = [
  'index.html',
  'articles/index.html',
  'resume.pdf',
  'feed.xml',
  'sitemap.xml',
  'favicon.svg',
  'robots.txt'
];

let passed = 0;
let failed = 0;

requiredFiles.forEach(file => {
  const filePath = join(siteDir, file);
  if (existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
    passed++;
  } else {
    console.log(`❌ ${file} missing`);
    failed++;
  }
});

// Test 2: Check homepage content
console.log('\n🧪 Testing homepage content...');

try {
  const homepageContent = readFileSync(join(siteDir, 'index.html'), 'utf-8');
  
  // Should NOT contain Latest Articles
  if (!homepageContent.includes('Latest Articles')) {
    console.log('✅ Homepage does not contain "Latest Articles"');
    passed++;
  } else {
    console.log('❌ Homepage still contains "Latest Articles"');
    failed++;
  }
  
  // Should NOT contain "No posts yet"
  if (!homepageContent.includes('No posts yet')) {
    console.log('✅ Homepage does not contain "No posts yet"');
    passed++;
  } else {
    console.log('❌ Homepage still contains "No posts yet"');
    failed++;
  }
  
  // Should contain hero buttons
  if (homepageContent.includes('hero-buttons')) {
    console.log('✅ Homepage contains hero buttons');
    passed++;
  } else {
    console.log('❌ Homepage missing hero buttons');
    failed++;
  }
  
  // Should contain Articles button
  if (homepageContent.includes('href="/articles/"') && homepageContent.includes('>Articles</a>')) {
    console.log('✅ Homepage contains Articles button');
    passed++;
  } else {
    console.log('❌ Homepage missing Articles button');
    failed++;
  }
  
  // Should contain theme switcher
  if (homepageContent.includes('theme-toggle')) {
    console.log('✅ Homepage contains theme switcher');
    passed++;
  } else {
    console.log('❌ Homepage missing theme switcher');
    failed++;
  }
  
  // Should contain resume content with all 5 sections
  if (homepageContent.includes('resume-content')) {
    console.log('✅ Homepage contains resume content');
    passed++;
  } else {
    console.log('❌ Homepage missing resume content');
    failed++;
  }
  
  // Should contain multiple resume sections
  const sectionCount = (homepageContent.match(/<h2[^>]*>/g) || []).length;
  if (sectionCount >= 4) {
    console.log(`✅ Homepage contains ${sectionCount} resume sections`);
    passed++;
  } else {
    console.log(`❌ Homepage only contains ${sectionCount} resume sections (expected 4+)`);
    failed++;
  }
  
} catch (error) {
  console.log('❌ Error reading homepage:', error.message);
  failed++;
}

// Test 3: Check articles page
console.log('\n🧪 Testing articles page...');

try {
  const articlesContent = readFileSync(join(siteDir, 'articles/index.html'), 'utf-8');
  
  // Should NOT contain articles-header
  if (!articlesContent.includes('articles-header')) {
    console.log('✅ Articles page does not contain articles-header');
    passed++;
  } else {
    console.log('❌ Articles page still contains articles-header');
    failed++;
  }
  
  // Should NOT contain navigation buttons in header
  if (!articlesContent.includes('Download CV') || !articlesContent.includes('nav aria-label="Quick links"')) {
    console.log('✅ Articles page does not contain navigation buttons');
    passed++;
  } else {
    console.log('❌ Articles page still contains navigation buttons');
    failed++;
  }
  
  // Should contain tag filter
  if (articlesContent.includes('Filter by tag')) {
    console.log('✅ Articles page contains tag filter');
    passed++;
  } else {
    console.log('❌ Articles page missing tag filter');
    failed++;
  }
  
} catch (error) {
  console.log('❌ Error reading articles page:', error.message);
  failed++;
}

// Test 4: Check post page
console.log('\n🧪 Testing post page...');

try {
  const postContent = readFileSync(join(siteDir, 'content/articles/optimizing-react-with-memoization/index.html'), 'utf-8');
  
  // Should contain copy button functionality
  if (postContent.includes('copy-btn')) {
    console.log('✅ Post contains copy button functionality');
    passed++;
  } else {
    console.log('❌ Post missing copy button functionality');
    failed++;
  }
  
  // Should contain section links functionality
  if (postContent.includes('section-link')) {
    console.log('✅ Post contains section links functionality');
    passed++;
  } else {
    console.log('❌ Post missing section links functionality');
    failed++;
  }
  
  // Should contain Dracula theme
  if (postContent.includes('#282a36')) {
    console.log('✅ Post contains Dracula theme colors');
    passed++;
  } else {
    console.log('❌ Post missing Dracula theme colors');
    failed++;
  }
  
  // Should contain share buttons
  if (postContent.includes('share-buttons')) {
    console.log('✅ Post contains share buttons');
    passed++;
  } else {
    console.log('❌ Post missing share buttons');
    failed++;
  }
  
  // Should contain social media share links
  if (postContent.includes('x.com/intent/tweet') && postContent.includes('linkedin.com/sharing')) {
    console.log('✅ Post contains social media share links (X and LinkedIn)');
    passed++;
  } else {
    console.log('❌ Post missing social media share links');
    failed++;
  }
  
  // Should contain top-positioned share buttons
  if (postContent.includes('top-share') && postContent.includes('native-share')) {
    console.log('✅ Post contains top-positioned share buttons with native share');
    passed++;
  } else {
    console.log('❌ Post missing top-positioned share buttons');
    failed++;
  }
  
  // Should contain share tracking
  if (postContent.includes('trackShare') && postContent.includes('gtag')) {
    console.log('✅ Post contains share tracking functionality');
    passed++;
  } else {
    console.log('❌ Post missing share tracking functionality');
    failed++;
  }
  
  // Should contain clickable headings in posts
  if (postContent.includes('Click to copy section link') && postContent.includes('copyLinkAndScroll')) {
    console.log('✅ Post headings are clickable to copy links');
    passed++;
  } else {
    console.log('❌ Post headings missing clickable functionality');
    failed++;
  }
  
  // Should contain smooth scroll functionality
  if (postContent.includes('scrollIntoView') && postContent.includes('behavior: \'smooth\'')) {
    console.log('✅ Post contains smooth scroll to sections');
    passed++;
  } else {
    console.log('❌ Post missing smooth scroll functionality');
    failed++;
  }
  
} catch (error) {
  console.log('❌ Error reading post page:', error.message);
  failed++;
}

// Test 5: Check CSS for footer positioning
console.log('\n🧪 Testing CSS structure...');

try {
  const homepageContent = readFileSync(join(siteDir, 'index.html'), 'utf-8');
  
  // Should contain flexbox layout for footer positioning
  if (homepageContent.includes('min-height:100vh') && homepageContent.includes('flex-direction:column')) {
    console.log('✅ CSS contains proper footer positioning');
    passed++;
  } else {
    console.log('❌ CSS missing proper footer positioning');
    failed++;
  }
  
} catch (error) {
  console.log('❌ Error checking CSS:', error.message);
  failed++;
}

// Test 6: Check theme switcher functionality
console.log('\n🧪 Testing theme switcher...');

try {
  const homepageContent = readFileSync(join(siteDir, 'index.html'), 'utf-8');
  
  // Should contain theme switcher script
  if (homepageContent.includes('applyTheme') && homepageContent.includes('classList.add(\'dark\')')) {
    console.log('✅ Theme switcher script is properly configured');
    passed++;
  } else {
    console.log('❌ Theme switcher script missing or misconfigured');
    failed++;
  }
  
  // Should contain dark theme CSS class
  if (homepageContent.includes('.dark{')) {
    console.log('✅ Dark theme CSS class is defined');
    passed++;
  } else {
    console.log('❌ Dark theme CSS class missing');
    failed++;
  }
  
  // Should contain debug logging for theme switcher
  if (homepageContent.includes('console.log(\'Applying theme:\'') && homepageContent.includes('console.log(\'Initial theme:\'')) {
    console.log('✅ Theme switcher contains debug logging');
    passed++;
  } else {
    console.log('❌ Theme switcher missing debug logging');
    failed++;
  }
  
  // Should contain improved theme initialization
  if (homepageContent.includes('DOMContentLoaded') && homepageContent.includes('bodyElement.classList')) {
    console.log('✅ Theme switcher has improved initialization with DOM ready');
    passed++;
  } else {
    console.log('❌ Theme switcher missing improved DOM initialization');
    failed++;
  }
  
  // Should contain both body and html class manipulation
  if (homepageContent.includes('bodyElement.classList.add') && homepageContent.includes('htmlElement.classList.add')) {
    console.log('✅ Theme switcher manipulates both body and html classes');
    passed++;
  } else {
    console.log('❌ Theme switcher missing body/html class manipulation');
    failed++;
  }
  
  // Should contain event prevention
  if (homepageContent.includes('e.preventDefault()')) {
    console.log('✅ Theme switcher prevents default event behavior');
    passed++;
  } else {
    console.log('❌ Theme switcher missing event prevention');
    failed++;
  }
  
  // Should contain system theme change listener
  if (homepageContent.includes('matchMedia(\'(prefers-color-scheme: dark)\').addEventListener')) {
    console.log('✅ Theme switcher listens for system theme changes');
    passed++;
  } else {
    console.log('❌ Theme switcher missing system theme listener');
    failed++;
  }
  
} catch (error) {
  console.log('❌ Error checking theme switcher:', error.message);
  failed++;
}

// Test 7: Check homepage section links
console.log('\n🧪 Testing homepage section links...');

try {
  const homepageContent = readFileSync(join(siteDir, 'index.html'), 'utf-8');
  
  // Should contain section IDs
  if (homepageContent.includes('id="about"') && homepageContent.includes('id="experience"')) {
    console.log('✅ Homepage contains section IDs');
    passed++;
  } else {
    console.log('❌ Homepage missing section IDs');
    failed++;
  }
  
  // Should contain section link script
  if (homepageContent.includes('section-link') && homepageContent.includes('Copy section link')) {
    console.log('✅ Homepage contains section link functionality');
    passed++;
  } else {
    console.log('❌ Homepage missing section link functionality');
    failed++;
  }
  
  // Should contain H2 IDs in resume content
  if (homepageContent.includes('<h2 id="work-experience">') || homepageContent.includes('<h2 id=')) {
    console.log('✅ Resume sections have anchor IDs');
    passed++;
  } else {
    console.log('❌ Resume sections missing anchor IDs');
    failed++;
  }
  
  // Should contain clickable headings functionality
  if (homepageContent.includes('Click to copy section link') && homepageContent.includes('copyLinkAndScroll')) {
    console.log('✅ Homepage headings are clickable to copy links');
    passed++;
  } else {
    console.log('❌ Homepage headings missing clickable functionality');
    failed++;
  }
  
  // Should contain individual experience IDs
  if (homepageContent.includes('<p id=') || homepageContent.includes('<h3 id=')) {
    console.log('✅ Individual experiences have anchor IDs');
    passed++;
  } else {
    console.log('❌ Individual experiences missing anchor IDs');
    failed++;
  }
  
} catch (error) {
  console.log('❌ Error checking homepage section links:', error.message);
  failed++;
}

// Summary
console.log('\n📊 Test Summary:');
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📈 Success Rate: ${Math.round((passed / (passed + failed)) * 100)}%`);

if (failed === 0) {
  console.log('\n🎉 All tests passed! The site is working correctly.');
  process.exit(0);
} else {
  console.log('\n⚠️  Some tests failed. Please check the issues above.');
  process.exit(1);
}
