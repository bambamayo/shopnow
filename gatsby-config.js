module.exports = {
  siteMetadata: {
    title: `ShopNow`,
    description: `ShopNow - Shop For Your Favourite Clothes`,
    author: `Agunroye Ayobami`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"],
      },
    },
  ],
};
