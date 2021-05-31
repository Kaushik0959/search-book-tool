import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";

import BookCard from "../components/BookCard";

const renderBooksList = (data, query) => {
  if (isEmpty(data)) {
    return null;
  }
  let { docs: books, numFound: total } = data;

  return (
    <>
      <h3>Search results for title: {query}</h3>
      <p>Total Results: {total}</p>
      <div className="books-list">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </>
  );
};

const Books = ({ data, isFetching, query, error }) => {
  let renderedElements = "";

  if (isFetching) {
    renderedElements = <p>Searching Book...</p>;
  } else if (!isEmpty(error)) {
    renderedElements = JSON.stringify(error);
  } else {
    renderedElements = renderBooksList(data, query);
  }
  return <div className="books">{renderedElements}</div>;
};

const mapStateToProps = (state) => {
  let { data, isFetching, query, error } = state.books;
  return {
    data,
    isFetching,
    query,
    error,
  };
};

export default connect(mapStateToProps, null)(Books);
