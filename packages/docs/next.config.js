/* eslint-disable no-param-reassign */
const remarkAutoLinkHeadings = require('remark-autolink-headings');
const remarkEmoji = require('remark-emoji');
const remarkImages = require('remark-images');
const remarkSlug = require('remark-slug');
const remarkUnwrapImages = require('remark-unwrap-images');
const path = require('path');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkAutoLinkHeadings,
      remarkEmoji,
      remarkImages,
      remarkSlug,
      remarkUnwrapImages
    ]
  }
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: config => {
    // Alias
    config.resolve.alias['@templates'] = path.join(__dirname, './templates');
    config.resolve.alias['@layouts'] = path.join(__dirname, './layouts');
    config.resolve.alias['@components'] = path.join(__dirname, './components');
    config.resolve.alias['@config'] = path.join(__dirname, './config');
    config.resolve.alias['@templates'] = path.join(__dirname, './templates');

    return config;
  }
});
