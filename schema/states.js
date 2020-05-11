import { gql } from 'apollo-server-express';
export default gql`
  extend type Query {
    state(id: ID!): [State!]!
  }

  type State {
    id: ID!
    name: String!
    country_id: String!
  }
`;
