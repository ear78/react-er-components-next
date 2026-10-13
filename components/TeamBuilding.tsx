import PropTypes from 'prop-types';
// import Image from 'next/image'
import styles from './TeamBuildingStyles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import PageTitle from '@/components/PageTitle/PageTitle';
import { ViewTransition } from 'react';

interface teamBuildingProps {
  altLayout?: boolean;
  data: [
    {
      name: string;
      jobTitle: string;
      image: string;
      facebook: string;
      twitter: string;
      linkedin: string;
    },
  ];
  delay: number;
}

export default function teamBuilding({
  altLayout,
  data,
  delay,
}: teamBuildingProps) {
  let altStyles = altLayout ? styles.AltLayout : '';

  let members = data.map((member, i) => {
    return (
      <div
        key={i}
        style={{
          transitionDelay: `${delay * i}ms`,
        }}
        className={styles.Member}
      >
        <div className={styles.MemberHoverTrigger}>
          <img
            className={`${styles.Image} ${altStyles}`}
            src={member.image}
            alt={member.name}
          />
          <h3 className={styles.Name}>{member.name}</h3>
          <p className={styles.JobTitle}>{member.jobTitle}</p>
          <img className={styles.CompanyLogo} src="/er-logo.svg" alt="Logo" />
          <div className={styles.icons}>
            <a href={member.facebook}>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href={member.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={member.linkedin}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id={styles.TeamBuilding}>
      <PageTitle title="Team Building" />
      <ViewTransition>
        <div className={styles.TeamBuildingContainer}>{members}</div>
      </ViewTransition>
    </div>
  );
}
