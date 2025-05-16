// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaBuilding,
//   FaCalendarAlt,
//   FaCogs,
//   FaMoneyBillWave,
//   FaTachometerAlt,
//   FaUsers,
// } from "react-icons/fa";
// import { useAuth } from "../../context/authContext";

// const Sidebar = () => {
//   const {user} = useAuth()
//   return (
//     <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
//       <div className="bg-teal-600 h-12 flex items-center justify-center">
//         <h3 className="text-2xl text-center font-sigmar">Employee MS</h3>
//       </div>
//       <div className="px-4">
//         <NavLink
//           to="/employee-dashboard"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-teal-500" : " "
//             } flex items-center space-x-4 block py-2.5 px-4 rounded`
//           } end
//         >
//           <FaTachometerAlt />
//           <span>Dashboard</span>
//         </NavLink>
//         <NavLink
//           to={`/employee-dashboard/profile/${user._id}`}
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-teal-500" : " "
//             } flex items-center space-x-4 block py-2.5 px-4 rounded`
//           }
//         >
//           <FaUsers />
//           <span>My Profile</span>
//         </NavLink>
//         <NavLink
//           to={`/employee-dashboard/leaves/${user._id}`}
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-teal-500" : " "
//             } flex items-center space-x-4 block py-2.5 px-4 rounded`
//           }
//         >
//           <FaBuilding />
//           <span>Leaves</span>
//         </NavLink>
//         <NavLink
//           to={`/employee-dashboard/salary/${user._id}`}
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-teal-500" : " "
//             } flex items-center space-x-4 block py-2.5 px-4 rounded`}
//         >
//           <FaCalendarAlt />
//           <span>Salary</span>
//         </NavLink>
        
//         {/* <NavLink
//           to="/employee-dashboard/setting"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-teal-500" : " "
//             } flex items-center space-x-4 block py-2.5 px-4 rounded`}
//         >
//           <FaCogs />
//           <span>Settings</span>
//         </NavLink> */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaBuilding,
//   FaCalendarAlt,
//   FaTachometerAlt,
//   FaUsers,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { useAuth } from "../../context/authContext";

// const Sidebar = () => {
//   const { user } = useAuth();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         className="lg:hidden fixed left-4 top-4 z-50 bg-gray-800 text-white p-3 rounded-lg shadow-lg"
//       >
//         {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </button>

//       {/* Backdrop for Mobile */}
//       {isMobileMenuOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black/50 z-40"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//       )}

//       {/* Sidebar Container */}
//       <div
//         className={`fixed lg:relative inset-y-0 left-0 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50 ${
//           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Brand Header */}
//           <div className="bg-teal-600 h-14 flex items-center justify-center shrink-0">
//             <h3 className="text-2xl font-sigmar">Employee MS</h3>
//           </div>

//           {/* Navigation Menu */}
//           <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
//             <NavLink
//               to="/employee-dashboard"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={({ isActive }) =>
//                 `flex items-center space-x-4 p-3 rounded-lg transition-colors ${
//                   isActive ? "bg-teal-500" : "hover:bg-gray-700"
//                 }`
//               }
//               end
//             >
//               <FaTachometerAlt className="flex-shrink-0" />
//               <span>Dashboard</span>
//             </NavLink>

//             <NavLink
//               to={`/employee-dashboard/profile/${user._id}`}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={({ isActive }) =>
//                 `flex items-center space-x-4 p-3 rounded-lg transition-colors ${
//                   isActive ? "bg-teal-500" : "hover:bg-gray-700"
//                 }`
//               }
//             >
//               <FaUsers className="flex-shrink-0" />
//               <span>My Profile</span>
//             </NavLink>

//             <NavLink
//               to={`/employee-dashboard/leaves/${user._id}`}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={({ isActive }) =>
//                 `flex items-center space-x-4 p-3 rounded-lg transition-colors ${
//                   isActive ? "bg-teal-500" : "hover:bg-gray-700"
//                 }`
//               }
//             >
//               <FaBuilding className="flex-shrink-0" />
//               <span>Leaves</span>
//             </NavLink>

//             <NavLink
//               to={`/employee-dashboard/salary/${user._id}`}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={({ isActive }) =>
//                 `flex items-center space-x-4 p-3 rounded-lg transition-colors ${
//                   isActive ? "bg-teal-500" : "hover:bg-gray-700"
//                 }`
//               }
//             >
//               <FaCalendarAlt className="flex-shrink-0" />
//               <span>Salary</span>
//             </NavLink>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaTachometerAlt,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useAuth } from "../../context/authContext";

const Sidebar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 bg-gray-800 text-white p-3 rounded-lg shadow-lg lg:hidden"
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 shadow-xl transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:shadow-none`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-0 top-6  text-white lg:hidden"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex flex-col h-full">
          {/* Brand Header */}
          <div className="bg-teal-600 h-16 flex items-center justify-center shrink-0 px-6">
            <h3 className="text-xl font-bold truncate">Employee Dashboard</h3>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
            <NavLink
              to="/employee-dashboard"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 mx-2 rounded-lg transition-colors ${
                  isActive ? "bg-teal-500" : "hover:bg-gray-700"
                }`
              }
              end
            >
              <FaTachometerAlt className="flex-shrink-0 text-lg" />
              <span className="text-sm">Dashboard</span>
            </NavLink>

            <NavLink
              to={`/employee-dashboard/profile/${user._id}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 mx-2 rounded-lg transition-colors ${
                  isActive ? "bg-teal-500" : "hover:bg-gray-700"
                }`
              }
            >
              <FaUsers className="flex-shrink-0 text-lg" />
              <span className="text-sm">My Profile</span>
            </NavLink>

            <NavLink
              to={`/employee-dashboard/leaves/${user._id}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 mx-2 rounded-lg transition-colors ${
                  isActive ? "bg-teal-500" : "hover:bg-gray-700"
                }`
              }
            >
              <FaBuilding className="flex-shrink-0 text-lg" />
              <span className="text-sm">Leaves</span>
            </NavLink>

            <NavLink
              to={`/employee-dashboard/salary/${user._id}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 mx-2 rounded-lg transition-colors ${
                  isActive ? "bg-teal-500" : "hover:bg-gray-700"
                }`
              }
            >
              <FaCalendarAlt className="flex-shrink-0 text-lg" />
              <span className="text-sm">Salary</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;







