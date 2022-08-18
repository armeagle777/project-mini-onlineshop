import React from 'react';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = ( { totalCounters } ) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://w3schools.com">
          Online Shopping </a>
        <div className="cardCount">
          <FontAwesomeIcon icon={ faShoppingCart }/><span className="shoppingCardCount">{ totalCounters }</span>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
