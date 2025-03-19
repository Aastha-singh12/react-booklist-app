import React from "react";
import BookList from "./component/BookList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 style={{ color: "white" }}>Book List Application</h1>
      <BookList />
    </div>
  );
};

export default App;
