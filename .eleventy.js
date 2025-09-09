module.exports = function(eleventyConfig) {
  // Pass through (copy) static assets to the output directory (_dist)
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/inwidget");
  eleventyConfig.addPassthroughCopy("src/.htaccess");

  return {
    // Define source and output directories
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    },
    // All HTML files will be processed by the Liquid template engine
    htmlTemplateEngine: "liquid",
    pathPrefix: "/skolam-net.ru2/" // Add this line for GitHub Pages deployment
  };
};