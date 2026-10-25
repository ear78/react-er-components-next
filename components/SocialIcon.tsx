import styles from './SocialIcon.module.scss';

type SocialIconProps = {
  path: string;
  target?: boolean;
  platform?: string;
  children: React.ReactNode;
};

function SocialIcon({
  path,
  target = false,
  platform,
  children,
}: SocialIconProps) {
  return (
    <a
      className={`${styles.Links} flex text-neutral-800 group-hover:text-neutral-500 hover:text-black dark:hover:text-pink-500`}
      href={path}
      target={target ? '_blank' : ''}
      rel="noreferrer"
      aria-label={`Link to ${platform}`}
    >
      {children}
    </a>
  );
}

export default SocialIcon;
