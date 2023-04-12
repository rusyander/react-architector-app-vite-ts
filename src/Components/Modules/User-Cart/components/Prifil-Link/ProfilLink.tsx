import React from 'react';
import './profilLink.css';

import CartIcon from '../../../../UI/Cart-icon/CartIcon';
import SavedIcon from '../../../../../assets/images/saved.svg';
import PremiumIcon from '../../../../../assets/images/premium.svg';

export default function ProfilLink() {
  return (
    <div className="UserCartsMainLinks">
      <CartIcon imageUrl={SavedIcon} text="Saved" />
      <CartIcon imageUrl={PremiumIcon} text="Try Premium" />
    </div>
  );
}
