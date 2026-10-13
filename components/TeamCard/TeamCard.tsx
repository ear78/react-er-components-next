import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import styles from './TeamCard.module.scss';
import logo from '@/assets/img/er-logo.svg';
import { teamMembers } from '@/assets/js/data';

type TeamCardProps = {
  delay?: number;
  altLayout?: boolean;
  isDarkMode?: boolean;
};

function TeamCard({
  delay = 0,
  altLayout = false,
  isDarkMode = false,
}: TeamCardProps) {
  const isLoading = useSelector((state: any) => state.app.appLoading);

  const members = teamMembers.map((member, i) => {
    if (altLayout) {
      return (
        <div
          key={member.id}
          style={{ transitionDelay: `${delay * i}ms` }}
          className={`${styles.Member} ${styles.TC} ${isLoading ? styles.fadeIn : ''}`}
        >
          <div
            className={`${styles.MemberHoverTrigger} ${styles.AltLayout} ${isDarkMode ? styles.Dark : ''}`}
          >
            <div className={styles.AltLayoutLeft}>
              <img
                className={styles.Image}
                src={member.image}
                alt={member.name}
              />
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
            <div className={styles.AltLayoutRight}>
              <h3 className={`${styles.Name} ${isDarkMode ? styles.Dark : ''}`}>
                {member.name}
              </h3>
              <p className={styles.JobTitle}>{member.jobTitle}</p>
            </div>
            <img className={styles.CompanyLogo} src={logo.src} alt="Logo" />
          </div>
        </div>
      );
    }
    return (
      <div
        key={member.id}
        style={{ transitionDelay: `${delay * i}ms` }}
        className={`${styles.Member} ${styles.TC} ${isLoading ? styles.fadeIn : ''}`}
      >
        <div
          className={`${styles.MemberHoverTrigger} ${isDarkMode ? styles.Dark : ''}`}
        >
          <img className={styles.Image} src={member.image} alt={member.name} />
          <h3 className={`${styles.Name} ${isDarkMode ? styles.Dark : ''}`}>
            {member.name}
          </h3>
          <p className={styles.JobTitle}>{member.jobTitle}</p>
          <img className={styles.CompanyLogo} src={logo.src} alt="Logo" />
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

  return <div className={styles.TeamBuildingContainer}>{members}</div>;
}

export default TeamCard;
