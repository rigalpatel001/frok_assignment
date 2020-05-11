export default {
	Query: {
		city: async (user, { id = 0 }, { models }) => {
			return await models.City.findAll({
				where: {
					state_id: id
				}
			});
		}
	}
};
