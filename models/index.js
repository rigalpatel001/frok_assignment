import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  },
);

const models = {
  User: sequelize.import('./user'),
  Country: sequelize.import('./country'),
  States: sequelize.import('./states'),
  City: sequelize.import('./city'),
  Countrycode: sequelize.import('./countrycode'),
};
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export default models;

export { sequelize };
