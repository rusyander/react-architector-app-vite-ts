import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Homes from './Components/Pages/Home/Home';

export default function Routers(): JSX.Element {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Homes />} />
    </Routes>
  );
}
