import React, { useContext, createContext, useState, useEffect } from 'react';

import axios from "axios";

const userContext = createContext()
const authContext = ({children}) => {

     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true);

     

     useEffect(()=>{
         const verifyUser = async()=>{
            try{
                const token = localStorage.getItem('token')
                if(token){
                  const response = await axios.get('https://ems-backend-zfi7.onrender.com/api/auth/verify',{
                    headers: {
                        "Authorization" : `Bearer ${token}`
                    }
                  })
                  if(response.data.success){
                    setUser(response.data.user)
                  }
            }else{
                setUser(null);
                setLoading(false);
            }}
            catch(error){
                if(error.response && !error.response.data.error){
                setUser(null)
                }
            }finally{
                setLoading(false)
            }
         }
         verifyUser()
     },[])
     const login = (user)=>{
        setUser(user)
     }
     const logout = () =>{
       setUser(null)
       localStorage.removeItem("token")
     }


    return (
        <userContext.Provider value={{user, login, logout, loading}}>
        {children}

        </userContext.Provider>
    )
}


export const useAuth = () => useContext(userContext)
export default authContext


// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Check for token on app load
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       axios
//         .get("http://localhost:5000/api/auth/user", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => {
//           setUser(response.data.user);
//         })
//         .catch(() => {
//           localStorage.removeItem("token");
//           setUser(null);
//         });
//     }
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
