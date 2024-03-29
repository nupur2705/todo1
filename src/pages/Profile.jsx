import React, { useContext } from 'react'
import { Context } from '../main';
import Loader from '../components/Loader';

const Profile = () => {
  const {isAuthenticated,loading,user}=useContext(Context);
  console.log(user);
  return( 
    loading ? <Loader/>:(
      <div>
      <h1>
      {user?.name}
      <p>{user?.email}</p>
      </h1>
    </div>
    )
  );
}

export default Profile