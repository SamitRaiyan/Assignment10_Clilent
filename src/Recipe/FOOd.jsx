import React, { useState } from "react";
import { FaHeart, FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const FOOd = ({ food }) => {
  const [toaststate,setToast]=useState(false)
  const {id, recipeName, recipeImage, ratings, ingredients, steps, authorName } =
    food;
    const [color,setColor]=useState(false)
    const handleBookmark=()=>{
      setToast(true)
setColor(true)
toast(`you have liked ${recipeName} madeby ${authorName}`)

    }
  
  return (
    <div className="bg-slate-200 w-80 rounded-xl ">
      <img className=" w-72 py-3 h-60 mx-auto rounded-xl" src={recipeImage} alt={recipeName} />
      <div className="flex items-center justify-between mx-4">
        <p>{recipeName}</p>
        <button onClick={handleBookmark} disabled={toaststate} >
        <FaHeart className={`${color?"text-red-500":"text-blue-500"}`}/></button>
        <ToastContainer/>
      </div>
      <div className="flex justify-between mx-4 items-center">
      <div >
        <p >{authorName}</p>
        <Rating
          placeholderRating={ratings}
          readonly
          emptySymbol={<FaRegStar color="blue" />}
          placeholderSymbol={<FaStar color="blue" />}
          fullSymbol={<FaStarHalf color="blue" />}
        />
      </div>
      <Link to={`/recipe/${id}`}>
      <button className="btn-secondary  my-3 p-2 rounded-lg">View Recipe</button></Link></div>
    </div>
  );
};

export default FOOd;
