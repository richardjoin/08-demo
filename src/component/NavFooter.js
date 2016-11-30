import React from 'react';
import { Link } from 'react-router';

class NavFooter extends React.Component {
  render () {
    return(
      <div className='nav-footer'>
        <Link to='/' activeStyle={{color:'#00BCD4'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br/>Home</Link>
        <Link to='blog' activeStyle={{color:'#7B1FA2'}} ><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span><br/>Blog</Link>
        <Link to='work' activeStyle={{color:'red'}} ><span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span><br/>Work</Link>
        <Link to='about' activeStyle={{color:'#455A64'}} ><span className="glyphicon glyphicon-plane" aria-hidden="true"></span><br/>About</Link>
      </div>
    )
  }
}

export default NavFooter;
