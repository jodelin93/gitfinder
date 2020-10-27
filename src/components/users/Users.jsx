import React, { useContext } from 'react';
import GithubContext from '../../context/github/gitHubContext';
import UserItems from './UserItems';
//import Spinner from '../layout/Spinner;';
const Users = () => {
  const GitContext = useContext(GithubContext);
  const { users } = GitContext;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap: '1rem',
      }}
    >
      {users.map((item) => {
        return <UserItems key={item.id} users={item} />;
      })}
    </div>
  );
};

export default Users;
