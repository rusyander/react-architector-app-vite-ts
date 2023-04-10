import React from 'react';

import PageButtons from './Components/UI/Page-buttons/PageButtons';
import Home from './assets/images/homeIcon.svg';
import AvatarImage from './assets/images/userIcon.svg';

import Routers from './Router';
import Avatar from './Components/UI/Avatar/Avatar';
import CartIconProps from './Components/UI/Cart-icon/CartIcon';
import Photo from './assets/images/photo.svg';
import UserPostIcons from './Components/UI/User-Post-Icons/UserPostIcons';
import Send from './assets/images/send.svg';
import Arrow from './Components/UI/Arrow/Arrow';
import P from './Components/UI/P/P';
import GreenText from './Components/UI/GreenText/GreenText';
import InputCheckbox from './Components/UI/Input-Checkbox/InputCheckbox';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1 className="sss">Hello World</h1>
      <Routers />
      <PageButtons value={Home} url="/first" />
      <PageButtons value={Home} url="/second" />

      <Avatar imageUrl={AvatarImage} avatar="list" text="asdasds" />
      <Avatar imageUrl={AvatarImage} avatar="standart" />
      <Avatar imageUrl={AvatarImage} avatar="main" text="asdasds" />

      <CartIconProps imageUrl={Photo} text="sdadasdas" />
      <CartIconProps imageUrl={Photo} text="sdadasdas" />
      <CartIconProps imageUrl={Photo} text="sdadasdas" />

      <UserPostIcons imageUrl={Send} text="Send" />
      <h1>asdasdasdad</h1>
      <Arrow position="left" />
      <Arrow position="right" />
      <Arrow position="top" />
      <Arrow position="bottom" />

      <P>text 1</P>
      <P size="medium">text 2</P>
      <P size="large">text 3</P>
      <P weight="standart">text 4</P>
      <P weight="bold">text 5</P>
      <P size="medium" weight="standart">
        text 6
      </P>
      <P size="medium" weight="bold">
        text 6
      </P>

      <GreenText>text 1</GreenText>
      <GreenText size="medium">text 2</GreenText>
      <GreenText size="large">text 3</GreenText>
      <GreenText weight="standart">text 4</GreenText>
      <GreenText weight="bold">text 5</GreenText>
      <GreenText size="medium" weight="standart">
        text 6
      </GreenText>
      <GreenText size="medium" weight="bold">
        text 6
      </GreenText>

      <InputCheckbox />
      <InputCheckbox />
      <InputCheckbox />
      <InputCheckbox />
      <InputCheckbox />
    </div>
  );
}

export default App;
