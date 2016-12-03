import React from 'react';

import marked from 'marked';
import axios from 'axios';
class Item extends React.Component {
  ComponentDidMount(){
    let address=this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/richardjoin/08-demo/master/data/${address}.md`)
  }
  render () {
    // console.log(this.props.params.title);
    let content = this.props.params.title==0 ? '这是第一个页面' :
                  this.props.params.title==1 ? '这是第二个页面' :
                  this.props.params.title==2 ? '这是第三个页面' :
                  '这是第n个页面'
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default Item;
