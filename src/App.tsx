import React, { useEffect } from 'react';

import Routers from './Router';

import PageButtons from './Components/UI/Page-buttons/PageButtons';
import Home from './assets/images/homeIcon.svg';
import AvatarImage from './assets/images/userIcon.svg';
import Avatar from './Components/UI/Avatar/Avatar';
import CartIconProps from './Components/UI/Cart-icon/CartIcon';
import Photo from './assets/images/photo.svg';
import UserPostIcons from './Components/UI/User-Post-Icons/UserPostIcons';
import Send from './assets/images/send.svg';
import Arrow from './Components/UI/Arrow/Arrow';
import P from './Components/UI/P/P';
import GreenText from './Components/UI/GreenText/GreenText';
import InputCheckbox from './Components/UI/Input-Checkbox/InputCheckbox';
import InputFilds from './Components/UI/Input-Filds/InputFilds';
import InputPostFilds, {
  SubmitData,
} from './Components/Components/Input-Post-Fields/InputPostFilds';
import Folliwing from './Components/Components/Following/Folliwing';
import AccountIcons from './Components/Components/Account-Icons/AccountIcons';
import PostAvatar from './Components/Components/Post-avatar/PostAvatar';
import CoursesPopuler from './Components/Components/Courses-Populer/CoursesPopuler';
import Groups from './Components/Components/Groups/Groups';
import Events from './Components/Components/Event/Events';
import FollowersHashtag from './Components/Components/Followers-Hashtag/FollowersHashtag';
import ProfilViews from './Components/Components/Profil-Views/ProfilViews';
import ProfilePosts from './Components/Components/Profile-Posts/ProfilePosts';
import LinedInFilter from './Components/Components/LinkedIn-Filter/LinkedInFilter';
import Devider from './Components/Components/Devider/Devider';
import { useAppDispatch } from './hook/UseRedux';
import { fetchUser } from './Components/Modules/Header-Module/store/userSlice';
import { fetchUserProfile } from './Components/Modules/User-Cart/store/userProfileSlice';
import { helperLinkfetch } from './Components/Modules/Helper-Links-Module/store/helperLinks';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchUserProfile());
    dispatch(helperLinkfetch());
  }, [dispatch]);
  // const [value, setValue] = React.useState<SubmitData | any>({});
  // console.log('value', value);
  // const [value2, setValue2] = React.useState<SubmitData | any>({});
  // console.log('value2', value2);
  // const [value3, setValue3]: any = React.useState('');
  // console.log('value3', value3);

  return (
    <div className="Main">
      <Routers />

      {/* <Devider />
      <Devider />
      <Devider />

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
      </GreenText> */}

      {/* <InputCheckbox checkeds={value3} setChecked={setValue3} />
     <InputCheckbox />
      <InputCheckbox />  */}

      {/* <Folliwing
        imageUrl={AvatarImage}
        textName="Jhon Robert"
        text="Product Designer at dsgn.id"
        onChange={(data) => setValue2(data)}
      />

      <AccountIcons imageUrl={AvatarImage} textName="Jhon Robert" />

      <PostAvatar
        imageUrl={AvatarImage}
        textName="Julia Robert"
        text="Product Designer at lancar.id"
        time="1 hr"
        isFollowing
      />
      <CoursesPopuler
        coursesName="Learning UX Design - Mobile apps"
        createrName="Thomas Wick"
        count="500"
      />

      <Groups groupsName="UI  Design" />
      <Events eventsDate="Webinar UI Design at 09:00 am." />
      <FollowersHashtag followersName="#UIDesign" />

      <ProfilViews views="16" />
      <ProfilePosts views="500" />

      <LinedInFilter category="About" setGreen returnData={setValue3} />
      <Devider />
      <h1>
        Components --------------------------------------------------------
      </h1>
      <div className="container">
        <h2>asdasdas</h2>
      </div> */}
      {/* <InputFilds
        value={value}
        placeholder="Start a post"
        onChange={(e) => setValue(e.target.value)}
        size="large"
        params="post"
      /> */}

      {/* <InputPostFilds
        placeholder="Start a post"
        onChange={(data) => setValue(data)}
        size="small"
      /> */}
    </div>
  );
}

export default App;
