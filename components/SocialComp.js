import React, { Component } from 'react'

import styles from './SocialComp.module.scss'

import SocialLink from './SocialLink'

class SocialComp extends Component {
  state = {
    socialItems: [
      { platform: 'fa-linkedin-square',  path: 'https://linkedin.com'},
      { platform: 'fa-twitter-square',  path: 'https://twitter.com'},
      { platform: 'fa-github-square',  path: 'https://github.com/ear78'},
      { platform: 'fa-instagram',  path: 'https://instagram.com/elliot.richardson'},
    ]
  }

  render(){
    const socialLink = this.state.socialItems.map((item,index) => {
      return <SocialLink
                key={index}
                path={item.path}
                platform={item.platform}/>
    })
    return (
      <div className={styles.SocialComp}>
        {socialLink}
      </div>
    )
  }

}

export default SocialComp
