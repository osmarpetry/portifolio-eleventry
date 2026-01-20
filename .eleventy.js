import markdownIt from "markdown-it";
import { fromHighlighter } from "@shikijs/markdown-it/core";
import { createHighlighter } from "shiki";

export default async function(eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy({"public": "/"});

  // Collections
  eleventyConfig.addCollection("articles", (collection) => {
    return collection.getFilteredByGlob("content/articles/**/*.md").sort((a,b)=> b.date - a.date);
  });

  // Create a collection of unique tags from articles, deduplicated by slug
  eleventyConfig.addCollection("tagList", (collection) => {
    const articles = collection.getFilteredByGlob("content/articles/**/*.md");
    const tagMap = new Map(); // Use Map to deduplicate by slug
    const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    
    articles.forEach((item) => {
      if (item.data.tags) {
        item.data.tags.forEach((tag) => {
          const slug = slugify(tag);
          if (!tagMap.has(slug)) {
            tagMap.set(slug, tag); // Store first occurrence of each slug
          }
        });
      }
    });
    return Array.from(tagMap.values()).sort();
  });

  // Syntax highlighting with Shiki
  const highlighter = await createHighlighter({
    themes: ['dracula'],
    langs: ['javascript', 'js', 'typescript', 'ts', 'jsx', 'tsx', 'json', 'css', 'html', 'bash', 'shell', 'python', 'go', 'rust', 'java', 'c', 'cpp', 'yaml', 'xml', 'markdown', 'md']
  });

  const md = markdownIt({html:true, linkify:true, typographer:true});
  md.use(fromHighlighter(highlighter, {
    theme: 'dracula'
  }));
  
  // Configure external links to open in new tab
  const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, renderer) {
    return renderer.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.link_open = function (tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    const href = token.attrGet('href');
    
    if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
      token.attrSet('target', '_blank');
      token.attrSet('rel', 'noopener');
    }
    
    return defaultRender(tokens, idx, options, env, renderer);
  };
  
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("dateISO", (dateObj) => {
    const date = dateObj === "now" ? new Date() : new Date(dateObj);
    return date.toISOString().slice(0,10);
  });
  eleventyConfig.addFilter("date", (dateObj) => {
    return dateObj === "now" ? new Date() : new Date(dateObj);
  });
  eleventyConfig.addFilter("unique", (arr) => [...new Set(arr)]);
  eleventyConfig.addFilter("slugify", (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  });
  eleventyConfig.addFilter("find", (arr, key, value) => {
    return arr.find(item => item[key] === value);
  });
  eleventyConfig.addFilter("url_encode", (str) => {
    return encodeURIComponent(str);
  });
  
  // Extract and render resume sections (Work Experience, Technologies, Education, Projects, Other)
  eleventyConfig.addFilter("extractResumeContent", (content) => {
    if (!content || typeof content !== 'string') {
      return '';
    }
    
    // Use markdown-it to process the content
    const md = markdownIt({html:true, linkify:true, typographer:true});
    
    // Configure external links to open in new tab for resume content
    const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, renderer) {
      return renderer.renderToken(tokens, idx, options);
    };
    
    md.renderer.rules.link_open = function (tokens, idx, options, env, renderer) {
      const token = tokens[idx];
      const href = token.attrGet('href');
      
      if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
        token.attrSet('target', '_blank');
        token.attrSet('rel', 'noopener');
      }
      
      return defaultRender(tokens, idx, options, env, renderer);
    };
    
    // Extract only the sections we want (skip the header)
    const lines = content.split('\n');
    let resumeLines = [];
    let inResumeSection = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Start capturing from Work History section
      if (line.includes('## Work History') || line.includes('**WORK EXPERIENCE**')) {
        inResumeSection = true;
      }
      
      if (inResumeSection) {
        resumeLines.push(line);
      }
    }
    
    // Convert markdown to HTML
    const resumeMarkdown = resumeLines.join('\n');
    let htmlContent = md.render(resumeMarkdown);
    
    // Add IDs to H2 and H3 headings for anchor links
    htmlContent = htmlContent.replace(/<h2>(.*?)<\/h2>/g, (match, content) => {
      const id = content.toLowerCase()
        .replace(/\*\*/g, '') // Remove markdown bold
        .replace(/[^a-z0-9\s]/g, '') // Remove special chars
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim();
      return `<h2 id="${id}">${content}</h2>`;
    });
    
    // Add IDs to H3 headings (individual experiences)
    htmlContent = htmlContent.replace(/<h3>(.*?)<\/h3>/g, (match, content) => {
      const id = content.toLowerCase()
        .replace(/\*\*/g, '') // Remove markdown bold
        .replace(/[^a-z0-9\s]/g, '') // Remove special chars
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim();
      return `<h3 id="${id}">${content}</h3>`;
    });
    
    // Add IDs to strong elements that look like job titles (for individual experiences)
    htmlContent = htmlContent.replace(/<p><strong>([^<]+?)\s+<a[^>]*>([^<]+?)<\/a><\/strong>\s+<strong>([^<]+?)<\/strong>/g, (match, title, company, date) => {
      const id = `${title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`;
      return `<p id="${id}"><strong>${title} <a href="${match.match(/href="([^"]+)"/)?.[1] || '#'}">${company}</a></strong> <strong>${date}</strong>`;
    });
    
    // Wrap in a resume container
    htmlContent = `<div class="resume-content">${htmlContent}</div>`;
    
    return htmlContent;
  });

  return {
    dir: { input: ".", includes: "src/layouts", data: "src/_data", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk","md"]
  }
}