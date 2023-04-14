import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '../Components/Modules/Header-Module';
import { userProfileSlice } from '../Components/Modules/User-Cart';
import { helperLinksSlice } from '../Components/Modules/Helper-Links-Module';
import { carouselSlice } from '../Components/Modules/User-Carusel-Module';
import { followingSlice } from '../Components/Modules/Following-Model';
import { coursesPopulerSlice } from '../Components/Modules/Courses-Posular-Model';

const store = configureStore({
  reducer: {
    user: userSlice,
    userProfile: userProfileSlice,
    helperLinks: helperLinksSlice,
    carousel: carouselSlice,
    following: followingSlice,
    coursesPopuler: coursesPopulerSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
