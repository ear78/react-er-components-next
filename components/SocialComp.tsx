import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faInstagramSquare,
  faSquareLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import styles from '@/components/SocialComp.module.scss';
import SocialIcon from '@/components/SocialIcon';

export default function SocialComp() {
  const socialItems = [
    {
      platform: 'linkedin',
      path: 'https://linkedin.com/in/elliot-richardson',
      icon: faSquareLinkedin,
    },
    {
      platform: 'twitter-square',
      path: 'https://twitter.com/mixermanelliot',
      icon: faTwitterSquare,
    },
    {
      platform: 'github-square',
      path: 'https://github.com/ear78',
      icon: faGithubSquare,
    },
    {
      platform: 'instagram',
      path: 'https://instagram.com/elliot.richardson',
      icon: faInstagramSquare,
    },
  ];

  const socialIcon = socialItems.map((item) => {
    return (
      <SocialIcon key={item.platform} path={item.path} target={true}>
        <FontAwesomeIcon size="xs" widthAuto icon={item.icon} />
      </SocialIcon>
    );
  });
  return <div className={styles.SocialComp}>{socialIcon}</div>;
}
