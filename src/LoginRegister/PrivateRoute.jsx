import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ColorRing } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
const location = useLocation(); 
// console.log(location)
if(loading){
    return <div className='flex justify-around'> <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  /></div>
}
   if(user){
    return children;
   }
   return <Navigate state={{from: location}} to="/login"  replace></Navigate>
};

export default PrivateRoute;