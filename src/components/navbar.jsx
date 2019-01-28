import React from 'react';

//Stateless functional component

const Navbar = ({ totalCounters }) => {
  console.log("3. Navbar - Rendered")
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Items in basket{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar
