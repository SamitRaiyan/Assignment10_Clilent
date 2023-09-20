import React, {  useEffect, useState } from 'react';
import ChefInfo from './ChefInfo';
import { ColorRing } from 'react-loader-spinner';

const Chef = () => {
    const [chef,setChef]=useState([])
    
useEffect(()=>{
    fetch('https://chef-hunter-server-joysd1010.vercel.app/')
    .then(res=>res.json())
    .then(data=>setChef(data))

},[])

if(!chef){
    return(<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />)
}

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-16 py-5'>
            {
                chef.map(cook=><ChefInfo key={cook.id} chef={cook}/>)
            }
        </div>
    );
};

export default Chef;