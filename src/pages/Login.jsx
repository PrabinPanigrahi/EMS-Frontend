import React , {useState,useEffect}from "react";
import "./login.css";
import axios from 'axios';
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const{login,user} = useAuth();
  const navigate = useNavigate()

  // reloading page if it is already logged in
  useEffect(() => {
        if (user) {
          navigate(user.role === "admin" ? "/admin-dashboard" : "/employee-dashboard");
        }
      }, [user, navigate]);




  const handleSubmit = async (e) => {

    
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "https://ems-backend-zfi7.onrender.com/api/auth/login",
        { email, password }
      );

      if(response.data.success){
        login(response.data.user)
        localStorage.setItem("token", response.data.token)
        if(response.data.user.role === "admin"){
           navigate('/admin-dashboard')
        }else{
          navigate('/employee-dashboard')
        }
      }
    } catch (error) {
      if(error.response && !error.response.data.success){
        setError(error.response.data.error)
      }else{
        setError("Server Error")
      }
    }
  };

  // return (
  //   <div className="flex flex-col items-center h-screen justify-content-center justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
  //     <h2 className="font-sigmar text-3xl text-white poppins-thin">
  //       Employee Management System
  //     </h2>
  //     <div className="border shadow p-6 w-80 bg-white">
  //       <h2 className="text-2xl font-bold mb-4">LOGIN</h2>
  //       {error && <p className="text-red-500">{error}</p>}
  //       <form onSubmit={handleSubmit}>
  //         <div className="mb-4">
  //           <label htmlFor="email" className="block text-gray-700">
  //             Email
  //           </label>
  //           <input
  //             type="email"
  //             className="w-full px-3 py-2 border"
  //             placeholder="ENTER YOUR EMAIL"
  //             onChange={(e) => setEmail(e.target.value)}
  //             required
  //           />
  //         </div>
  //         <div className="mb-4">
  //           <label htmlFor="password" className="block text-gray-700">
  //             Password
  //           </label>
  //           <input
  //             type="password"
  //             className="w-full px-3 py-2 border"
  //             placeholder="********"
  //             onChange={(e) => setPassword(e.target.value)}
  //             required
  //           />
  //         </div>
  //         <div className="mb-4 flex items-center justify-between">
  //           <label className="inline-flex items-center">
  //             <input type="checkbox" className="form-checkbox" />
  //           </label>
  //           <a href="#" className="text-teal-600">
  //             Forget password?
  //           </a>
  //         </div>

  //         <div className="mb-4">
  //           <button
  //             type="submit"
  //             className="w-full bg-teal-600 text-white py-2 hover:bg-blue-700"
  //           >
  //             Login
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-4 md:space-y-6 px-4 py-8">
      <h2 className="font-sigmar text-2xl md:text-3xl lg:text-4xl text-white text-center">
        Employee Management System
      </h2>
      
      <div className="border shadow p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4">LOGIN</h2>
        {error && <p className="text-red-500 text-sm md:text-base">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm md:text-base">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded text-sm md:text-base"
              placeholder="ENTER YOUR EMAIL"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm md:text-base">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded text-sm md:text-base"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <label className="inline-flex items-center text-sm md:text-base">
              <input type="checkbox" className="form-checkbox h-4 w-4" />
              <span className="ml-2">Remember me</span>
            </label>
            {/* < href="#" className="text-teal-600 text-sm md:text-base hover:underline">
            a Forgot password?
            </>  */}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition-colors text-sm md:text-base"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "../context/authContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const { login, user } = useAuth();
//   const navigate = useNavigate();

//   // Redirect logged-in users
//   useEffect(() => {
//     if (user) {
//       navigate(user.role === "admin" ? "/admin-dashboard" : "/employee-dashboard");
//     }
//   }, [user, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       if (response.data.success) {
//         login(response.data.user);
//         localStorage.setItem("token", response.data.token);
//         navigate(response.data.user.role === "admin" ? "/admin-dashboard" : "/employee-dashboard");
//       }
//     } catch (error) {
//       setError(error.response?.data?.error || "Server Error");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 to-gray-100 space-y-6">
//       <h2 className="text-3xl text-white">Employee Management System</h2>
//       <div className="border shadow p-6 w-80 bg-white">
//         <h2 className="text-2xl font-bold mb-4">LOGIN</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full px-3 py-2 border"
//               placeholder="ENTER YOUR EMAIL"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full px-3 py-2 border"
//               placeholder="********"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="w-full bg-teal-600 text-white py-2 hover:bg-blue-700">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

