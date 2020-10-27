import React, { useReducer } from 'react';
import GithubContext from './gitHubContext';
import GitgubContext from './gitHubContext';
import GithubReducers from './gitHubReducers';
import axios from 'axios';

let client_id;
let client_secret;

if (process.env.NODE_ENV !== 'production') {
  client_id = process.env.REACT_APP_CLIENT_KEY;
  client_secret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  client_id = process.env.CLIENT_KEY;
  client_secret = process.env.CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    loading: null,
    users: [],
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducers, initialState);

  const SearchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`
    );
    dispatch({
      type: 'SEARCH_USERS',
      payload: res.data.items,
    });
  };

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`
    );
    dispatch({
      type: 'GET_USER',
      payload: res.data,
    });
  };

  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`
    );
    dispatch({
      type: 'GET_USER_REPOS',
      payload: res.data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        users: state.users,
        user: state.user,
        loading: state.loading,
        SearchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
