import React, { useState } from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const [error,setError]=useState('')
    const {signIn, googleSignIn, githubSignIn}=useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
        })}
        const handleGoogleSignIn = () =>{
       
            googleSignIn()
            .then(result =>{
                const googleUser = result.user;
                console.log(googleUser)
                navigate(from, {replace: true})
            })
            .catch(error =>{
                console.log(error)
            })
        }
        
        const handleGithubSignIn = () =>{
           
            githubSignIn()
            .then(result =>{
                const githubUser = result.user;
                console.log(githubUser)
                navigate(from, {replace: true})
            })
            .catch(error =>{
                console.log(error)
            })
        }
        
        


  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%]  m-2">
          <div className=" w-full md:w-3/4 flex items-center">
            <div>
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
              <h1 className="font-semibold text-xl md:text-5xl text-gray-600 m-2">
                Login to your account
              </h1>
              <h1 className="text-sm font-medium text-gray-600 m-2">
                Login using Social accounts
              </h1>
              <div className="flex gap-8">
                <button onClick={handleGoogleSignIn}>
                  <FaGoogle size={40} />
                </button>
                <button onClick={handleGithubSignIn}>
                  {" "}
                  <FaGithub size={40}></FaGithub>
                </button>
              </div>
              <h1 className="text-sm font-medium text-gray-600 m-2">OR</h1>
            </div>
            <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
              <div className="">
                <form onSubmit={handleLogin} className="grid grid-cols-1 gap-5">
                <input
                  type="email"
                  name="email"
                  placeholder="User email"
                  className=" bg-gray-200 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              
              
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className=" bg-gray-200 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              
            
            
              <input type="submit" className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-blue-400 to-emerald-400  font-medium m-2 mb-6 "/>
                
                  <p>{error}</p>
                
              </form>
            </div>
            </div>
          </div>
          <div className="h-[100%] w-full md:w-1/3 mx-10 bg-gradient-to-l from-blue-400 to-emerald-400  items-center flex justify-center">
            <div className="text-white text-base font-semibold text-center my-10 space-y-2 m-2">
              <h1 className="text-5xl">New Here?</h1>
              <h1 className="">Sign Up and discover new oppurtinities here</h1>
              <Link to={"/register"}>
              <button className="bg-white rounded-2xl px-4 text-emerald-400 py-1">
                SignUp
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
