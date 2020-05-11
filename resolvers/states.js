export default {
	Query: {
		state: async (user, { id = 0 }, { models }) => {
			return await models.States.findAll({
				where: {
					country_id: id
				}
			});
		}
	}
};
