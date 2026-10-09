import { configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/app';
import bannerReducer from './modules/banner';
import dashboardReducer from './modules/dashboard';
import teamBuildingReducer from './modules/teamBuilding';

export const makeStore = () => {
  return configureStore({
    reducer: {
      app: appReducer,
      banner: bannerReducer,
      dashboard: dashboardReducer,
      teamBuilding: teamBuildingReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

