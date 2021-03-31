
const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");

const imageShortcode = require('./src/_11ty/shortcodes/image');

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  // Filters
  eleventyConfig.addFilter( 'dump', require('./src/_11ty/filters/dump' ) );
  eleventyConfig.addFilter( 'head', require('./src/_11ty/filters/head' ) );
  eleventyConfig.addFilter( 'includesvg', require( './src/_11ty/filters/includesvg' ));

  // Shortcodes
  eleventyConfig.addShortcode( 'copyrightDate', require( './src/_11ty/shortcodes/copyrightDate' ) );
  eleventyConfig.addShortcode( 'dateFormat', require( './src/_11ty/shortcodes/dateFormat' ) );

  // Images
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  // Layout aliases make templates more portable.
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("project", "layouts/project.njk");

  // Copy all images directly to dist.
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });

  return {
    dir: {
      input: "src/site",
      includes: "_includes", // relative to dir.input
      output: "build",
    },
    passthroughFileCopy: true
  };
}
