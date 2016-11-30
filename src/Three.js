import React from 'react';



class Three extends React.Component {
  render () {
    return(
      <div>
        three{this.context.color}
      </div>
    )
  }
}
Three.contextTypes = {
  color: React.PropTypes.string
};
export default Three;
