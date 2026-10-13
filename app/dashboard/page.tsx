'use client';
import React, { lazy, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '@/app/dashboard/Dashboard.module.scss';
import { handleForm } from '@/assets/js/util/helpers';
import {
  setComponentSettings,
  setIsModalActive,
} from '@/lib/redux/modules/app';
import { formData as componentFormData } from '@/assets/js/formData';
import PageTitle from '@/components/PageTitle/PageTitle';
import DashboardCard from '@/components/DashboardCard/DashboardCard';
import Modal from '@/components/Modal/Modal';
import User from '@/components/User/User';

// @ts-ignore
const AppForm = lazy(() => import('@/components/AppForm/AppForm.tsx'));

export default function DashboardViews() {
  // Redux
  const dispatch = useDispatch();
  const { components, isModalActive, isDarkMode } = useSelector(
    (state: any) => state.app,
  );

  // Local State
  const [componentId, setComponentId] = useState<number>(0);
  const [formData, setFormData] = useState<{}[]>([]);
  const dashboardFormData = componentFormData['/dashboard'];

  useEffect(() => {
    if (!dashboardFormData || Array.isArray(dashboardFormData)) return;

    const selectedFields = dashboardFormData[componentId] ?? [];
    const selectedSettings = components[componentId]?.settings ?? {};
    setFormData(
      selectedFields.map((field) => ({
        ...field,
        inputVal: selectedSettings[field.name] ?? field.inputVal ?? '',
        change: updateSettings,
      })),
    );
  }, [components, componentId, dashboardFormData]);

  const updateSettings = (event: any) => {
    const formObj = handleForm(event);

    dispatch(
      setComponentSettings({
        ...components[componentId].settings,
        ...formObj,
      }),
    );
  };

  const toggleModal = () => {
    dispatch(setIsModalActive(!isModalActive));
  };

  const editSettings = (id: number) => {
    setComponentId(id);
    dispatch(setIsModalActive(true));
  };

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(
      setComponentSettings({
        ...components[componentId].settings,
      }),
    );

    dispatch(setIsModalActive(false));
  };

  let cards;
  if (components) {
    cards = components.map((component: any) => (
      <DashboardCard
        key={component.id}
        component={component}
        editSettings={editSettings}
        isDarkMode={isDarkMode}
      />
    ));
  } else {
    cards = null;
  }

  return (
    <div className={`${styles.Dashboard} ${isDarkMode ? styles.Dark : ''}`}>
      <Modal
        isModalActive={isModalActive}
        click={toggleModal}
        isDarkMode={isDarkMode}
      >
        <AppForm
          click={handleSettingsSave}
          formData={formData}
          isDarkMode={isDarkMode}
        />
      </Modal>
      <div className="mb-12">
        <PageTitle title="Dashboard" />
      </div>
      <div className="grid md:grid-cols-[25%_minmax(0,1fr)] gap-5">
        <div className="w-full relative">
          <User />
        </div>
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-4">{cards}</div>
        </div>
      </div>
    </div>
  );
}
