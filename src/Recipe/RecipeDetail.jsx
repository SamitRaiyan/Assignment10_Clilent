import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Rating from "react-rating";
import { FaBox, FaFilePowerpoint, FaPenNib, FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipeDetails = useLoaderData();
  const { authorName, ratings, recipeName, recipeImage, ingredients, steps } =
    recipeDetails;

  return (
    <div>
      {/* recipe header */}
      <div className=" mx-56 py-8 bg-indigo-200 my-4 rounded-2xl px-10 ">
        <div className="flex justify-between items-center  ">
          <h2 className="text-3xl font-bold">{recipeName}</h2>
          <Rating
            placeholderRating={ratings}
            readonly
            emptySymbol={<FaRegStar color="blue" />}
            placeholderSymbol={<FaStar color="blue" />}
            fullSymbol={<FaStarHalf color="blue" />}
          />
        </div>
        <div className="flex  items-center">
          <FaPenNib size={15}/>
          <p className="pl-3 text-xl">{authorName}</p>
        </div>
      </div>
      {/* recipe header */}

      <img className=" w-1/2 rounded-xl mx-auto mb-5" src={recipeImage} alt={recipeName} />
      <div className="mx-56 px-10 py-8 bg-indigo-200 rounded-lg my-4">
        <h1  className="pl-3 text-xl">
        Ingredients :
        </h1><br />
        {
            ingredients.map(items=><div className=" flex items-center" key={ingredients.indexOf(items)}><FaBox size={10}/><span className="pl-2">{items}</span></div>)
        }
      </div>
      <div className="mx-56 px-10 py-8 bg-indigo-200 rounded-lg my-4">
        <h1  className="pl-3 text-xl">
        Steps To Cook Properly :
        </h1><br />
        {
            steps.map(step=><div className=" flex items-center" key={steps.indexOf(step)}><FaFilePowerpoint size={10}/><span className="pl-2">{step}</span></div>)
        }
      </div>
    </div>
  );
};

export default RecipeDetail;
