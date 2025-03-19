import React, { useState } from "react";
import styles from "./BookList.module.css";
import Book from "./Book";

const booksData = [
  {
    id: 1,
    title: "The Guide",
    author: "R.K. Narayan",
    year: 1958,
    description:
      "A story about the transformation of a tourist guide, Raju, into a spiritual guru and the challenges he faces.",
  },
  {
    id: 2,
    title: "Malgudi Days",
    author: "R.K. Narayan",
    year: 1943,
    description:
      "A collection of short stories set in the fictional town of Malgudi, portraying various aspects of Indian life.",
  },
  {
    id: 3,
    title: "Godan",
    author: "Munshi Premchand",
    year: 1936,
    description:
      "A Hindi novel about the struggles of a poor farmer, Hori, and the socio-economic conditions of rural India.",
  },
  {
    id: 4,
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    year: 1956,
    description:
      "A novel that depicts the human impact of the Partition of India in 1947, focusing on a village on the India-Pakistan border.",
  },
];

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 style={{ color: "white" }}>Book List</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchBar}
      />
      <div className={styles.bookList}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <Book key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
