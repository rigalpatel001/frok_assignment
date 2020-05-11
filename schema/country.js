import { gql } from 'apollo-server-express';
export default gql`
  extend type Query {
    country: [Country!]!
  }

  type Country {
    id: ID!
    name: String!
    iso3: String!
    iso2: String!
    phone_code: String!
    capital: String!
    currency: String!
  }
`;
