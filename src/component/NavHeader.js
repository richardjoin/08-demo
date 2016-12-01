import React from 'react';

class NavHeader extends React.Component {

  bandleBack(){
    this.context.router.goBack();
  }

  render () {
    // console.log(this.context.router.isActive('/blog'));
    return(
      <div className='nav-header'>
        <button type="button" className='btn btn-default' aria-label="Left Align" onClick={this.bandleBack.bind(this)}>
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>BACK
        </button>
        <h3>richardjoin@{this.props.title}</h3>
        <button type="button" className='btn btn-default' aria-label="Left Align">
          <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}
// 实现BACK返回效果
NavHeader.contextTypes = {
  router: React.PropTypes.object
};

export default NavHeader;
