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

// const AdminSidebar = () => {
//   return (
//     <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
//       <div className="bg-teal-600 h-12 flex items-center justify-center">
//         <h3 className="text-2xl text-center font-sigmar">Employee MS</h3>
//       </div>
//       <div className="px-4">
//         <NavLink
//           to="/admin-dashboard"
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
//           to="/admin-dashboard/employees"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-teal-500" : " "
//             } flex items-center space-x-4 block py-2.5 px-4 rounded`
//           }
//         >
//           <FaUsers />
//           <span>Employees</span>
//         </NavLink>
//         <NavLink
//           to="/admin-dashboard/departments"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-teal-500" : " "
//             } flex items-center space-x-4 block py-2.5 px-4 rounded`
//           }
//         >
//           <FaBuilding />
//           <span>Department</span>
//         </NavLink>
//         <NavLink
//           to="/admin-dashboard/leaves"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-teal-500" : " "
//             } flex items-center space-x-4 block py-2.5 px-4 rounded`
//           }
//         >
//           <FaCalendarAlt />
//           <span>Leave</span>
//         </NavLink>
//         <NavLink
//           to="/admin-dashboard/salary/add"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-teal-500" : " "
//             } flex items-center space-x-4 block py-2.5 px-4 rounded`
//           }
//         >
//           <FaMoneyBillWave />
//           <span>Salary</span>
//         </NavLink>
//         <NavLink
//           to="/admin-dashboard"
//           className="flex items-center space-x-4 block py-2.5 px-4 rounded"
//         >
//           <FaCogs />
//           <span>settings</span>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default AdminSidebar;

// // import React, { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import {
// //   FaBuilding,
// //   FaCalendarAlt,
// //   FaCogs,
// //   FaMoneyBillWave,
// //   FaTachometerAlt,
// //   FaUsers,
// //   FaTimes,
// //   FaBars,
// // } from "react-icons/fa";

// // const AdminSidebar = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   return (
// //     <>
// //       {/* Mobile Menu Button */}
// //       <button
// //         className={`md:hidden fixed top-4 left-4 z-50 p-2 text-white bg-teal-600 rounded-lg transition-transform ${
// //           isSidebarOpen ? "rotate-90" : ""
// //         }`}
// //         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// //         aria-label="Toggle sidebar"
// //         aria-expanded={isSidebarOpen}
// //       >
// //         {isSidebarOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
// //       </button>

// //       {/* Sidebar */}
// //       <div
// //         className={`bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64 
// //         transform transition-transform duration-200 ease-in-out md:translate-x-0 z-40
// //         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
// //       >
// //         <div className="bg-teal-600 h-12 flex items-center justify-center">
// //           <h3 className="text-2xl text-center font-sigmar">Employee MS</h3>
// //         </div>
// //         <div className="px-4">
// //           <NavLink
// //             to="/admin-dashboard"
// //             className={({ isActive }) =>
// //               `${
// //                 isActive ? "bg-teal-500" : ""
// //               } flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-teal-600 transition-colors`
// //             }
// //             onClick={() => setIsSidebarOpen(false)}
// //           >
// //             <FaTachometerAlt />
// //             <span>Dashboard</span>
// //           </NavLink>
// //           <NavLink
// //             to="/admin-dashboard/employees"
// //             className={({ isActive }) =>
// //               `${
// //                 isActive ? "bg-teal-500" : ""
// //               } flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-teal-600 transition-colors`
// //             }
// //             onClick={() => setIsSidebarOpen(false)}
// //           >
// //             <FaUsers />
// //             <span>Employees</span>
// //           </NavLink>
// //           <NavLink
// //             to="/admin-dashboard/departments"
// //             className={({ isActive }) =>
// //               `${
// //                 isActive ? "bg-teal-500" : ""
// //               } flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-teal-600 transition-colors`
// //             }
// //             onClick={() => setIsSidebarOpen(false)}
// //           >
// //             <FaBuilding />
// //             <span>Department</span>
// //           </NavLink>
// //           <NavLink
// //             to="/admin-dashboard/leaves"
// //             className={({ isActive }) =>
// //               `${
// //                 isActive ? "bg-teal-500" : ""
// //               } flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-teal-600 transition-colors`
// //             }
// //             onClick={() => setIsSidebarOpen(false)}
// //           >
// //             <FaCalendarAlt />
// //             <span>Leave</span>
// //           </NavLink>
// //           <NavLink
// //             to="/admin-dashboard/salary/add"
// //             className={({ isActive }) =>
// //               `${
// //                 isActive ? "bg-teal-500" : ""
// //               } flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-teal-600 transition-colors`
// //             }
// //             onClick={() => setIsSidebarOpen(false)}
// //           >
// //             <FaMoneyBillWave />
// //             <span>Salary</span>
// //           </NavLink>
// //           <NavLink
// //             to="/admin-dashboard"
// //             className="flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-teal-600 transition-colors"
// //             onClick={() => setIsSidebarOpen(false)}
// //           >
// //             <FaCogs />
// //             <span>Settings</span>
// //           </NavLink>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default AdminSidebar;


// AdminSidebar.jsx (Updated Responsive Version)
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUsers,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={`md:hidden fixed top-4 left-4 z-50 p-2 text-white bg-teal-600 rounded-lg transition-transform ${
          isSidebarOpen ? "rotate-90" : ""
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white fixed inset-y-0 left-0 space-y-2 w-64 
        transform transition-transform duration-200 ease-in-out md:translate-x-0 z-40
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="bg-teal-600 h-12 flex items-center justify-center">
          <h3 className="text-xl md:text-2xl text-center font-sigmar">Employee MS</h3>
        </div>
        <div className="px-2 md:px-4 overflow-y-auto h-[calc(100vh-3rem)]">
          {[
            { to: "/admin-dashboard", icon: <FaTachometerAlt />, text: "Dashboard" },
            { to: "/admin-dashboard/employees", icon: <FaUsers />, text: "Employees" },
            { to: "/admin-dashboard/departments", icon: <FaBuilding />, text: "Department" },
            { to: "/admin-dashboard/leaves", icon: <FaCalendarAlt />, text: "Leave" },
            { to: "/admin-dashboard/salary/add", icon: <FaMoneyBillWave />, text: "Salary" },
            // { to: "/admin-dashboard/settings", icon: <FaCogs />, text: "Settings" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-teal-500" : ""
                } flex items-center space-x-2 md:space-x-4 text-sm md:text-base block py-2 px-3 md:py-2.5 md:px-4 rounded hover:bg-teal-600 transition-colors`
              }
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.icon}
              <span>{link.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
