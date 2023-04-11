import { Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';

import Homes from './Components/Pages/Home/Home';
import Second from './Components/Pages/Second';
import First from './Components/Pages/First';

export default function Routers(): JSX.Element {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Homes />} />
      <Route path="/second" element={<Second />} />
      <Route path="/first" element={<First />} />
    </Routes>
  );
}
