import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ match }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/catalog">Masks</Link>
      <Link to="/tolstovki">Tolstovki</Link>
      <Link to="/svitera">Svitera</Link>
      <Link to="/delivery">Delivery</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
}
