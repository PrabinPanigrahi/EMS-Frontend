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

import React, { useEffect, useState } from 'react';
import { fetchDepartments } from '../../utils/EmployeeHelper.jsx';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [employee, setEmployee] = useState({
        name:'',maritalStatus:'',designation:'',
        salary:0,department:''
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        employeeId: '',
        dob: '',
        gender: '',
        maritalStatus: '',
        designation: '',
        department: '',
        salary: '',
        password: '',
        role: '',
        image: null
    });
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getDepartments = async () => {
            const departments = await fetchDepartments();
            setDepartments(departments);
        };
        getDepartments();
    }, []);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(
                    `https://ems-backend-zfi7.onrender.com/api/employee/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                if (response.data.success) {
                    const employee = response.data.employee
                    setEmployee((prev)=>({...prev,name:employee.userId.name,maritalStatus:employee.maritalStatus,designation:employee.designation,salary:employee.salary,department:employee.department}));
                    setFormData({
                        name: response.data.employee.userId.name || '',
                        email: response.data.employee.userId.email || '',
                        employeeId: response.data.employee.employeeId || '',
                        dob: response.data.employee.dob || '',
                        gender: response.data.employee.gender || '',
                        maritalStatus: response.data.employee.maritalStatus || '',
                        designation: response.data.employee.designation || '',
                        department: response.data.employee.department || '',
                        salary: response.data.employee.salary || '',
                        password: '', // Don't prefill password for security reasons
                        role: response.data.employee.role || '',
                        image: null
                    });
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error);
                }
            }
        };

        fetchEmployee();
    }, [id]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setEmployee((prevData) => ({
    //         ...prevData,
    //         [name] : value
    //     }));
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    
        setEmployee((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    

    // const handleSubmit = async (e) => {

    //     e.preventDefault();

    //     const formDataObj = new FormData();
    //     Object.keys(formData).forEach((key) => {
    //         formDataObj.append(key, formData[key]);
    //     });

    //     try {
    //         const response = await axios.put(
    //             `http://localhost:5000/api/employee/edit/${id}`,
    //             formDataObj,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //                 },
    //             }
    //         );
    //         if (response.data.success) {
    //             alert("Employee successfully updated!");
    //             navigate("/admin-dashboard/employees");
    //         }
    //     } catch (error) {
    //         if (error.response && !error.response.data.success) {
    //             alert(error.response.data.error);
    //         }
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     // const formDataObj = new FormData();
    //     // Object.keys(formData).forEach((key) => {
    //     //     if (formData[key] !== null && formData[key] !== '') { // Avoid appending null values
    //     //         formDataObj.append(key, formData[key]);
    //     //     }
    //     // });
    
    //     try {
    //         const response = await axios.put(
    //             `http://localhost:5000/api/employee/${id}`,
    //             employee,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //                     'Content-Type': 'multipart/form-data' // Ensure correct content type
    //                 },
    //             }
    //         );
    
    //         if (response.data.success) {
    //             alert("Employee successfully updated!");
    //             navigate("/admin-dashboard/employees");
    //         }
    //     } catch (error) {
    //         console.error("Error updating employee:", error);
    //         if (error.response && !error.response.data.success) {
    //             alert(error.response.data.error);
    //         }
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const updatedEmployee = {
            name: formData.name,
            maritalStatus: formData.maritalStatus,
            designation: formData.designation,
            department: formData.department,
            salary: formData.salary
        };
    
        try {
            const response = await axios.put(
                `https://ems-backend-zfi7.onrender.com/api/employee/${id}`,
                updatedEmployee,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/json'
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
            {departments.length > 0 && employee ? (
                <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
                    <h2 className='text-2xl font-bold mb-6'>Edit Employee</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {[
                                { label: "Name", type: "text", name: "name", placeholder: "Insert Name" },
                                { label: "Designation", type: "text", name: "designation", placeholder: "Designation" },
                                { label: "Salary", type: "number", name: "salary", placeholder: "Salary" },
                            ].map(({ label, type, name, placeholder }) => (
                                <div key={name}>
                                    <label className='block text-sm font-medium text-gray-700'>{label}</label>
                                    <input type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required />
                                </div>
                            ))}

                            {[
                                { label: "Marital Status", name: "maritalStatus", options: ["Single", "Married"] },
                            ].map(({ label, name, options }) => (
                                <div key={name}>
                                    <label className='block text-sm font-medium text-gray-700'>{label}</label>
                                    <select name={name} value={formData[name]} onChange={handleChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
                                        <option value=''>Select {label}</option>
                                        {options.map((option) => (
                                            <option key={option} value={option.toLowerCase()}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            ))}

                            <div className='col-span-2'>
                                <label className='block text-sm font-medium text-gray-700'>Department</label>
                                <select name='department' value={formData.department} onChange={handleChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
                                    <option value=''>Select Department</option>
                                    {departments.map((dep) => (
                                        <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <button type='submit' className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'>
                            Update Employee
                        </button>
                    </form>
                </div>
            ) : <div>Loading...</div>}
        </>
    );
}

export default Edit;

