import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../App.css";

function Search() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" size="lg" className="custom-spinner" />
    </div>
  
  );
}

export default Search;
