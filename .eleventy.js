module.exports = function(eleventyConfig) {

    // Pass through static files
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("images");

    // Posts collection
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("posts/*.md");
    });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};