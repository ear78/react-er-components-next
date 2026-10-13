import SocialComp from '@/components/SocialComp';
import Copyright from '@/components/Copyright/Copyright';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 pb-8">
      <SocialComp />
      <Copyright />
    </footer>
  );
}
