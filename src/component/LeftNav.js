import React from 'react';
import {Link} from 'react-router';

class LeftNav extends React.Component {
  render () {
    return(
      <div className='leftnav-wrap'>
        <h1>richardjoin@{this.props.title}</h1>
        <Link to='/' activeStyle={{backgroundColor:'rgba(0.0.0.0.5)'}} onlyActiveOnIndex={true}>Nome</Link>
        <Link to='blog' activeStyle={{backgroundColor:'rgba(0.0.0.0.5)'}}>Blog</Link>
        <Link to='work' activeStyle={{backgroundColor:'rgba(0.0.0.0.5)'}}>Work</Link>
        <Link to='about' activeStyle={{backgroundColor:'rgba(0.0.0.0.5)'}}>About</Link>
      </div>
    )
  }
}

export default LeftNav;
