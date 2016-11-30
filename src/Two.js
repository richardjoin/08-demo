import React from 'react';

import Three from './Three';
class Two extends React.Component {
  render () {
    return(
      <div>
        Two
        <Three />
      </div>
    )
  }
}

export default Two;
