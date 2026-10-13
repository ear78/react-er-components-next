import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { handleForm } from '@/assets/js/util/helpers';
import { setComponentSettings, setIsDrawerOpen } from '@/lib/redux/modules/app';
import AppForm from '@/components/AppForm/AppForm';

// @ts-ignore
// const AppForm = lazy(() => import('@/components/AppForm/AppForm.tsx'));

type ComponentSettingsProps = {
  title?: string;
  formData?: Array<Record<string, any>> | null;
};

function ComponentSettings({
  title = 'Settings',
  formData,
}: ComponentSettingsProps) {
  const dispatch = useDispatch();
  const location = usePathname();
  const { components, isDarkMode } = useSelector((state: any) => state.app);
  const activeComponent = components.find(
    (item: any) => item.path === location,
  );
  const settings = activeComponent?.settings ?? {};

  const updateSettings = (event: any) => {
    const formObj = handleForm(event);

    dispatch(
      setComponentSettings({
        ...settings,
        ...formObj,
      }),
    );
  };

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setComponentSettings({ ...settings }));
    dispatch(setIsDrawerOpen(false));
  };

  const resolvedFormData = formData
    ? formData.map((field: any) => ({
        ...field,
        inputVal: settings[field.name] ?? field.inputVal ?? '',
        change: updateSettings,
      }))
    : null;

  return (
    <section aria-labelledby="component-settings-title">
      <h2
        id="component-settings-title"
        className="mb-4 pt-6 text-xl font-semibold dark:text-gray-800"
      >
        {title}
      </h2>
      <Suspense fallback={null}>
        <AppForm
          click={handleSettingsSave}
          formData={resolvedFormData ?? []}
          isDarkMode={isDarkMode}
        />
      </Suspense>
    </section>
  );
}

export default ComponentSettings;
