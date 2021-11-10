import React from 'react'

import styles from './SocialLink.module.scss'

const socialLink = (props) => {
    return (
      <a
        className={`${styles.Links}`}
        key={props.index}
        href={props.path}
        target="_blank">
        <i className={`fa ${props.platform}`} aria-hidden="true"></i>
      </a>
    )
}

export default socialLink
