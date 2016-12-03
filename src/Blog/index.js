import React from 'react';

import BlogCard from '../component/BlogCard';
let data = [
  {index:1,title:'hello1',desc:'word1'},
  {index:2,title:'hello2',desc:'word2'},
  {index:3,title:'hello3',desc:'word3'},
  {index:4,title:'hello4',desc:'word4'},
  {index:5,title:'hello5',desc:'word5'},
  {index:6,title:'hello6',desc:'word6'},
  {index:7,title:'hello7',desc:'word7'},
  {index:8,title:'hello8',desc:'word8'}
]
// {...item}自动把data展开,等同index=data.index;
class Blog extends React.Component {
  render () {
    let cards = data.map( (item,i) => <BlogCard {...item} key={i} />)
    return(
      <div className='blog-warp'>
      {cards}
      </div>
    )
  }
}

export default Blog;
