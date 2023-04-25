import React, { useEffect } from 'react';

import Routers from './Router';

import { useAppDispatch } from './hook/UseRedux';
import { fetchUser } from './Components/Modules/Header-Module';
import { fetchUserProfile } from './Components/Modules/User-Cart-Module';
import { helperLinkfetch } from './Components/Modules/Helper-Links-Module';
import { carouselFetch } from './Components/Modules/User-Carousel-Module';
import { followingFetch } from './Components/Modules/Following-Module';
import { coursesPopularFetch } from './Components/Modules/Courses-Posular-Module';

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
