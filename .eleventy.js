import markdownIt from "markdown-it";
import { fromHighlighter } from "@shikijs/markdown-it/core";
import { createHighlighter } from "shiki";

export default async function (eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy({ public: "/" });

  // Collections
  eleventyConfig.addCollection("articles", (collection) => {
    return collection
      .getFilteredByGlob("content/articles/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Create a collection of unique tags from articles, deduplicated by slug
  eleventyConfig.addCollection("tagList", (collection) => {
    const articles = collection.getFilteredByGlob("content/articles/**/*.md");
    const tagMap = new Map(); // Use Map to deduplicate by slug
    const slugify = (str) =>
      str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

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
    themes: ["dracula"],
    langs: [
      "javascript",
      "js",
      "typescript",
      "ts",
      "jsx",
      "tsx",
      "json",
      "css",
      "html",
      "bash",
      "shell",
      "python",
      "go",
      "rust",
      "java",
      "c",
      "cpp",
      "yaml",
      "xml",
      "markdown",
      "md",
      "gherkin",
      "sql",
    ],
  });

  const md = markdownIt({ html: true, linkify: true, typographer: true });
  md.use(
    fromHighlighter(highlighter, {
      theme: "dracula",
    }),
  );

  // Resolve Obsidian-style wiki-links: [[slug|label]] → <a href="/content/articles/slug/">label</a>
  // Also handles [[slug]] (no label) by generating a title from the slug
  const wikiLinkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  const defaultInlineRule =
    md.renderer.rules.text ||
    function (tokens, idx) {
      return tokens[idx].content;
    };
  md.renderer.rules.text = function (tokens, idx, options, env, renderer) {
    const content = tokens[idx].content;
    if (!content.includes("[["))
      return defaultInlineRule(tokens, idx, options, env, renderer);
    return content.replace(wikiLinkRegex, (_, rawSlug, label) => {
      const slug = rawSlug
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      const displayText =
        label ||
        rawSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      const href = `/content/articles/${slug}/`;
      return `<a href="${href}" class="internal-link" title="${displayText}">${displayText}</a>`;
    });
  };

  // Configure external links to open in new tab
  const defaultRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, renderer) {
      return renderer.renderToken(tokens, idx, options);
    };

  md.renderer.rules.link_open = function (tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    const href = token.attrGet("href");

    if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
      token.attrSet("target", "_blank");
      token.attrSet("rel", "noopener");
    }

    return defaultRender(tokens, idx, options, env, renderer);
  };

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("dateISO", (dateObj) => {
    const date = dateObj === "now" ? new Date() : new Date(dateObj);
    return date.toISOString().slice(0, 10);
  });
  eleventyConfig.addFilter("date", (dateObj) => {
    return dateObj === "now" ? new Date() : new Date(dateObj);
  });
  eleventyConfig.addFilter("unique", (arr) => [...new Set(arr)]);
  eleventyConfig.addFilter("slugify", (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  });
  eleventyConfig.addFilter("find", (arr, key, value) => {
    return arr.find((item) => item[key] === value);
  });
  eleventyConfig.addFilter("url_encode", (str) => {
    return encodeURIComponent(str);
  });

  // Extract and render resume sections — reuses the global `md` instance above
  eleventyConfig.addFilter("extractResumeContent", (content) => {
    if (!content || typeof content !== "string") return "";

    // Extract only the sections we want (skip the header)
    const lines = content.split("\n");
    let resumeLines = [];
    let inResumeSection = false;

    for (const line of lines) {
      if (
        line.includes("## Work History") ||
        line.includes("**WORK EXPERIENCE**")
      ) {
        inResumeSection = true;
      }
      if (inResumeSection) resumeLines.push(line);
    }

    // Convert markdown to HTML using the global renderer (already has Shiki + external link rules)
    let htmlContent = md.render(resumeLines.join("\n"));

    // Add IDs to H2 headings for anchor links
    const slugifyHeading = (text) =>
      text
        .toLowerCase()
        .replace(/\*\*/g, "")
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-")
        .trim();

    htmlContent = htmlContent.replace(
      /<h2>(.*?)<\/h2>/g,
      (_, c) => `<h2 id="${slugifyHeading(c)}">${c}</h2>`,
    );
    htmlContent = htmlContent.replace(
      /<h3>(.*?)<\/h3>/g,
      (_, c) => `<h3 id="${slugifyHeading(c)}">${c}</h3>`,
    );

    // Add IDs to strong elements that look like job titles
    htmlContent = htmlContent.replace(
      /<p><strong>([^<]+?)\s+<a[^>]*>([^<]+?)<\/a><\/strong>\s+<strong>([^<]+?)<\/strong>/g,
      (match, title, company, date) => {
        const id = `${slugifyHeading(title)}-${slugifyHeading(company)}`;
        const href = match.match(/href="([^"]+)"/)?.[1] || "#";
        return `<p id="${id}"><strong>${title} <a href="${href}">${company}</a></strong> <strong>${date}</strong>`;
      },
    );

    return `<div class="resume-content">${htmlContent}</div>`;
  });

  return {
    dir: {
      input: ".",
      includes: "src/layouts",
      data: "src/_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
  };
}
