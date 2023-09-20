import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FOOd from './FOOd';
import { TbChefHat } from 'react-icons/tb';
import { GiChickenOven } from 'react-icons/gi';


const Recipe = () => {
    const {name}=useParams();
    const recipeData=useLoaderData()
    console.log()
    const [master,setMaster]=useState([])
        
    useEffect(()=>{
        fetch('https://chef-hunter-server-joysd1010.vercel.app/')
        .then(res=>res.json())
        .then(data=>setMaster(data))
    
    },[])
    
    const currentChef= master?.find(n=>n.name==recipeData[0].authorName)

console.log(currentChef)
    return (
        <div>
            <header className='mx-56 flex  items-center bg-slate-300 p-7 rounded-xl'>
                
                <img className='w-72 rounded-2xl mx-10' src={currentChef?.img} alt="" />
 <div>
    <div className='flex items-center'>
        <TbChefHat/>< h1 className='px-1'>Name : {currentChef?.name}</h1>
    </div>
    <div className='flex items-center'>
        <TbChefHat/>< h1 className='px-1'>Age : {currentChef?.age} y/o</h1>
    </div>
    <div className='flex items-center'>
        <TbChefHat/>< h1 className='px-1'>Experience : {currentChef?.experience} years</h1>
    </div>
    <div className='flex items-center'>
        <TbChefHat/>< h1 className='px-1'>Total Recipe : {currentChef?.total_recipes}</h1>
    </div>
    <div className='flex items-center'>
        <TbChefHat/>< h1 className='px-1'>Total Likes : {currentChef?.total_likes}</h1>
    </div>
<GiChickenOven/>
    <p>{currentChef?.bio}</p>
 </div>

            </header>
             <h1 className='text-blue-600 text-4xl font-bold text-center bg-slate-400 py-3 mx-16 rounded-2xl my-4'>Recipes of {recipeData[0].authorName}</h1>
             <div className='grid grid-cols-3 gap-10  mx-10 pb-5'>
             {
                recipeData.map(recipe=><FOOd key={recipe.id} food={recipe}/>)
             }</div> 
        </div>
    );
};

export default Recipe;