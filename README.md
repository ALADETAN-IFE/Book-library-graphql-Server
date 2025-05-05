# Book Library GraphQL Server

This project is a GraphQL server for a book library. It uses Apollo Server to expose a GraphQL API for managing books and authors. The server is built with TypeScript and includes in-memory data for demonstration purposes.  
**Note:** I am currently learning GraphQL and using this project to deepen my understanding of its concepts and implementation.

## Project Structure

```
book-library-graphql
└── server
    ├── .env              // Environment variables
    ├── data.ts           // In-memory data for books and authors
    ├── index.ts          // Server entry point
    ├── package.json      // Project configuration and scripts
    ├── resolvers.ts      // GraphQL resolvers
    ├── schema.ts         // GraphQL type definitions
    ├── tsconfig.json     // TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm (v6+)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/book-library-graphql-Server.git
cd book-library-graphql/server
npm install
```

### Environment Variables

Create a `.env` file in the server folder with the following content (or update as needed):

```properties
PORT=400
```

### Running the Server

For development, run:

```bash
npm run dev
```

This command uses `ts-node` with nodemon for hot-reloading on code changes.

For production (or a production-like build), run:

```bash
npm start
```

This command builds the TypeScript source into JavaScript (in the `dist` folder) and then starts the server using nodemon.

The server will run on the port specified in your `.env` file (default is 400). Once running, you can access the GraphQL playground at the server URL.

## GraphQL API

### Queries

- **books**: Returns an array of all books.
- **authors**: Returns an array of all authors.
- **book(id: ID!)**: Returns a book by its ID.
- **author(id: ID!)**: Returns an author by their ID.

### Mutations

- **addBook(title: String!, authorId: ID!)**: Adds a new book.
- **addAuthorToBook(bookId: ID!, name: String!)**: Adds an author to an existing book and returns an object containing the updated book and the new author.

The `AddAuthorToBookResult` type returns:

```graphql
type AddAuthorToBookResult {
  book: Book!
  author: Author!
}
```

### Sample GraphQL Queries and Mutations

#### Sample Query

```graphql
query GetBooks {
  books {
    id
    title
    author {
      id
      name
    }
  }
}
```

#### Sample Mutation

```graphql
mutation {
  addAuthorToBook(bookId: "1", name: "New Author") {
    book {
      id
      title
    }
    author {
      id
      name
    }
  }
}
```

## Development Tools

- **Apollo Server**: The GraphQL server framework.
- **TypeScript**: Provides static type-checking.
- **nodemon**: Automatically restarts the server when file changes occur.
- **dotenv**: Loads environment variables from the `.env` file.

## License

This project is licensed under the ISC License.