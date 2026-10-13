// import TeamBuilding from '@/components/TeamBuilding/TeamBuilding';
// import { teamMembers } from '@/assets/js/data';

// export default function TeamBuildingView() {
//   return <TeamBuilding data={teamMembers} delay={300} />;
// }
"use client";
import React, { lazy, useRef } from 'react';
import { useSelector } from 'react-redux';
import usePageSettings from '@/lib/redux/hooks/usePageSettings';
import PageTitle from '@/components/PageTitle/PageTitle';
import TeamCard from '@/components/TeamCard/TeamCard';
import styles from './TeamBuilding.module.scss';
import { forms } from '@/assets/js/data';

function TeamBuilding() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const pageSettings = usePageSettings(forms, 2);

  // Local State
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className={`${styles.TeamBuilding} ${isDarkMode ? styles.Dark : ''}`}>
      <PageTitle title="TeamBuilding" />
      <TeamCard delay={100} altLayout={pageSettings.settings.altLayout} isDarkMode={isDarkMode} />
    </div>
  );
}

export default TeamBuilding;