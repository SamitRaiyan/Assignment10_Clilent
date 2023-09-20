import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ChefInfo = ({ chef }) => {
  const { age, experience, img, name, total_likes, total_recipes } = chef;
 


  return (
    <div className=" bg-orange-100 pb-2 pt-2 w-60 rounded-2xl">
      <LazyLoadImage
    alt={name}
    effect="blur"
    src={img} />
      <div className="mx-3 flex justify-between items-center py-1">
        <div> {name}</div>
        <div className=" bg-pink-300 p-1 rounded-3xl flex items-center">
          
          <FaHeart className="ml-1 text-red-500" /> <span className="px-3">{total_likes}</span>
        </div>
        </div>
          <div className=" mx-3">
          <div className="pb-2">
            <p>Age : {age}</p>
            <p>Experience : {experience}</p>
            <p>Total Recipe : {total_recipes}</p>
          </div>
          <Link to={`/chef/${name}`} className=" btn-secondary rounded-xl p-1 " >view recipe</Link>
        </div>
      
    </div>
  );
};

export default ChefInfo;
