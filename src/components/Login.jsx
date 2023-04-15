import React from 'react';
import { useNavigate,Link } from 'react-router-dom';

export default function Login() {
    let Navigate=useNavigate();
    return (<>
        
        <div className="font-serif  " style={{marginLeft:'350px',marginRight:'350px', marginTop:'150px',marginBottom:'200px'}} >

        <div className= ' flex justify-around p-10 bg-white bg-opacity-20 shadow-lg shadow-cyan-500/50 ' style={{borderRadius:'25px' ,height:'600px',width:'1200px'}} >

        <div className='p-4 bg-white bg-opacity-0 shadow-lg shadow-indigo-500/50  ' style={{borderRadius:'25px'}}>
            <h1 className='text-6xl my-5 italic' >Welcome to FOODIE</h1>
            <h1 className='text-4xl flex justify-center mt-16'>Log In </h1>
            <p className='text-3xl flex justify-center mt-20'>To Enjoy Your Favourite Foodie Items</p>
        </div>
            <div className="w-full p-6 m-auto bg-gray-200 rounded-xl shadow-md lg:max-w-xl bg-opacity-10 shadow-indigo-500/50 " style={{maxWidth:'35%'}}>
           
                <h1 className="text-3xl font-semibold text-center text-gray-900  ">
                   LOG IN 
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800 bg-opacity-40"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text- bg-white bg-opacity-40 border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800 bg-opacity-40 "
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border  bg-opacity-40 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                          <div onClick={()=>{Navigate("/home")}}> LOG IN</div>
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/SIGNUP"
                        className="font-medium text-purple-600 hover:underline"
                    >Sign up
                    </Link>
                        
                </p>
            </div> 
            </div>
        </div>
      </>
    );
}