import { gql } from "graphql-tag";

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Query {
    books: [Book!]!
    authors: [Author!]!
    book(id: ID!): Book
    author(id: ID!): Author
  }

  type Mutation {
    addBook(title: String!, authorId: ID!): Book!
    addAuthorToBook(bookId: ID!, name: String!): AddAuthorToBookResult!
  }

  type AddAuthorToBookResult {
    book: Book!
    author: Author!
  }
`;

export default typeDefs;
