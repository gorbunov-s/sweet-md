import React from 'react';
import {Link} from "react-router-dom";

export default function Menu({ match }) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/tolstovki">Tolstovki</Link>
      </li>
      <li>
        <Link to="/svitera">Svitera</Link>
      </li>
      <li>
        <Link to="/delivery">Delivery</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
  );
}
