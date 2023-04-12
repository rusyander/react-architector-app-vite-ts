import React from 'react';

import './headerModule.css';
import Logo from '../../../../../assets/images/linkInIcon.png';
import InputFilds from '../../../../UI/Input-Filds/InputFilds';
import Navigations from '../Navigations/Navigations';
import Avatars from '../Avatar/Avatasr';

export default function HeaderModule() {
  const [searchValue, setSearchValue] = React.useState<string>('');
  return (
    <div className="HeaderModuleMain">
      <div className="container HeaderModuleMainOrientations">
        <img src={Logo} alt="logo" />
        <div className="HeaderModuleMainSearch">
          <InputFilds
            value={searchValue}
            placeholder="Serach Jobs"
            onChange={(e) => setSearchValue(e.target.value)}
            size="medium"
            params="search"
          />
        </div>
        <Navigations />
        <div className="HeaderModuleMainDivider" />
        <Avatars />
      </div>
    </div>
  );
}
