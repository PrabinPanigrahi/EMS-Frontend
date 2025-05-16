// import React from 'react';
// import {useAuth} from '../../context/authContext.jsx'

// const Navbar = () =>{

//     const {user, logout} = useAuth()
//     return (
//         <div className='flex items-center justify-between text-white h-12 bg-teal-600 px-5'>
//             <p>Welcome, {user.name}</p>
//             <button className='px-4 py-1 bg-teal-700 hover:bg-teal-800 rounded-sm' onClick={logout}>Logout</button>

//         </div>
//     )
// }


// export default Navbar

// Navbar.jsx (Responsive Version)
import React from 'react';
import { useAuth } from '../../context/authContext.jsx'

const Navbar = () => {
  const { user, logout } = useAuth()
  
  return (
    <div className='flex  items-center justify-between text-white h-12 bg-teal-600 px-20  md:px-5'>
      {/* <p className='truncate  text-sm md:px-4 md:text-base'>Welcome, {user.name}</p> */}
      <p className='text-center sm:text-left truncate text-sm md:px-20 md:text-base'>
  Welcome, {user.name}
</p>
      <button 
        className='px-6 py-1 text-sm md:text-base md:px-4 bg-teal-700 hover:bg-teal-800 rounded-sm transition-colors'
        onClick={logout}
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar


