// import React, {useEffect, useState} from 'react';
// import {Link, useParams} from "react-router-dom";
// import axios from "axios";

// const View = () =>{
//     const [salaries, setSalaries] = useState(null);
//     const [filteredSalaries,setFilteredSalaries] = useState(null);
//     const {id} = useParams();
//     let sno = 1;

//     const fetchSalaries = async () =>{
//         try{
//             const response = await axios.get(`http://localhost:5000/api/salary/${id}`,{
//                 headers:{
//                     Authorization:`Bearer ${localStorage.getItem("token")}`
//                 }
//             });
//             console.log(response.data)
//             if(response.data.success){
//                 setSalaries(response.data.salary);
//                 setFilteredSalaries(response.data.success);
//             }
//         }catch(error){
//             if(error.response && !error.response.data.success){
//                 alert(error.message)
//             }
//         }
//     };
//     useEffect(()=>{
//         fetchSalaries();
//     },[]);

//     const filterSalaries = (q) =>{
//         const filteredRecords = salaries.filter((leave)=>leave.employeeId.toLocaleLowerCase().includes(q.toLocaleLowerCase())
//     );
//     setFilteredSalaries(filteredRecords);
//     };

//     return(
//         <>
//         {filteredSalaries === null ?(
//             <div>Loading ...</div>
//         ):(
//             <div className='overflow-x-auto p-5'>
//                 <div className='text-center'>
//                     <h2 className='text-2xl font-bold'>Salary History</h2>
//                 </div>
//                 <div className='flex justify-end my-3'>
//                     <input type="text" placeholder='Search By Emp ID'
//                     className='border px-2 rounded-md py-0.5 border-gray-300'
//                     onChange={filterSalaries} 
//                     />
//                 </div>
//              {
//                 filteredSalaries.length > 0 ?(
//                     <table className='w-full text-sm text-left text-gray-500'>
//                         <thead className='text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200'>
//                             <tr>
                                
//                             <th className='px-6 py-3'>SNO</th> 
//                             <th className='px-6 py-3'>Emp ID</th>
//                             <th className='px-6 py-3'>Salary</th>
//                             <th className='px-6 py-3'>Allowances</th>
//                             <th className='px-6 py-3'>Deduction</th>
//                             <th className='px-6 py-3'>Total</th>
//                             <th className='px-6 py-3'>Pay Date</th>         
//                             </tr> 
//                             </thead>
//                             <tbody>
//                                 {filteredSalaries.map((salary)=>(
//                                     <tr key={salary.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
//                                         <td className='px-6 py-3'>{sno++}</td>
//                                         <td className='px-6 py-3'>{salary.employeeId.employeeId}</td>
//                                         <td className='px-6 py-3'>{salary.basicSalary}</td>
//                                         <td className='px-6 py-3'>{salary.allowances}</td>
//                                         <td className='px-6 py-3'>{salary.deductions}</td>
//                                         <td className='px-6 py-3'>{salary.netSalary}</td>
//                                         <td className='px-6 py-3'>{new Date(salary.payDate).toLocaleDateString()}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                     </table>
//                 ): <div>No Records</div>
//              }
//             </div>
//         )}
//         </>
//     );
// };

// export default View;


import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../../context/authContext';

