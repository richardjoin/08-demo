import React from 'react';


class ShowGit extends React.Component {
  render () {
    let info = this.props.gitInfo
    let styles = {
      img:{
        width:'100%',
        maxWidth:'130px',
        borderRadius: '50%',
        boxShadow:'rgba(0,0,0,0.35) 0px 3px 8px'
      }
    };
    return(
      <div>
          <img src={info.avatar_url} style={styles.img}/>
          <h3>{info.login}</h3>
          <div className='show-git'>
            <p>followers<br/>{info.followers+666}</p>
            <p>following<br/>{info.following+666}</p>
            <p>public_repos<br/>{info.public_repos+666}</p>
          </div>
      </div>
    )
  }
}
export default ShowGit;
// avatar_url
// :
// "https://avatars.githubusercontent.com/u/23308144?v=3"
// bio
// :
// null
// blog
// :
// null
// company
// :
// null
// created_at
// :
// "2016-11-07T08:17:10Z"
// email
// :
// null
// events_url
// :
// "https://api.github.com/users/richardjoin/events{/privacy}"
// followers
// :
// 2
// followers_url
// :
// "https://api.github.com/users/richardjoin/followers"
// following
// :
// 2
// following_url
// :
// "https://api.github.com/users/richardjoin/following{/other_user}"
// gists_url
// :
// "https://api.github.com/users/richardjoin/gists{/gist_id}"
// gravatar_id
// :
// ""
// hireable
// :
// null
// html_url
// :
// "https://github.com/richardjoin"
// id
// :
// 23308144
// location
// :
// null
// login
// :
// "richardjoin"
// name
// :
// null
// organizations_url
// :
// "https://api.github.com/users/richardjoin/orgs"
// public_gists
// :
// 0
// public_repos
// :
// 4
// received_events_url
// :
// "https://api.github.com/users/richardjoin/received_events"
// repos_url
// :
// "https://api.github.com/users/richardjoin/repos"
// site_admin
// :
// false
// starred_url
// :
// "https://api.github.com/users/richardjoin/starred{/owner}{/repo}"
// subscriptions_url
// :
// "https://api.github.com/users/richardjoin/subscriptions"
// type
// :
// "User"
// updated_at
// :
// "2016-12-01T01:33:26Z"
// url
// :
// "https://api.github.com/users/richardjoin"
