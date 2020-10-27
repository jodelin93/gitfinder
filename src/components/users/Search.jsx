import React, { useState, useContext } from 'react';
import { Spinner } from '../layout/Spinner';
import GithubContext from '../../context/github/gitHubContext';

const Search = () => {
  const GitContext = useContext(GithubContext);
  const { SearchUsers, loading, clearUsers, users } = GitContext;
  const [text, setText] = useState('');
  const taille = users.length;
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    SearchUsers(text);
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <form action="" className="form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={onChangeHandler}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block "
        />
      </form>
      {taille > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear{' '}
        </button>
      )}
    </div>
  );
};

export default Search;
