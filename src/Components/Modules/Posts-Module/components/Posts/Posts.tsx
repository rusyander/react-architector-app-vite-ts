import React from 'react';
import './posts.css';

import UserHeader from '../User-Header/UserHeader';
import P from '../../../../UI/P/P';
import GreenText from '../../../../UI/GreenText/GreenText';
import ImageContent from '../../../../../assets/images/Content.png';
import Links from '../Links/Links';
import UserForm from '../User-Form/UserForm';

export default function Posts() {
  return (
    <div className="PostsMain">
      <UserHeader />

      <P size="small" weight="standart" className="PostsMainText">
        Challenge Application about food and Coffe Restaurant
      </P>

      <div className="PostsMainLinks">
        {/* <P size="small" weight="bold" className="PostsMainTranslate">
          See translate
        </P> */}

        <GreenText size="small" weight="bold" className="PostsMainTranslate">
          See translate
        </GreenText>
      </div>

      <div className="PostsMainImageContents">
        <img src={ImageContent} data-testid="user-image-push" alt="" />
      </div>

      <div className="PostsMainLinks">
        <Links />
      </div>

      <div className="PostsMainForms">
        <UserForm />
      </div>
    </div>
  );
}
