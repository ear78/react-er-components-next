// const withSass = require('@zeit/next-sass')


module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    },

  // sass: {
  //   withSass({
  //     cssModules: true,
  //     cssLoaderOptions: {
  //       importLoaders: 1,
  //       localIdentName: "[local]___[hash:base64:5]",
  //     }
  //   })
  // }
  
};