const View = () => {
    const [salaries, setSalaries] = useState([]);
    const [filteredSalaries, setFilteredSalaries] = useState([]);
    const { id } = useParams();
    let sno = 1;
    const {user} = useAuth()

    const fetchSalaries = async () => {
        try {
            const response = await axios.get(`https://ems-backend-zfi7.onrender.com/api/salary/${id}/${user.role}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            console.log("API Response:", response.data);

            if (response.data.success && response.data.salary.length > 0) {
                setSalaries(response.data.salary);
                setFilteredSalaries(response.data.salary);
            } else {
                setSalaries([]);
                setFilteredSalaries([]);
            }
        } catch (error) {
            console.error("Error fetching salaries:");
            // alert("Failed to fetch salary records.");
        }
    };

    useEffect(() => {
        fetchSalaries();
    }, []);

    const filterSalaries = (e) => {
        const query = e.target.value.toLowerCase();
        if (!query) {
            setFilteredSalaries(salaries);
        } else {
            const filteredRecords = salaries.filter(salary =>
                salary.employeeId.employeeId.toLowerCase().includes(query)
            );
            setFilteredSalaries(filteredRecords);
        }
    };

    // return (
    //     <>
    //         {filteredSalaries.length === 0 ? (
    //             <div>No Records Found</div>
    //         ) : (
    //             <div className='overflow-x-auto p-5'>
    //                 <div className='text-center'>
    //                     <h2 className='text-2xl font-bold'>Salary History</h2>
    //                 </div>
    //                 <div className='flex justify-end my-3'>
    //                     <input
    //                         type="text"
    //                         placeholder='Search By Emp ID'
    //                         className='border px-2 rounded-md py-0.5 border-gray-300'
    //                         onChange={filterSalaries}
    //                     />
    //                 </div>
    //                 <table className='w-full text-sm text-left text-gray-500'>
    //                     <thead className='text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200'>
    //                         <tr>
    //                             <th className='px-6 py-3'>SNO</th>
    //                             <th className='px-6 py-3'>Emp ID</th>
    //                             <th className='px-6 py-3'>Salary</th>
    //                             <th className='px-6 py-3'>Allowances</th>
    //                             <th className='px-6 py-3'>Deduction</th>
    //                             <th className='px-6 py-3'>Total</th>
    //                             <th className='px-6 py-3'>Pay Date</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {filteredSalaries.map((salary) => (
    //                             <tr key={salary._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
    //                                 <td className='px-6 py-3'>{sno++}</td>
    //                                 <td className='px-6 py-3'>{salary.employeeId.employeeId}</td>
    //                                 <td className='px-6 py-3'>{salary.basicSalary}</td>
    //                                 <td className='px-6 py-3'>{salary.allowances}</td>
    //                                 <td className='px-6 py-3'>{salary.deductions}</td>
    //                                 <td className='px-6 py-3'>{salary.netSalary}</td>
    //                                 <td className='px-6 py-3'>{new Date(salary.payDate).toLocaleDateString()}</td>
    //                             </tr>
    //                         ))}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         )}
    //     </>
    // );
    return (
        <>
            {filteredSalaries.length === 0 ? (
                <div className="text-center p-4 md:p-6 text-gray-600">No salary records found</div>
            ) : (
                // <div className="p-4 md:p-6 lg:p-8">
                //     <div className="text-center mb-4 md:mb-6">
                //         <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                //             Salary History
                //         </h2>
                //     </div>
                    
                //     <div className="mb-4 md:mb-6 flex justify-end">
                //         {/* <input
                //             type="text"
                //             placeholder="Search by Employee ID"
                //             className="w-full md:w-64 px-3 py-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"     
                //             onChange={filterSalaries}
                //         /> */}
                //     </div>

                //     <div className="overflow-x-auto rounded-lg shadow-sm">
                //         <table className="w-full text-left">
                //             <thead className="bg-gray-50 text-xs md:text-sm">
                //                 <tr>
                //                     <th className="px-3 py-2 md:px-4 md:py-3 font-medium">SNO</th>
                //                     <th className="px-3 py-2 md:px-4 md:py-3 font-medium">Emp ID</th>
                //                     <th className="px-3 py-2 md:px-4 md:py-3 font-medium">Salary</th>
                //                     <th className="px-3 py-2 md:px-4 md:py-3 font-medium">Allowances</th>
                //                     <th className="px-3 py-2 md:px-4 md:py-3 font-medium">Deduction</th>
                //                     <th className="px-3 py-2 md:px-4 md:py-3 font-medium">Total</th>
                //                     <th className="px-3 py-2 md:px-4 md:py-3 font-medium">Pay Date</th>
                //                 </tr>
                //             </thead>
                //             <tbody className="divide-y divide-gray-200">
                //                 {filteredSalaries.map((salary) => (
                //                     <tr key={salary._id} className="hover:bg-gray-50">
                //                         <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">{sno++}</td>
                //                         <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
                //                             {salary.employeeId.employeeId}
                //                         </td>
                //                         <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
                //                             {salary.basicSalary}
                //                         </td>
                //                         <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
                //                             {salary.allowances}
                //                         </td>
                //                         <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
                //                             {salary.deductions}
                //                         </td>
                //                         <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
                //                             {salary.netSalary}
                //                         </td>
                //                         <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm">
                //                             {new Date(salary.payDate).toLocaleDateString()}
                //                         </td>
                //                     </tr>
                //                 ))}
                //             </tbody>
                //         </table>
                //     </div>
                // </div>
          <div className="p-2 sm:p-4 md:p-6 lg:p-8">
          <div className="text-center mb-3 sm:mb-4 md:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              Salary History
            </h2>
          </div>

          {/* Search option (uncomment if needed) */}
          <div className="mb-3 sm:mb-4 md:mb-6 flex justify-end">
            {/* <input
      type="text"
      placeholder="Search ID"
      className="w-full xs:w-48 sm:w-64 px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
      onChange={filterSalaries}
    /> */}
          </div>

          {/* Mobile card view */}
          <div className="block sm:hidden space-y-3">
            {filteredSalaries.map((salary, index) => (
              <div
                key={salary._id}
                className="border rounded-lg p-3 shadow-sm bg-white"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-xs text-gray-500">
                    #{index + 1}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {salary.employeeId.employeeId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-xs text-gray-500">Basic Salary</p>
                    <p>₹{salary.basicSalary?.toLocaleString("en-IN")}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Allowances</p>
                    <p>₹{salary.allowances?.toLocaleString("en-IN")}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Deductions</p>
                    <p>₹{salary.deductions?.toLocaleString("en-IN")}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Net Salary</p>
                    <p className="font-medium">
                      ₹{salary.netSalary?.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t">
                  <p className="text-xs text-gray-500">Pay Date</p>
                  <p className="text-sm">
                    {new Date(salary.payDate).toLocaleDateString("en-IN")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table view */}
          <div className="hidden sm:block overflow-x-auto rounded-lg shadow-sm border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-xs sm:text-sm">
                <tr>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 font-medium whitespace-nowrap">
                    SNO
                  </th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 font-medium whitespace-nowrap">
                    Emp ID
                  </th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 font-medium whitespace-nowrap">
                    Salary
                  </th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 font-medium whitespace-nowrap">
                    Allowances
                  </th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 font-medium whitespace-nowrap">
                    Deduction
                  </th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 font-medium whitespace-nowrap">
                    Total
                  </th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 font-medium whitespace-nowrap">
                    Pay Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                {filteredSalaries.map((salary) => (
                  <tr key={salary._id} className="hover:bg-gray-50">
                    <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">
                      {sno++}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">
                      {salary.employeeId.employeeId}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">
                      ₹{salary.basicSalary?.toLocaleString("en-IN")}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">
                      ₹{salary.allowances?.toLocaleString("en-IN")}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">
                      ₹{salary.deductions?.toLocaleString("en-IN")}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap font-medium">
                      ₹{salary.netSalary?.toLocaleString("en-IN")}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">
                      {new Date(salary.payDate).toLocaleDateString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSalaries.length === 0 && (
            <div className="text-center p-4 text-gray-500 text-sm">
              No salary records found
            </div>
          )}
        </div>
            )}
        </>
    );
};

export default View;
