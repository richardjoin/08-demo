import React from 'react';
//主题
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import LeftNav from './component/LeftNav';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:'Home',
      showLeftNav:false
    }
  }

  // 主题
  getChildContext(){
    return {muiTheme: getMuiTheme()};
  }

  componentWillReceiveProps(){
    this.setTitle()
  }
  componentWillMount(){
    this.setTitle();
    this.setNavBar();
  }
  componentDidMount(){
    window.onresize=this.setNavBar.bind(this)
  }
  setNavBar(){
    this.setState({
      showLeftNav:window.innerWidth>760 ? true :false
    })
  }
  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true) ? 'Home' :
            this.props.router.isActive('about') ? 'About' : 'Blog'
    })
  }
  render () {
    return(
      <div className='my-wrap'>
        {this.state.showLeftNav ? <LeftNav title={this.state.title} /> : <NavHeader title={this.state.title} />}

        <div className='main'>
          {this.props.children}
        </div>
        {this.state.showLeftNav ? null : <NavFooter />}
      </div>
    )
  }
}
App.contextTypes = {
  router: React.PropTypes.object
};

// 主题
App.childContextTypes = {
  muiTheme: React.PropTypes.object
}
export default App;
