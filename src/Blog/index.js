import React from 'react';

import axios from 'axios';

import Loading from '../component/Loading';
import BlogCard from '../component/BlogCard';
// {...item}自动把data展开,等同index=data.index;
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/richardjoin/08-demo/master/data/blogcard.json?a='+Math.random())
    .then( res => this.setState({data:res.data,wait:false}) )
    .catch( err=> alert(err))
  }
  render () {
    return(
      <div className='blog-warp'>
        {this.state.wait ? <Loading /> :
          this.state.data.map( (item,i) => <BlogCard {...item} key={i} /> )
        }
      </div>
    )
  }
}
export default Blog;
