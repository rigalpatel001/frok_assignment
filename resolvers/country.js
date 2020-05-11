export default {
  Query: {
    country: async (parent, args, { models }) => {
      return await models.Country.findAll();
    },
  },
};
