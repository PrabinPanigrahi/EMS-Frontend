// import React, { useEffect, useState } from 'react';
// import { fetchDepartments } from '../../utils/EmployeeHelper.jsx';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const Edit = () => {
//     const [employee, setEmployee] = useState({
//     name:'',maritalStatus:'',designation:'',
//     salary:0,department:''
// });
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         employeeId: '',
//         dob: '',
//         gender: '',
//         maritalStatus: '',
//         designation: '',
//         department: '',
//         salary: '',
//         password: '',
//         role: '',
//         image: null
//     });
//     const [departments,setDepartments] = useState(null)
//     const navigate = useNavigate();
//     const {id} = useParams()

//     useEffect(() => {
//             const getDepartments = async () => {
//                 const departments = await fetchDepartments();
//                 setDepartments(departments);
//             };
//             getDepartments();
//         }, []);

//     useEffect(() => {
//         const fetchEmployee = async () => {
//             try {
//               const response = await axios.get(
//                 `http://localhost:5000/api/employee/${id}`,
//                 {
//                   headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                   },
//                 }
//               );
//                if (response.data.success) {
//                 const employee = response.data.employee
// setEmployee((prev)=>({...prev,name:employee.userId.name,maritalStatus:employee.maritalStatus,designation:employee.designation,salary:employee.salary,department:employee.department}));
//                }
//             } catch (error) {
//               if (error.response && !error.response.data.success) {
//                 alert(error.response.data.error);
//               }
//             }
//           };

//           fetchEmployee();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: name === "image" ? files[0] : value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formDataObj = new FormData();
//         Object.keys(formData).forEach((key) => {
//             formDataObj.append(key, formData[key]);
//         });

//         try {
//             const response = await axios.post(
//                 "http://localhost:5000/api/employee/add",
//                 formDataObj,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                 }
//             );
//             if (response.data.success) {
//                 alert("Employee successfully added!");
//                 setFormData({
//                     name: '',
//                     email: '',
//                     employeeId: '',
//                     dob: '',
//                     gender: '',
//                     maritalStatus: '',
//                     designation: '',
//                     department: '',
//                     salary: '',
//                     password: '',
//                     role: '',
//                     image: null
//                 });
//                 navigate("/admin-dashboard/employees");
//             }
//         } catch (error) {
//             if (error.response && !error.response.data.success) {
//                 alert(error.response.data.error);
//             }
//         }
//     };

//     return (
//         <>{departments && employee ? (
//         <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
//             <h2 className='text-2xl font-bold mb-6'>Edit Employee</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                     {[
//                         { label: "Name", type: "text", name: "name",
//                             value:"{employee.name}", placeholder: "Insert Name" },
//                         // { label: "Email", type: "email", name: "email", placeholder: "Insert Email" },
//                         // { label: "Employee ID", type: "text", name: "employeeId", placeholder: "Employee ID" },
//                         // { label: "Date of Birth", type: "date", name: "dob", placeholder: "DOB" },
//                         { label: "Designation", type: "text", name: "designation",value:"{employee.designation}", placeholder: "Designation" },
//                         { label: "Salary", type: "number",value:"{employee.salary}", name: "salary", placeholder: "Salary" },
//                         // { label: "Password", type: "password", name: "password", placeholder: "*******" }
//                     ].map(({ label, type, name, placeholder }) => (
//                         <div key={name}>
//                             <label className='block text-sm font-medium text-gray-700'>{label}</label>
//                             <input type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required />
//                         </div>
//                     ))}

//                     {[
//                         // { label: "Gender", name: "gender", options: ["Male", "Female", "Other"] },
//                         { label: "Marital Status", name: "maritalStatus",value:"{employee.maritalStatus}", options: ["Single", "Married"] },
//                         // { label: "Role", name: "role", options: ["Admin", "Employee"] }
//                     ].map(({ label, name, options }) => (
//                         <div key={name}>
//                             <label className='block text-sm font-medium text-gray-700'>{label}</label>
//                             <select name={name} value={formData[name]} onChange={handleChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
//                                 <option value=''>Select {label}</option>
//                                 {options.map((option) => (
//                                     <option key={option} value={option.toLowerCase()}>{option}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     ))}

//                     <div className='col-span-2'>
//                         <label className='block text-sm font-medium text-gray-700'>Department</label>
//                         <select name='department' value={formData.department} onChange={handleChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
//                             <option value=''>Select Department</option>
//                             {departments.map((dep) => (
//                                 <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* <div>
//                         <label className='block text-sm font-medium text-gray-700'>Upload Image</label>
//                         <input type='file' name='image' onChange={handleChange} accept='image/*' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
//                     </div> */}
//                 </div>

//                 <button type='submit' className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'>
//                     Add Employee
//                 </button>
//             </form>
//         </div>
//         ) : <div>Loading...</div>}</>

//     );

// }

// export default Edit;

import React, { useEffect, useState } from "react";
import { fetchDepartments, getEmployees } from "../../utils/EmployeeHelper.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Add = () => {
  const [salary, setSalary] = useState({
    employeeId: null,
    basicSalary: 0,
    allowances: 0,
    deductions: 0,
    patDate: null,
  });

  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDepartments = async () => {
      const departments = await fetchDepartments();
      setDepartments(departments);
    };
    getDepartments();
  }, []);

  const handleDepartment = async (e) => {
    const emps = await getEmployees(e.target.value);
    setEmployees(emps);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSalary((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://ems-backend-zfi7.onrender.com/api/salary/add`,
        salary,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        alert("Employee successfully updated!");
        navigate("/admin-dashboard/employees");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <>
      {departments ? (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Add Salary</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  name="department"
                  onChange={handleDepartment}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dep) => (
                    <option key={dep._id} value={dep._id}>
                      {dep.dep_name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Employee */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employee
                </label>
                <select
                  name="employeeId"
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Employee</option>
                  {employees.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.employeeId}
                    </option>
                  ))}
                </select>
              </div>
              {[
                // { label: "Name", type: "text", name: "name", placeholder: "Insert Name" },
                {
                  label: "Basic Salary",
                  type: "number",
                  name: "basicSalary",
                  placeholder: "Basic Salary",
                },
                {
                  label: "Allowances",
                  type: "number",
                  name: "allowances",
                  placeholder: "Allowances",
                },
                {
                  label: "Deductions",
                  type: "number",
                  name: "deductions",
                  placeholder: "Deductions",
                },
                { label: "Pay Date", type: "date", name: "payDate" },
              ].map(({ label, type, name, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    required
                  />
                </div>
              ))}

              {/* <div className='col-span-2'>
                                <label className='block text-sm font-medium text-gray-700'>Department</label>
                                <select name='department' value={formData.department} onChange={handleChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
                                    <option value=''>Select Department</option>
                                    {departments.map((dep) => (
                                        <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
                                    ))}
                                </select>
                            </div> */}
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Employee
            </button>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Add;
