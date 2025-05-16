// import React, { useEffect, useState } from "react";
// import { columns, LeaveButtons } from "../../utils/LeaveHelper";
// import DataTable from "react-data-table-component";

// const Table = () => {

//     const fetchLeaves = async () =>{
//         const [leaves, setLeaves] = useState(null);
//         try {
//             const response = await axios.get(
//               "http://localhost:5000/api/leave",
//               {
//                 headers: {
//                   Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//               }
//             );
//             if (response.data.success) {
//               let sno = 1;
//               const data = await response.data.leaves.map((leave) => ({
//                 _id: leave._id,
//                 sno: sno++,
//                 employeeId: leave.employeeId.employeeId,
//                 name: leave.employeeId.userId.name,
//                 leaveType: leave.leaveType,
//                 department: leave.employeeId.department.name,
//                 days:
//                 new Date(leave.endDate).getDate() -
//                 new Date(leave.startDate).getDate(),
//                 status: leave.status,
//                 action: (<LeaveButtons Id={leave._id}/>),
//               }));
//               setLeaves(data);
              
//             }
//              //setFilteredEmployees(data);
//             //setFilteredDepartments(data);
//           } catch (error) {
//             if (error.response && !error.response.data.success) {
//               alert(error.response.data.error);
//             }
//           }
//     }

//     useEffect(()=>{
//         fetchLeaves()
//     },[])
//   return (
//     <>
//     {leaves ? (
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
//         <div className="space-x-3">
//         <button className="px-2 py-1 bg-teal-600 text-white hover:bg-teal-700 rounded-md">Pending</button>
//         <button className="px-2 py-1 bg-teal-600 text-white hover:bg-teal-700 rounded-md">Approved</button>
//         <button className="px-2 py-1 bg-teal-600 text-white hover:bg-teal-700 rounded-md">Rejected</button>
//         </div>
//       </div>
//       <DataTable columns={columns} data={leaves} pagination/>
//     </div>
// ) : <div>Loading...</div>}
// </>
//   );
// };

// export default Table;

import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import { columns, LeaveButtons } from "../../utils/LeaveHelper";
import DataTable from "react-data-table-component";

const Table = () => {
  const [leaves, setLeaves] = useState(null); // Moved outside
  const [filteredLeaves,setFilteredLeaves] = useState(null);

  const fetchLeaves = async () => {
    try {
      const response = await axios.get("https://ems-backend-zfi7.onrender.com/api/leave", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.success) {
        let sno = 1;
        const data = response.data.leaves.map((leave) => ({
          _id: leave._id,
          sno: sno++,
          employeeId: leave.employeeId.employeeId,
          name: leave.employeeId.userId.name,
          leaveType: leave.leaveType,
          department: leave.employeeId.department.dep_name,
          days:
            new Date(leave.endDate).getDate() -
            new Date(leave.startDate).getDate(),
          status: leave.status,
          action: <LeaveButtons Id={leave._id} />,
        }));
        setLeaves(data);
        setFilteredLeaves(data);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);


  const filterByInput = (e) => {
    const data = leaves.filter(leave => leave.employeeId.toLowerCase().includes(e.target.value.toLowerCase()))

    setFilteredLeaves(data);
  }
  const filterByButton = (status) => {
    const data = leaves.filter(leave => leave.status.toLowerCase().includes(status.toLowerCase()))

    setFilteredLeaves(data);
  }

  // return (
  //   <>
  //     {filteredLeaves ? (
  //       <div className="p-6">
  //         <div className="text-center">
  //           <h3 className="text-2xl font-bold">Manage Leaves</h3>
  //         </div>
  //         <div className="flex justify-between items-center">
  //           <input
  //             type="text"
  //             placeholder="Search By Emp Id"
  //             className="px-4 py-0.5 border rounded"
  //             onChange={filterByInput}
  //           />
  //           <div className="space-x-3">
  //             <button className="px-2 py-1 bg-teal-600 text-white hover:bg-teal-700 rounded-md"
  //             onClick={() => filterByButton("Pending")}>
  //               Pending
  //             </button>
  //             <button className="px-2 py-1 bg-teal-600 text-white hover:bg-teal-700 rounded-md"
  //             onClick={() => filterByButton("Approved")}>
  //               Approved
  //             </button>
  //             <button className="px-2 py-1 bg-teal-600 text-white hover:bg-teal-700 rounded-md"
  //             onClick={() => filterByButton("Rejected")}>
  //               Rejected
  //             </button>
  //           </div>
  //         </div>
  //         <div className="mt-3">
  //         <DataTable columns={columns} data={filteredLeaves} pagination />
  //         </div>
  //       </div>
  //     ) : (
  //       <div>Loading...</div>
  //     )}
  //   </>
  // );
  return (
    <>
      {filteredLeaves ? (
        <div className="p-4 md:p-6 lg:p-8">
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              Manage Leaves
            </h3>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-stretch mb-4">
            <input
              type="text"
              placeholder="Search By Emp Id"
              className="w-full md:w-64 px-3 py-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              onChange={filterByInput}
            />
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              <button 
                className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-teal-600 text-white hover:bg-teal-700 rounded-md transition-colors"
                onClick={() => filterByButton("Pending")}
              >
                Pending
              </button>
              <button 
                className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-teal-600 text-white hover:bg-teal-700 rounded-md transition-colors"
                onClick={() => filterByButton("Approved")}
              >
                Approved
              </button>
              <button 
                className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-teal-600 text-white hover:bg-teal-700 rounded-md transition-colors"
                onClick={() => filterByButton("Rejected")}
              >
                Rejected
              </button>
            </div>
          </div>

          <div className="mt-4 md:mt-6 overflow-x-auto rounded-lg shadow-sm">
            <DataTable
              columns={columns}
              data={filteredLeaves}
              pagination
              responsive
              customStyles={{
                headCells: {
                  style: {
                    backgroundColor: '#f7fafc',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                  },
                },
                cells: {
                  style: {
                    fontSize: '0.8125rem',
                    padding: '0.75rem 1rem',
                  },
                },
              }}
            />
          </div>

          {filteredLeaves.length === 0 && (
            <div className="text-center p-6 text-gray-500">
              No matching records found
            </div>
          )}
        </div>
      ) : (
        <div className="text-center p-8 text-lg">Loading...</div>
      )}
    </>
  );
};

export default Table;

