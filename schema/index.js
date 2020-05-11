import { gql } from 'apollo-server-express';
import userSchema from './user';
import countrySchema from './country';
import statesSchema from './states';
import citySchema from './city';
import countrycodeSchema from './countrycode';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;
export default [
  linkSchema,
  userSchema,
  countrySchema,
  statesSchema,
  citySchema,
  countrycodeSchema,
];
