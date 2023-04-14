import React, { useEffect } from 'react';

import Routers from './Router';

import { useAppDispatch } from './hook/UseRedux';
import { fetchUser } from './Components/Modules/Header-Module/store/userSlice';
import { fetchUserProfile } from './Components/Modules/User-Cart/store/userProfileSlice';
import { helperLinkfetch } from './Components/Modules/Helper-Links-Module/store/helperLinks';
import { carouselFetch } from './Components/Modules/User-Carusel-Module/store/carouselSlice';
import { followingFetch } from './Components/Modules/Following-Model/store/followingSlice';
import { coursesPopularFetch } from './Components/Modules/Courses-Posular-Model/store/coursesPopulerSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchUserProfile());
    dispatch(helperLinkfetch());
    dispatch(carouselFetch());
    dispatch(followingFetch());
    dispatch(coursesPopularFetch());
  }, [dispatch]);
  return (
    <div className="Main">
      <Routers />
    </div>
  );
}

export default App;
