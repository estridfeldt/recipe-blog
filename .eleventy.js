module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("allPosts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/**/*.md")
      .map((post, index, posts) => {
        post.data["previousPost"] = posts[index - 1];
        post.data["nextPost"] = posts[index + 1];
        return post;
      });
  });

  eleventyConfig.addPassthroughCopy("CNAME");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
