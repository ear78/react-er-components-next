'use client';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './HappyDotsView.module.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import Spacer from '@/components/Spacer/Spacer';
import { happyData, sectionData, forms } from '@/assets/js/data';
import usePageSettings from '@/lib/redux/hooks/usePageSettings';
import Dots from '@/components/Dots/Dots';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';
import Image from 'next/image';

export default function HappyDotsView() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const elementRefs = sectionData.map(() => useRef<HTMLUListElement>(null));
  const pageSettings = usePageSettings(forms, 3);

  const sections = sectionData.map((d, i) => (
    <section
      key={d.id}
      ref={elementRefs[i]}
      className={`${i % 2 !== 0 ? styles.RefReverse : styles.RefSection}`}
    >
      <div className={styles.ImgContainer}>
        <Image loading={`${i <= 1 ? 'eager' : 'lazy'}`} src={d.img} alt={d.title} width={800} height={600} />
      </div>
      <div
        className={`${styles.TextBox} ${isDarkMode ? styles.Dark : ''} flex flex-col justify-center space-y-3`}
      >
        <Heading variant="h3">{d.title}</Heading>
        <p>{d.text}</p>
        <Button href="https://elliotrichardson.com" target>Get in touch</Button>
      </div>
    </section>
  ));

  return (
    <div className={styles.HappyDotsParent}>
      <PageTitle title="HappyDots" />
      <Spacer height={50} />

      <div className={styles.HappyDotsContainer}>
        <Dots
          refs={elementRefs}
          data={happyData}
          textColor={pageSettings.settings.textColor}
          dotColor={pageSettings.settings.dotColor}
        />
        {sections}
      </div>
    </div>
  );
}
