// Class to represent a book in the library.
class Book {
  // Constructor to initialize a book with title, author, and number of pages.
  constructor(title, author, numPages) {
    // Initialize the properties of the book.
    this.title = title; // Title of the book.
    this.author = author; // Author of the book.
    this.numPages = numPages; // Number of pages of the book.
  }

  // Method to get the book information in string format.
  getInfo() {
    // Returns the book information in string format.
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.numPages}`;
  }
}

// Class to represent a collection of books in the library.
class Library {
  // Constructor to initialize a library without books.
  constructor() {
    // Initialize the list of books.
    this.booksList = [];
  }

  // Method to add a book to the library.
  addBook(book) {
    // Add the book to the list of books.
    this.booksList.push(book);
  }

  // Method to search for books by author in the library.
  searchBooksByAuthor(author) {
    // Create a list to store the books by the author.
    const booksByAuthor = [];
    // Iterate over the list of books in the library.
    for (const book of this.booksList) {
      // Check if the author of the book matches the searched author.
      if (book.author === author) {
        // If it matches, add the book to the list of books by the author.
        booksByAuthor.push(book);
      }
    }
    // Return the list of books by the author.
    return booksByAuthor;
  }

  // Method to display the list of books in the library.
  displayBooks() {
    // Display a header.
    console.log("List of books in the library:");
    // Iterate over the list of books in the library.
    for (const book of this.booksList) {
      // Print the information of the book.
      console.log(book.getInfo());
    }
  }
}

// Main function to test the library management system.
function main() {
  // Create an instance of the Library class to represent the library.
  const mainLibrary = new Library();

  // Add some books to the library.
  mainLibrary.addBook(new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 432));
  mainLibrary.addBook(new Book("The Little Prince", "Antoine de Saint-Exupéry", 96));
  mainLibrary.addBook(new Book("1984", "George Orwell", 328));
  mainLibrary.addBook(new Book("Don Quixote", "Miguel de Cervantes", 863));

  // Display the list of books in the library.
  mainLibrary.displayBooks();

  // Search for books by author.
  const author = "Gabriel García Márquez";
  const booksByAuthorFound = mainLibrary.searchBooksByAuthor(author);
  // Display the books by the found author.
  console.log(`Books written by ${author}:`);
  for (const book of booksByAuthorFound) {
    console.log(book.getInfo());
  }
}

// Call the main function to start the program.
main();
