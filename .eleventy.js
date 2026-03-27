module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");
  return {
    pathPrefix: "/0cms-example-eleventy/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
