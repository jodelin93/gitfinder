import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from '../layout/Spinner';
import Repos from './../repos/Repos';
import GithubContext from '../../context/github/gitHubContext';

const User = ({ match }) => {
  const GitContext = useContext(GithubContext);
  const { getUser, user, loading, repos, getUserRepos } = GitContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);
  const {
    login,
    avatar_url,
    location,
    name,
    blog,
    bio,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  {
    if (loading) {
      return <Spinner />;
    }
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            style={{ width: '150px' }}
            className="round-img"
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark m-1 ">
            {' '}
            Visit GITHUB profil
          </a>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">
          Public Repositories: {public_repos}
        </div>
        <div className="badge badge-dark">Public Gits: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};
export default User;
