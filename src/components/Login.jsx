import React from 'react';
import { useNavigate,Link } from 'react-router-dom';

export default function Login() {
    let Navigate=useNavigate();
    return (<>
        
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-neutral-400"  style={{ 
      backgroundImage: `url("/images/BACKCOVER.jpg")` 
    }}>
            <div className="w-full p-6 m-auto bg-gray-200 rounded-md shadow-md lg:max-w-xl " >
           <h1 className='text-3xl font-semibold text-center text-black-700'>
            LOGIN TO START ORDERING
           </h1>
                <h1 className="text-3xl font-semibold text-center text-red-700 ">
                   LOG IN 
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text- bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
      </>
    );
}