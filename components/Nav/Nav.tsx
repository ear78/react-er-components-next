'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '@/lib/redux/modules/app';
import styles from './Nav.module.scss';
import Hamburger from '@/components/Hamburger/Hamburger';
import logo from '@/assets/img/er-logo.svg';
import useResetApploading from '@/lib/redux/hooks/useResetAppLoading';
import DarkModeButton from '@/components/DarkModeButton/DarkModeButton';

function Nav() {
  const dispatch = useDispatch();
  const resetAppLoading = useResetApploading();
  const { isDarkMode } = useSelector((state: any) => state.app);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleDarkMode = () => {
    dispatch(setDarkMode(!isDarkMode));
  };

  const resetPageLoad = () => {
    resetAppLoading();
    setIsMenuActive(false);
  };

  const isActive = isMenuActive ? styles.isActive : '';

  const navMenu = [
    {
      route: '/',
      text: 'Home',
    },
    {
      route: '/page-banner',
      text: 'Page Banner',
    },
    {
      route: '/hover-pods',
      text: 'Hover Pods',
    },
    {
      route: '/team-building',
      text: 'Team Building',
    },
    {
      route: '/happy-dots',
      text: 'Happy Dots',
    },
    {
      route: '/dropper',
      text: 'Dropper',
    },
    {
      route: '/e-slider',
      text: 'E-Slider',
    },
    {
      route: '/dashboard',
      text: 'Dashboard',
    },
  ];

  const navPrint = navMenu.map((item, i) => (
    <li
      key={item.text}
      style={{
        transitionDelay: `${0 * i}ms`,
      }}
    >
      <Link
        href={item.route}
        className={`${styles.Link} ${pathname === item.route ? styles.selected : ''}`}
        onClick={resetPageLoad}
      >
        {item.text}
      </Link>
    </li>
  ));

  const mobileNavPrint = navMenu.map((item, i) => (
    <li
      key={item.text}
      className={`${isActive}`}
      style={{
        transitionDelay: `${40 * i}ms`,
      }}
    >
      <Link
        href={item.route}
        className={`${styles.Link} transition duration-100 ease-in-out ${pathname === item.route ? styles.selected : ''}`}
        onClick={resetPageLoad}
      >
        {item.text}
      </Link>
    </li>
  ));

  return (
    <div className={`${styles.NavContainer} ${isDarkMode ? styles.Dark : ''}`}>
      <Link className={`${styles.ImgWrapper} transition duration-500 ease-in-out`} href="/" onClick={resetPageLoad}>
        <img src={logo.src} alt="ER Logo" />
      </Link>
      <Hamburger
        isActive={isMenuActive}
        click={handleToggle}
        isDarkMode={isDarkMode}
      />
      <nav className={styles.NavDesktop}>
        <ul>{navPrint}</ul>
      </nav>

      <nav className={`${styles.NavMobile} ${isActive}`}>
        <ul>{mobileNavPrint}</ul>
      </nav>
      <DarkModeButton isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
    </div>
  );
}

export default Nav;
