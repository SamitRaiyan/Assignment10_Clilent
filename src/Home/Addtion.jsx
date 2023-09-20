import React from "react";
import { FaCheck } from "react-icons/fa";

const Addtion = () => {
  return (
    <div>
        
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
          <div className="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:border-t-8 hover:border-r-8 hover:border-yellow-500 rounded-lg transition duration-400 ease-in">
            <div className="m-8 h-96">
              <div className=" m-2">Silver</div>
              <div className=" m-2 text-3xl">$3.99/Mo</div>
              <div className=" m-2 mt-8">For Home</div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">1 contest</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">30 unique recipe</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">2 Exibition</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">~10,000$ prizemoney</div>
              </div>
              
            </div>
            <div className="flex justify-center">
              <div className="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                Subscribe
              </div>
            </div>
          </div>
          <div className="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:border-t-8 hover:border-r-8 hover:border-pink-500 rounded-lg transition duration-400 ease-in">
            <div className="m-8 h-96">
              <div className=" m-2">Gold</div>
              <div className=" m-2 text-3xl">$9.99/Mo</div>
              <div className=" m-2 mt-8">For Mini business</div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">10 contest</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">100 Unique recipe</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">5 Exibition</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">~25,000$ prizemoney</div>
              </div>
              
              <div className="flex items-center">
              <FaCheck/>
                <div className="">Weekly Backups</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">Free E-mail</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                Subscribe
              </div>
            </div>
          </div>
          <div className="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:border-t-8 hover:border-r-8 hover:border-violet-500 rounded-lg transition duration-400 ease-in">
            <div className="m-8 h-96">
              <div className=" m-2">Diamond</div>
              <div className=" m-2 text-3xl">$14.99/Mo</div>
              <div className=" m-2 mt-8">For Hotel</div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">100 websites</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">500 GB Storage</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">Unlimited Databases</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">~100,000 Visits Monthly</div>
              </div>
              
              <div className="flex items-center">
              <FaCheck/>
                <div className="">Daily Backups</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">Free E-mail</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtion;
