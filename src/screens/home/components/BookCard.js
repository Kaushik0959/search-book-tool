import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const BookCard = ({ book }) => {
  console.log(book);
  let {
    title,
    subtitle,
    author_name,
    first_sentence,
    imageLinks,
    publish_date,
    description,
  } = book;
  return (
    <div className="book">
      <Card>
        {imageLinks ? (
          <Card.Img variant="top" src={imageLinks.thumbnail} />
        ) : null}
        <Card.Body>
          <Card.Title>Title: {title}</Card.Title>
          <Card.Subtitle>Subtitle: {subtitle}</Card.Subtitle>
          <Card.Text>Author: {author_name && author_name.join(",")}</Card.Text>
          <Card.Text className="book--description">
            Description: {first_sentence && first_sentence.join(" ")}
          </Card.Text>
          <Card.Text className="book--description">
            Published Date: {publish_date && publish_date.join(" ")}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
