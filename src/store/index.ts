import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '../Components/Modules/Header-Module';
import { userProfileSlice } from '../Components/Modules/User-Cart-Module';
import { helperLinksSlice } from '../Components/Modules/Helper-Links-Module';
import { carouselSlice } from '../Components/Modules/User-Carousel-Module';
import { followingSlice } from '../Components/Modules/Following-Module';
import { coursesPopulerSlice } from '../Components/Modules/Courses-Posular-Module';

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
