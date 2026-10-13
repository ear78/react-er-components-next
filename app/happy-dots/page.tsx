'use client';
import { useRef } from 'react';
import styles from './HappyDotsView.module.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import Spacer from '@/components/Spacer/Spacer';
import { happyData, sectionData, forms } from '@/assets/js/data';
import usePageSettings from '@/lib/redux/hooks/usePageSettings';
import Dots from '@/components/Dots/Dots';
import SectionHighlight from '@/components/SectionHighlight';

export default function HappyDotsView() {
  const elementRefs = sectionData.map(() => useRef<HTMLUListElement>(null));
  const pageSettings = usePageSettings(forms, 3);

  const sections = sectionData.map((item, i) => (
    <SectionHighlight
      key={item.id}
      index={i}
      data={item}
      elementRef={elementRefs[i]}
    />
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
