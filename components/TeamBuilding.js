import React from 'react'
import PropTypes from 'prop-types'
// import { CSSTransitionGroup } from 'react-transition-group'
import Image from 'next/image'
import styles from './TeamBuildingStyles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTitle from './PageTitle'

export default function teamBuilding( props ) {

  let altLayout = props.altLayout ? styles.AltLayout : ''

  let members = props.data.map( ( member, i ) => {
    return <div key={i} style={{
        transitionDelay: `${ props.delay * i }ms`
      }} className={styles.Member}>
      <div className={styles.MemberHoverTrigger}>
        <img className={`${styles.Image} ${altLayout}`} src={member.image} alt={member.name}/>
        <h3 className={styles.Name}>{member.name}</h3>
        <p className={styles.JobTitle}>{member.jobTitle}</p>
        <img className={styles.CompanyLogo} src='/er-logo.svg' alt="Logo"/>
        {/* <Logo/> */}
        <div className={styles.icons}>
          <a href={member.facebook}>
            <FontAwesomeIcon icon={[ 'fab', 'facebook-square', ]}/>
          </a>
          <a href={member.twitter}>
            <FontAwesomeIcon icon={[ 'fab', 'twitter', ]}/>
          </a>
          <a href={member.linkedin}>
            <FontAwesomeIcon icon={[ 'fab', 'linkedin-in', ]}/>
          </a>
        </div>
      </div>
    </div>
  } )

  return ( <div id={styles.TeamBuilding}>
    <PageTitle title="Team Building"/>
    {/* <CSSTransitionGroup component="div" className={styles.TeamBuildingContainer} transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionEnter={true} transitionLeave={true} transitionName={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        leave: styles.leave,
        leaveActive: styles.leaveActive,
        appear: styles.appear,
        appearActive: styles.appearActive
      }}>
      {members}
    </CSSTransitionGroup> */}
    <div className={styles.TeamBuildingContainer}>
      {members}
    </div>
  </div> )
}

teamBuilding.propTypes = {
  altLayout: PropTypes.bool,
  delay: PropTypes.number
}


