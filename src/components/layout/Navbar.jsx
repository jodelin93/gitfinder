import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <div className="bg-primary navbar ">
      <h1>
        {' '}
        <FontAwesomeIcon icon={faUser} />
        {props.title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: ' Jodelin Desrameaux GITHUB FINDER',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
