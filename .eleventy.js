const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginNavigation);

  // Filters
  eleventyConfig.addFilter( 'dump', require('./src/_11ty/filters/dump' ) );
  eleventyConfig.addFilter( 'head', require('./src/_11ty/filters/head' ) );
  eleventyConfig.addFilter( 'includesvg', require( './src/_11ty/filters/includesvg' ));

  // Shortcodes
  eleventyConfig.addShortcode( 'copyrightDate', require( './src/_11ty/shortcodes/copyrightDate' ) );
  eleventyConfig.addShortcode( 'dateFormat', require( './src/_11ty/shortcodes/dateFormat' ) );

  // Layout aliases make templates more portable.
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("project", "layouts/project.njk");

  // Copy all images directly to dist.
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });

  // Copy external dependencies to dist.
  eleventyConfig.addPassthroughCopy({ "src/vendor": "vendor" });

  // Reload the page every time the JS/CSS are changed.
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    files: [
      './dist/assets/**/*.css',
      './dist/assets/**/*.js'
    ]
  });

  eleventyConfig.addCollection("categoryList", function(collection) {
    let set = new Set();
    collection.getAll().forEach(function(item) {
      if( "categories" in item.data ) {
        let categories = item.data.categories;

        categories = categories.filter(function(item) {
          switch(item) {
            // this list should match the `filter` list in categories.njk
            case "all":
            case "nav":
            case "page":
            case "pages":
            case "post":
            case "posts":
              return false;
          }

          return true;
        });

        for (const category of categories) {
          set.add(category);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...set];
  });

  return {
    dir: {
      input: "src/site",
      includes: "_includes", // relative to dir.input
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
