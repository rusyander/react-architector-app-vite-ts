import React from 'react';
import './addPost.css';

import Links from '../Links/Links';
import Form from '../Form/Form';

export default function AddPost() {
  return (
    <div className="AddPostsMain">
      <Form />
      <div className="AddPostLinks">
        <Links />
      </div>
    </div>
  );
}
