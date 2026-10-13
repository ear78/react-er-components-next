'use client';
import { usePathname } from 'next/navigation';
import { setIsDrawerOpen } from '@/lib/redux/modules/app';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from './Drawer/Drawer';
import BackToTopButton from './BackToTopButton/BackToTopButton';
import ComponentSettings from '@/components/ComponentSettings/ComponentSettings';
import { formData as componentFormData } from '@/assets/js/formData';
import Nav from './Nav/Nav';
import Footer from './Footer';

/**
 * Higher order component that allows for our redux state management to work with our layout in next.js.
 * Wraps our main content of components to be able to pass along to the Redux store provider.
 */
export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const location = usePathname();
  const { isDrawerOpen } = useSelector((state: any) => state.app);
  const selectedFormData = componentFormData[location] ?? null;
  const drawerFormData = Array.isArray(selectedFormData)
    ? selectedFormData
    : null;
  const shouldShowSettingsButton =
    Array.isArray(drawerFormData) && drawerFormData.length > 0;

  return (
    <body
      className={`transition duration-500 ease-in-out font-avenir max-w-7xl mx-auto px-2 md:px-4 ${isDarkMode ? 'dark' : ''} dark:bg-black dark:text-white`}
    >
      <Nav />
      <main className="border-t-gray-300 border-t py-12">
        {shouldShowSettingsButton && (
          <button
            type="button"
            aria-label={
              isDrawerOpen ? 'Close settings drawer' : 'Open settings drawer'
            }
            aria-expanded={isDrawerOpen}
            onClick={() => dispatch(setIsDrawerOpen(!isDrawerOpen))}
            className="top-27 z-10 flex ml-auto -mt-10 mb-2 items-center gap-2 rounded-full bg-black px-4 py-2 text-white cursor-pointer shadow-lg transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-neutral-800"
          >
            <span className="whitespace-nowrap text-sm font-medium">
              Settings
            </span>
          </button>
        )}
        {children}
      </main>
      <Footer />
      <BackToTopButton />
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => dispatch(setIsDrawerOpen(false))}
        placement="right"
      >
        <ComponentSettings formData={drawerFormData} />
      </Drawer>
    </body>
  );
}
