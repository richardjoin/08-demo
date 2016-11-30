import React from 'react';

import Two from './Two';

class One extends React.Component {
  getChildContext() {
   return {color: "purple"};
  }
  render () {
    return(
      <div>
        one
        <Two />
      </div>
    )
  }
}
One.childContextTypes = {
  color: React.PropTypes.string
};
export default One;
