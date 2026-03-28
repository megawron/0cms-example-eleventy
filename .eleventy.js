module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");
  return {
    pathPrefix: "/example-eleventy/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
