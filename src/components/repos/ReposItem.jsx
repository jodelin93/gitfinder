import React from 'react';

const ReposItem = (repos) => {
  console.log(repos);
  return (
    <div className="card">
      <h3>
        <a href={repos.repos.html_url}>{repos.repos.name}</a>
      </h3>
    </div>
  );
};

export default ReposItem;
