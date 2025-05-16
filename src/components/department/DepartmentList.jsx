import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, DepartmentButtons } from "../../utils/DepartmentHelper";
import axios from "axios";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [depLoading, setDepLoading] = useState(false);

  const [filteredDepartments, setFilteredDepartments] = useState([])

  const onDepartmentDelete = async (id) =>{
    const data = departments.filter(dep => dep._id !== id)
    setDepartments(data)
  }

  // const handleDepartmentDelete = (id) => {
  //   setDepartments((prevDepartments) =>
  //     prevDepartments.filter((dep) => dep._id !== id)
  //   );
  // };

  useEffect(() => {
    fetchDepartments();
    
  }, []);
    const fetchDepartments = async () => {
      // setDepLoading(true)
      try {
        const response = await axios.get(
          "https://ems-backend-zfi7.onrender.com/api/department",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          let sno = 1;
          const data = await response.data.departments.map((dep) => ({
            _id: dep._id,
            sno: sno++,
            dep_name: dep.dep_name,
            action: <DepartmentButtons _id={dep._id} onDepartmentDelete={onDepartmentDelete}/>,
          }));
          setDepartments(data);
          setFilteredDepartments(data);
        }
        // setFilteredDepartments(data);
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDepLoading(false);
      }
    };

     fetchDepartments();

  const filterDepartments = (e) =>{
       const records = departments.filter((dep)=> dep.dep_name.toLowerCase().includes(e.target.value.toLowerCase()))
       setFilteredDepartments(records)
  }
  // const filterDepartments = (e) => {
  //   const searchTerm = e.target.value.toLowerCase();
  //   const records = departments.filter((dep) =>
  //     dep.dep_name.toLowerCase().includes(searchTerm)
  //   );
  //   setFilteredDepartments(records);
  // };
  
  

  // return (
  //   <>
  //     {depLoading ? (
  //       <div>Loading...</div>
  //     ) : (
  //       <div className="p-5">
  //         <div className="text-center">
  //           <h3 className="text-2xl font-bold">Manage Departments</h3>
  //         </div>
  //         <div className="flex justify-between items-center">
  //           <input
  //             type="text"
  //             placeholder="Search for Department"
  //             className="px-4 py-0.5 border rounded"
  //             onChange={filterDepartments}
  //           />
  //           <Link
  //             to="/admin-dashboard/add-department"
  //             className="px-4 py-1 bg-teal-600 rounded hover:bg-teal-800"
  //           >
  //             Add New Department
  //           </Link>
  //         </div>
          

  //         <div className="mt-5">
  //           <DataTable columns={columns} data={filteredDepartments} pagination />
  //         </div>
  //       </div>
        
  //     )}
  //   </>
  // );
  return (
    <>
      {depLoading ? (
        <div className="text-center p-8 text-lg">Loading...</div>
      ) : (
        <div className="p-2 md:p-5 lg:p-8">
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              Manage Departments
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-stretch md:items-center mb-4">
            {/* <input
              type="text"
              placeholder="Search for Department"
              className="w-full md:w-64 px-3 py-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              onChange={filterDepartments}
            /> */}
            <Link
              to="/admin-dashboard/add-department"
              className="w-full md:w-auto text-center text-sm md:text-base px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
            >
              Add New Department
            </Link>
          </div>

          <div className="mt-4 md:mt-6  overflow-x-auto rounded-lg shadow-sm">
            <DataTable
              columns={columns}
              data={filteredDepartments}
              pagination
              responsive
              className="text-xs md:text-sm"
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
        </div>
      )}
    </>
  );
};

export default DepartmentList;
