import React from "react";
import Banner from "./Banner";
import Chef from "./Chef";
import Additon1 from "./Additon1";
import Addtion from "./Addtion";

const Home = () => {
  return (
    <div className="bg-gray-400">
      <Banner />
      <div className="py-5">
        <h1 className=" text-center font-bold text-lg md:text-3xl px-3 md:px-10 py-5 bg-blue-300 md:mx-36 mx-10 rounded-lg text-slate-700">
          The Chefs Who Are Best at Their Own Way
        </h1>
      </div>
      <Chef></Chef>

      <Additon1/>
      <h1 className="text-center text-xl md:text-2xl text-slate-700">Join Our contest particiapnt program</h1>
      <div className="md:mx-40 mx-10"><hr /></div>
      
      <Addtion/>
    </div>
  );
};

export default Home;
