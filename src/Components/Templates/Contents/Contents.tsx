import React from 'react';
import './contents.css';

import UserCarts from '../../Modules/User-Cart/components/User-carts/UserCarts';
import HelpersLink from '../../Modules/Helper-Links-Module/components/Helpers-Link/HelpersLink';
import Followings from '../../Modules/Following-Model/components/Followings/Followings';
import CoursesPopular from '../../Modules/Courses-Posular-Model/components/Courses-Popular/CoursesPopular';
import LinkedIn from '../../Modules/LinkedIn-modules/components/LinkedIn/LinkedIn';
import Message from '../../Modules/Message-modules/components/Message/Message';
import UserCarusel from '../../Modules/User-Carusel-Module/components/User-Carusel/UserCarusel';
import AddPost from '../../Modules/Add-Post-Modules/components/Add-Post/AddPost';
import Devider from '../../Components/Devider/Devider';
import Posts from '../../Modules/Posts-Module';

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
            <UserCarusel />
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
