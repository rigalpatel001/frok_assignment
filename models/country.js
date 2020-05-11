const country = (sequelize, DataTypes) => {
  const Country = sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
    },
    iso3: {
      type: DataTypes.STRING,
    },
    iso2: {
      type: DataTypes.STRING,
    },
    phone_code: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
    },
    currency: {
      type: DataTypes.STRING,
    },
  });

  return Country;
};
export default country;
