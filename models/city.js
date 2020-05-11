const city = (sequelize, DataTypes) => {
  const City = sequelize.define('city', {
    name: {
      type: DataTypes.STRING,
    },
  });

  return City;
};
export default city;
