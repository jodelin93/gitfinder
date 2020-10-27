import React, { Fragment } from 'react';
import Pinner from './spinner.gif';

export const Spinner = () => {
  return (
    <Fragment>
      <img
        src={Pinner}
        alt="Loading..."
        style={{ display: 'block', margin: 'auto', width: '200px' }}
      />
    </Fragment>
  );
};
