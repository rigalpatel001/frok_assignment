import { gql } from 'apollo-server-express';
export default gql`
  extend type Query {
    countrycode(name: String!): [Countrycode!]!
  }

  type Countrycode {
    name: String
    dial_code: String
    code: String
  }
`;
