'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function BackToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`fixed bottom-4 right-4 w-10 h-10 text-white rounded-full cursor-pointer flex items-center justify-center z-10 shadow-xl transition hover:scale-105 hover:shadow-2xl bg-black dark:bg-neutral-800`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faChevronUp} width={20} height={16} />
    </button>
  );
}
