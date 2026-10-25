import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faInstagramSquare,
  faSquareLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
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
      <SocialIcon
        key={item.platform}
        path={item.path}
        platform={item.platform}
        target={true}
      >
        <FontAwesomeIcon
          size="xs"
          widthAuto
          className="w-6.5"
          icon={item.icon}
        />
      </SocialIcon>
    );
  });
  return (
    <div
      className={`flex items-center gap-1 transition duration-150 ease-out justify-around group`}
    >
      {socialIcon}
    </div>
  );
}
