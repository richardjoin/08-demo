import React from 'react';
import axios from 'axios';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class About extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    console.log(this.refs.gitname.getValue());
    this.refs.form.reset()
  }
  render () {
    return(
      <div className='about-warp'>
        <div className='git-card'>
          <h2>Search Git Info</h2>
          <form ref='form' className='about-form'>
            <TextField style={{width:'58%'}} ref='gitname' hintText="github username" underlineFocusStyle={{borderColor:'#00bcd4'}} />
            <RaisedButton onClick={this.handleSubmit.bind(this)} label="SEARCH" secondary={true} style={{marginLeft: '12px'}} />
          </form>
        </div>
      </div>
    )
  }
}

export default About;


// button效果
// <MuiThemeProvider>
//   <RaisedButton label="Default" />
// </MuiThemeProvider>
