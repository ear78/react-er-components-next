import styles from './SocialIcon.module.scss';

type SocialIconProps = {
  path: string;
  target?: boolean;
  children: React.ReactNode;
};

function SocialIcon({
  path,
  target = false,
  children,
}: SocialIconProps) {
  return (
    <a
      className={`${styles.Links} flex text-neutral-800 group-hover:text-neutral-500 hover:text-black dark:hover:text-pink-500`}
      href={path}
      target={target ? '_blank' : ''}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default SocialIcon;
