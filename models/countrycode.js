const countrycode = (sequelize, DataTypes) => {
  const Countrycode = sequelize.define('countrycode', {
    name: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
    dial_code: {
      type: DataTypes.STRING,
    },
  });

  return Countrycode;
};
export default countrycode;
