import fetch from 'isomorphic-unfetch';

import { useRouter } from 'next/router';
import { useState } from 'react';

const index = ({ user }) => {
  const username = user && user.name;
  return <div> {username}</div>;
};
