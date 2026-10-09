"use client";
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import PageTitle from '@/components/PageTitle/PageTitle';
import styles from './DropperView.module.scss';
import { dropperData } from '@/assets/js/data';
import colors from '@/assets/js/colors';

//@ts-ignore
const Dropper = lazy(() => import('@/components/Dropper/Dropper.tsx'));

export default function DropperView() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const dropper = dropperData.map((d) => (
    <Dropper key={d.id} title={d.title} iconName={faAngleDown} isDarkMode={isDarkMode}>
      {d.content}
    </Dropper>
  ));

  return (
    <section className={`${styles.DropperParent} flex flex-col md:flex-row`}>
      <div className={`${styles.DropperWrapper} flex flex-col md:flex-row`}>
        <div className={`${styles.Left} w-full md:w-1/3`}>
          <PageTitle title="Dropper" color={colors.hotPink} />
        </div>
        <div className={`${styles.Right} w-full md:w-2/3`}>
          {dropper}
        </div>
      </div>
    </section>

  );
}