const fs = require("fs");
const path = require("path");

const manifestPath = path.resolve(__dirname, "dist", "assets", "manifest.json");
const manifest = JSON.parse(
  fs.readFileSync(manifestPath, { encoding: "utf8" })
);

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
  eleventyConfig.setBrowserSyncConfig({ files: [manifestPath] });

  // Adds a universal shortcode to return the URL to a webpack asset. In Nunjack templates:
  // {% webpackAsset 'main.js' %} or {% webpackAsset 'main.css' %}
  eleventyConfig.addShortcode("webpackAsset", function(name) {
    if (!manifest[name]) {
        throw new Error(`The asset ${name} does not exist in ${manifestPath}`);
    }
    return manifest[name];
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
