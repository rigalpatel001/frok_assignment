import userResolvers from './user';
import countryResolvers from './country';
import statesResolvers from './states';
import cityResolvers from './city';
import countrycodeResolvers from './countrycode';

import { GraphQLDate } from 'graphql-iso-date';

const customScalarResolver = {
  Date: GraphQLDate,
};

export default [
  customScalarResolver,
  userResolvers,
  countryResolvers,
  statesResolvers,
  cityResolvers,
  countrycodeResolvers,
];
