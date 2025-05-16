import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import { useAuth } from "../../context/authContext";

const List = () => {
  
  const [leaves, setLeaves] = useState(null);
  let sno = 1;
  const {id} = useParams()
  const {user} = useAuth();

  const fetchLeaves = async () => {
    try {
      const response = await axios.get(
        `https://ems-backend-zfi7.onrender.com/api/leave/${id}/${user.role}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        setLeaves(response.data.leaves);
      }
    } catch (error) {
      if (error.message && !error.response.data.success) {
        alert(error.message);
      }
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);
   if(!leaves){
    return <div>Loading ...</div>

   }
//   return (
//     <div className="p-6">
//       <div className="text-center">
//         <h3 className="text-2xl font-bold">Manage Leaves</h3>
//       </div>
//       <div className="flex justify-between items-center">
//         <input
//           type="text"
//           placeholder="Search for Leave"
//           className="px-4 py-0.5 border rounded"
//           //   onChange={handleFilter}
//         />
//         {user.role === "employee" &&
//         <Link
//           to="/employee-dashboard/add-leave"
//           className="px-4 py-1 bg-teal-600 rounded hover:bg-teal-800"
//         >
//           Add New Leave
//         </Link>
// }
//       </div>
//       <table className="w-full text-sm text-left text-gray-300 mt-6">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200">
//           <tr>
//             <th className="px-6 py-3">SNO</th>
//             <th className="px-6 py-3">Leave Type</th>
//             <th className="px-6 py-3">From</th>
//             <th className="px-6 py-3">To</th>
//             <th className="px-6 py-3">Description</th>

//             <th className="px-6 py-3">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaves.map((leave) => (
//             <tr
//               key={leave._id}
//               className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//             >
//               <td className="px-6 py-3">{sno++}</td>
//               <td className="px-6 py-3">{leave.leaveType}</td>
//               {/* <td className='px-6 py-3'>{leave.basicleave}</td> */}
//               <td className="px-6 py-3">
//                 {new Date(leave.startDate).toLocaleDateString()}
//               </td>
//               <td className="px-6 py-3">
//                 {new Date(leave.endDate).toLocaleDateString()}
//               </td>
//               <td className="px-6 py-3">{leave.reason}</td>
//               <td className="px-6 py-3">{leave.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
return (
  // <div className="p-4 md:p-2 lg:p-8">
  //   <div className="text-center mb-4 md:mb-6">
  //     <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
  //       Manage Leaves
  //     </h3>
  //   </div>

  //   <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-stretch mb-4">
  //     <input
  //       type="text"
  //       placeholder="Search for Leave"
  //       className="w-full md:w-64 px-3 py-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
  //       // onChange={handleFilter}
  //     />
      
  //     {user.role === "employee" && (
  //       <Link
  //         to="/employee-dashboard/add-leave"
  //         className="w-full md:w-auto text-center text-sm md:text-base px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
  //       >
  //         Add New Leave
  //       </Link>
  //     )}
  //   </div>

  //   <div className="overflow-x-auto rounded-lg shadow-sm">
  //     <table className="w-full text-left">
  //       <thead className="bg-gray-50 text-xs md:text-sm">
  //         <tr>
  //           <th className="px-3 py-2 md:px-4 md:py-3 font-medium">SNO</th>
  //           <th className="px-3 py-2 md:px-4 md:py-3 font-medium">Leave Type</th>
  //           <th className="px-3 py-2 md:px-4 md:py-3 font-medium">From</th>
  //           <th className="px-3 py-2 md:px-4 md:py-3 font-medium">To</th>
  //           <th className="px-3 py-2 md:px-4 md:py-3 font-medium">Description</th>
  //           <th className="px-3 py-2 md:px-4 md:py-3 font-medium">Status</th>
  //         </tr>
  //       </thead>
        
  //       <tbody className="divide-y divide-gray-200">
  //         {leaves.map((leave) => (
  //           <tr key={leave._id} className="hover:bg-gray-50">
  //             <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
  //               {sno++}
  //             </td>
  //             <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
  //               {leave.leaveType}
  //             </td>
  //             <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
  //               {new Date(leave.startDate).toLocaleDateString()}
  //             </td>
  //             <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
  //               {new Date(leave.endDate).toLocaleDateString()}
  //             </td>
  //             <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
  //               {leave.reason}
  //             </td>
  //             <td className="px-3 py-2 md:px-4 md:py-3">
  //               <span className={`px-2 py-1 rounded-full text-xs ${
  //                 leave.status === 'approved' ? 'bg-green-100 text-green-800' :
  //                 leave.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
  //                 'bg-red-100 text-red-800'
  //               }`}>
  //                 {leave.status}
  //               </span>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>

  //   {leaves.length === 0 && (
  //     <div className="text-center p-6 text-gray-500">
  //       No leave records found
  //     </div>
  //   )}
  // </div>
  <div className="p-2 sm:p-4 md:p-6 lg:p-8">
    <div className="text-center mb-3 sm:mb-4 md:mb-6">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
        Manage Leaves
      </h3>
    </div>

    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-0 md:justify-between items-stretch mb-3 sm:mb-4">
      <input
        type="text"
        placeholder="Search Leave"
        className="w-full sm:w-48 md:w-64 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        // onChange={handleFilter}
      />
      
      {user.role === "employee" && (
        <Link
          to="/employee-dashboard/add-leave"
          className="w-full sm:w-auto text-center text-xs sm:text-sm md:text-base px-3 py-1 sm:px-4 sm:py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
        >
          Add New Leave
        </Link>
      )}
    </div>

    <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-[10px] xs:text-xs sm:text-sm">
          <tr>
            <th className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 font-medium">SNO</th>
            <th className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 font-medium">Leave Type</th>
            <th className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 font-medium">From</th>
            <th className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 font-medium">To</th>
            <th className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 font-medium hidden xs:table-cell">Description</th>
            <th className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 font-medium">Status</th>
          </tr>
        </thead>
        
        <tbody className="divide-y divide-gray-200 text-[10px] xs:text-xs sm:text-sm">
          {leaves.map((leave) => (
            <tr key={leave._id} className="hover:bg-gray-50">
              <td className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3">
                {sno++}
              </td>
              <td className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3">
                {leave.leaveType}
              </td>
              <td className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 whitespace-nowrap">
                {new Date(leave.startDate).toLocaleDateString()}
              </td>
              <td className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 whitespace-nowrap">
                {new Date(leave.endDate).toLocaleDateString()}
              </td>
              <td className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 hidden xs:table-cell">
                {leave.reason.length > 20 ? `${leave.reason.substring(0, 17)}...` : leave.reason}
              </td>
              <td className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3">
                <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[10px] xs:text-xs ${
                  leave.status === 'approved' ? 'bg-green-100 text-green-800' :
                  leave.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {leave.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {leaves.length === 0 && (
      <div className="text-center p-4 sm:p-6 text-gray-500 text-sm sm:text-base">
        No leave records found
      </div>
    )}
  </div>
);
};

export default List;
