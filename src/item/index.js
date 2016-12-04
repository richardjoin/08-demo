import React from 'react';

import marked from 'marked';
import axios from 'axios';

import Loading from '../component/Loading';
import post from './post';


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
      .catch( err=> alert(err))
  }
  render () {
    return(
      <div className='item-warp'>
        {
          this.state.data.length==0 ? <Loading /> :
          <div className='post-warp' dangerouslySetInnerHTML={{__html:marked(this.state.data)}} />
        }

      </div>
    )
  }
}

export default Item;
