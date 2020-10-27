import React from 'react';
import ReposItem from './ReposItem';
const Repos = ({ repos }) =>
  repos.map((repo) => <ReposItem key={repo.id} repos={repo} />);

export default Repos;
