import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

export default function Header() {
  return (
    <header>
      <Link href="/" style={linkStyle}>
        Home
      </Link>
      <Link href="/HoverPods" style={linkStyle}>
        Hover Pods
      </Link>
      <Link href="/banner" style={linkStyle}>
        Banner
      </Link>
      <Link href="/team" style={linkStyle}>
        Team
      </Link>
    </header>
  );
}
