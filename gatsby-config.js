module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'faq',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-remark'
  ],
};
