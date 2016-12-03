import React from 'react';

import marked from 'marked';
import axios from 'axios';
class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    let address=this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/richardjoin/08-demo/master/data/${address}.md`)
      .then(res => this.setState({data:res.data}))
  }
  render () {
    let content = this.state.data.length==0 ? '请稍等' : marked(this.state.data);

    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}

export default Item;
