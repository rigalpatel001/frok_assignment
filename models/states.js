const state = (sequelize, DataTypes) => {
  const State = sequelize.define('state', {
    name: {
      type: DataTypes.STRING,
    },
  });

  return State;
};
export default state;
