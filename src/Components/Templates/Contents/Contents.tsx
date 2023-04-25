import React from 'react';
import './contents.css';

import UserCarts from '../../Modules/User-Cart-Module/components/User-carts/UserCarts';
import HelpersLink from '../../Modules/Helper-Links-Module/components/Helpers-Link/HelpersLink';
import CoursesPopular from '../../Modules/Courses-Posular-Module/components/Courses-Popular/CoursesPopuler';
import LinkedIn from '../../Modules/LinkedIn-Module/components/LinkedIn/LinkedIn';
import Message from '../../Modules/Message-Module/components/Message/Message';
import AddPost from '../../Modules/Add-Post-Module/components/Add-Post/AddPost';
import Devider from '../../Components/Divider/Devider';
import Posts from '../../Modules/Posts-Module';
import { UserCarousel } from '../../Modules/User-Carousel-Module';
import { Followings } from '../../Modules/Following-Module';

export default function Contents() {
  return (
    <div className="container">
      <div className="ContentsMain">
        <div className="row g-0">
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="contentLeftSide">
              <UserCarts />
              <div className="ContantsHelpers">
                <HelpersLink />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <UserCarousel />
            <div className="contentsRightSidePaddings">
              <AddPost />
            </div>
            <div className="contentsRightSideDevider">
              <Devider />
            </div>
            <div className="contentsRightSidePaddings">
              <Posts />
            </div>
            <div className="contentsRightSidePaddings">
              <Posts />
            </div>
            <div className="contentsRightSidePaddings">
              <Posts />
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="contentsRightSide">
              <Followings />
              <div className="contentsRightSidePaddings">
                <CoursesPopular />
              </div>
              <div className="contentsRightSidePaddings">
                <LinkedIn />
              </div>
              <div className="contentsRightSidePaddings">
                <Message />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
