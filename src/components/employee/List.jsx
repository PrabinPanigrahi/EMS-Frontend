import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { columns, EmployeeButtons } from '../../utils/EmployeeHelper.jsx'
import DataTable from 'react-data-table-component';
import axios from 'axios';

const List = () => {

  const [employees, setEmployees] = useState([])
  const [empLoading, setEmpLoading] = useState(false)

  const [filteredEmployee,setFilteredEmployees] = useState([])

  useEffect(() => {
     fetchEmployees();
    
    
  }, []);
    const fetchEmployees = async () => {
      // setDepLoading(true)
      try {
        const response = await axios.get(
          "https://ems-backend-zfi7.onrender.com/api/employee",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          let sno = 1;
          const data = await response.data.employees.map((emp) => ({
            _id: emp._id,
            sno: sno++,
            dep_name: emp.department.dep_name,
            name: emp.userId.name,
            dob: new Date(emp.dob).toDateString(),
            profileImage: <img width={40} className='rounded-full' src={`https://ems-backend-zfi7.onrender.com/${emp.userId.profileImage}`}/>,
            action: (<EmployeeButtons Id={emp._id}/>),
          }));
          setEmployees(data);
          
           setFilteredEmployees(data);
        }
         //setFilteredEmployees(data);
        //setFilteredDepartments(data);
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setEmpLoading(false);
      }
    };

    // fetchEmployees();

    // const handleFilter = (e) =>{
    //   const records = employees.filter((emp)=>{
    //     emp.userId.name.toLowerCase().includes(e.target.value.toLowerCase())
    //   })
    //   setFilteredEmployees(records);
    // }

    const handleFilter = (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const records = employees.filter((emp) => 
        emp.name.toLowerCase().includes(searchTerm)
      );
      setFilteredEmployees(records);
    };
    
    

    // return (
    //     <div className='p-6'>
    //         <div className="text-center">
    //     <h3 className="text-2xl font-bold">Manage Employees</h3>
    //   </div>
    //   <div className="flex justify-between items-center">
    //     <input
    //       type="text"
    //       placeholder="Search for Employee"
    //       className="px-4 py-0.5 border rounded"
    //       onChange={handleFilter}
    //     />
    //     <Link
    //       to="/admin-dashboard/add-employee"
    //       className="px-4 py-1 bg-teal-600 rounded hover:bg-teal-800"
    //     >
    //       Add New Employee
    //     </Link>
    //   </div>
    //   <div>
    //     <DataTable columns = {columns} data={filteredEmployee} pagination/>
    //   </div>
    //   </div>
    // )
    return (
      <div className='p-4 md:p-6 lg:p-8'>
          <div className="text-center mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                  Manage Employees
              </h3>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-stretch md:items-center mb-4">
              <input
                  type="text"
                  placeholder="Search for Employee"
                  className="w-full md:w-64 px-3 py-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  onChange={handleFilter}
              />
              <Link
                  to="/admin-dashboard/add-employee"
                  className="w-full md:w-auto text-center text-sm md:text-base px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
              >
                  Add New Employee
              </Link>
          </div>
  
          <div className="mt-4 md:mt-6">
              <DataTable columns={columns} data={filteredEmployee} pagination />
          </div>
      </div>
  )

}


export default List