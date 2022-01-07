import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();

  if(!user) {
    return <div>Not logged in</div>
  }
  
  const { name, picture, email } = user;
  return (
    <div>
      <img src={picture} alt="Profile" />
      <h2>{name}</h2>
      <p>{email}</p>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
};

export default Profile;