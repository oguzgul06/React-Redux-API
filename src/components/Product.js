import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToBag } from "../actions/addToBag";

const Products = (props) => {
  return (
    <div>
      <h2>
        <span>Book List</span>
        <Link to="/cart">My Cart</Link>
      </h2>
      {props.bookList.map((book) => (
        <div className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#8378; {book.price}</p>
            <button onClick={() => props.addToBag(book)}>Add to Bag</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { bookList: state.bookList, cart: state.cart };
};

const mapActionToProps = { addToBag };

export default connect(mapStateToProps, mapActionToProps)(Products);
