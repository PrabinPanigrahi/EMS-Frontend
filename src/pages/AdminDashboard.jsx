// import React from 'react'
// import { useAuth } from '../context/authContext'
// import AdminSidebar from '../components/dashboard/AdminSidebar'
// import Navbar from '../components/dashboard/Navbar'
// // import AdminSummary from '../components/dashboard/AdminSummary'
// import { Outlet } from 'react-router-dom'
// import dashboard from '/dashboard.jpg'


// const AdminDashboard = () =>{

//     const {user} = useAuth()
    

    
//     return(
//         <div className='flex' style={{backgroundImage: `url(${dashboard})`}}>
//             <AdminSidebar/>
//             <div className='flex-1 ml-64 bg-gray-100 h-screen'>
//                 <Navbar/>
//                 <Outlet/>
//             </div>
//         </div>
//     )
// }

// export default AdminDashboard

// AdminDashboard.jsx
import React from 'react'
import { useAuth } from '../context/authContext'
import AdminSidebar from '../components/dashboard/AdminSidebar'
import Navbar from '../components/dashboard/Navbar'
import { Outlet } from 'react-router-dom'
import dashboard from '/dashboard.jpg'

const AdminDashboard = () => {
  const { user } = useAuth()

  return (
    <div className='flex flex-col md:flex-row' style={{ 
      // backgroundImage: `url(${dashboard})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}>
      <AdminSidebar/>
      <div className='flex-1 md:ml-64 w-full'>
        <Navbar/>
        <div className='p-4 md:p-6'>
          <Outlet/>
        </div>
      </div>
     </div>
  )
}

export default AdminDashboard