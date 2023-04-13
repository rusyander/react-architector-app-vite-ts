import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '../Components/Modules/Header-Module';
import { userProfileSlice } from '../Components/Modules/User-Cart';
import { helperLinksSlice } from '../Components/Modules/Helper-Links-Module';

const store = configureStore({
  reducer: {
    user: userSlice,
    userProfile: userProfileSlice,
    helperLinks: helperLinksSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
