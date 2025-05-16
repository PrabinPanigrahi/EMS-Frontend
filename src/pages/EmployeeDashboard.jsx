// import React from 'react'
// import Sidebar from '../components/EmployeeDashboard/Sidebar'
// import {Outlet} from 'react-router-dom';
// import Navbar from '../components/dashboard/Navbar.jsx'

// const EmployeeDashboard =() =>{
//     return(
//         <div className='flex' >
//             <Sidebar/>
//             <div className='flex-1 ml-64 bg-gray-100 h-screen'>
//                 <Navbar/>
//                 <Outlet/>
                
//             </div>
//         </div>
//     )
// }

// export default EmployeeDashboard

// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/dashboard/Navbar.jsx';
// import Sidebar from '../components/EmployeeDashboard/Sidebar';

// const EmployeeDashboard = () => {
//   return (
//     <div className="flex h-screen overflow-hidden bg-gray-100">
//       {/* Sidebar is now self-contained with its own toggle */}
//       <Sidebar />
      
//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
//         <Navbar />
//         <main className="flex-1 overflow-y-auto p-4 md:p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;


// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/dashboard/Navbar.jsx';
// import Sidebar from '../components/EmployeeDashboard/Sidebar';

// const EmployeeDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen overflow-hidden bg-gray-100">
//       {/* Sidebar */}
//       <div className={`fixed lg:static z-50 ${sidebarOpen ? 'w-64' : 'w-0 lg:w-20'} transition-all duration-300`}>
//         <Sidebar 
//           isOpen={sidebarOpen}
//           onToggle={() => setSidebarOpen(!sidebarOpen)}
//           compact={!sidebarOpen}
//         />
//       </div>

//       {/* Main Content Area */}
//       <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
//         <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
//         <main className="flex-1 overflow-y-auto p-4 md:p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/dashboard/Navbar.jsx';
import Sidebar from '../components/EmployeeDashboard/Sidebar';

const EmployeeDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Auto-close sidebar when resizing to desktop if it was open
      if (window.innerWidth >= 1024 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar with responsive behavior */}
      <div className={`fixed lg:static z-50 h-full ${isSidebarOpen ? 'w-64' : 'w-0 lg:w-20'} transition-all duration-300`}>
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          compact={windowWidth >= 1024 && !isSidebarOpen}
        />
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col h-full transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0 lg:ml-40'}`}>
        <Navbar onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && windowWidth < 1024 && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default EmployeeDashboard;
