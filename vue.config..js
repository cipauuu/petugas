const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  // ...
  configureWebpack: {
    plugins: [
      new WorkboxPlugin.GenerateSW({
        swDest: 'sw.js',
        // Add other configuration options as needed
      }),
    ],
  },
};
