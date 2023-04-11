import React from 'react';

import './profilePosts.css';
import P from '../../UI/P/P';

interface ProfilePostsProps {
  views: string;
}

export default function ProfilePosts({ views }: ProfilePostsProps) {
  return (
    <div className="ProfilePostsMain">
      <P weight="bold" size="medium" className="ProfilePostsTitle">
        Profile Post
      </P>
      <P weight="bold" size="medium" className="ProfilePostsCount">
        {views}+
      </P>
    </div>
  );
}
