import React from 'react';
import { Link } from 'react-router-dom';

const UserItems = (props) => {
  const {
    users: { avatar_url, login, html_url },
  } = props;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h1>{login}</h1>
      <div>
        {' '}
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More{' '}
        </Link>
      </div>
    </div>
  );
};

export default UserItems;
