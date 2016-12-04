import React from 'react';
import axios from 'axios';
// 表单
import TextField from 'material-ui/TextField';
// 按钮
import RaisedButton from 'material-ui/RaisedButton';

import Loading from '../component/Loading';
import ShowGit from '../component/ShowGit';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      // 0：没搜索，1：后台没响应，2：数据接收完
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault();
    // 提交搜索信息
    this.setState({
      wait:1
    })
    // 获取value
    let value = this.refs.gitname.getValue();
    // 链接git请求
    axios.get(`https://api.github.com/users/${value}`)
    .then( res => this.setState({data:res.data,wait:2}) )
    .catch( error => {alert(error);this.setState({wait:0})} )
    this.refs.form.reset()
  }
  render () {
    let showGitinfo = this.state.wait==0 ? null :
    this.state.wait==1 ? <Loading /> : <ShowGit gitInfo={this.state.data} />
    return(
      <div className='about-warp'>
        <div className='git-card'>
          <h2>Search Git Info</h2>
          <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField style={{width:'58%'}} ref='gitname' hintText="github username" underlineStyle={{color:'#00bcd4'}} />
            <RaisedButton onClick={this.handleSubmit.bind(this)} label="SEARCH" secondary={true} style={{marginLeft: '12px'}} />
          </form>
          {showGitinfo}
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
