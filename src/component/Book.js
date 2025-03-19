import React, { useState } from "react";
import styles from "./Book.module.css"; // Corrected path

const Book = ({ book }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={styles.bookCard}>
      <h3>{book.title}</h3>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Year:</strong> {book.year}
      </p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? "Hide" : "Show"} Description
      </button>
      {showDescription && (
        <p className={styles.description}>{book.description}</p>
      )}
    </div>
  );
};

export default Book;
