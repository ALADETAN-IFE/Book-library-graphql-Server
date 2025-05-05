import { authors, books } from './data';

interface Book {
    id: string;
    title: string;
    authorId: string;
}

interface Author {
    id: string;
    name: string;
}

let bookId = books.length + 1;
let authorId = authors.length + 1;

const resolvers = {
  Query: {
    books: (): Book[] => books,
    authors: (): Author[] => authors,
    book: (_: unknown, { id }: { id: string }): Book | undefined =>
      books.find(book => book.id === id),
    author: (_: unknown, { id }: { id: string }): Author | undefined =>
      authors.find(author => author.id === id),
  },
  Mutation: {
    addBook: (_: unknown, { title, authorId }: { title: string; authorId: string }): Book => {
      const newBook: Book = {
        id: String(bookId++),
        title,
        authorId,
      };
      books.push(newBook);
      return newBook;
    },
    // addAuthor: (_: unknown, { name }: { name: string }): Author => {
    //   const newAuthor: Author = {
    //     id: String(authorId++),
    //     name,
    //   };
    //   authors.push(newAuthor);
    //   return newAuthor;
    // },
    addAuthorToBook: (_: unknown, { bookId, name }: { bookId: string; name: string }): { book: Book; author: Author } => {
      const book = books.find(b => b.id === bookId);
      if (!book) {
        throw new Error("Book not found");
      }
      const newAuthor: Author = {
        id: String(authorId++),
        name,
      };
      authors.push(newAuthor);
      book.authorId = newAuthor.id;
      return { book, author: newAuthor };
    },
  },
  Book: {
    author: (book: Book): Author | undefined =>
      authors.find(author => author.id === book.authorId),
  },
  Author: {
    books: (author: Author): Book[] =>
      books.filter(book => book.authorId === author.id),
  },
};

export default resolvers;