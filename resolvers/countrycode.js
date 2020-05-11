export default {
	Query: {
		countrycode: async (parent, { name = "" }, { models }) => {
			return await models.Countrycode.findAll({
				attributes: ["name", "code", "dial_code"],
				where: {
					name: name
				}
			});
		}
	}
};
