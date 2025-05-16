import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  const [department, setDepartment] = useState({
    dep_name: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ems-backend-zfi7.onrender.com/api/department/add",
        department,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/departments");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add New Department
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="dep_name"
              className="text-sm font-medium text-gray-700 p-3"
            >
              Department Name
            </label>
            <input
              type="text"
              placeholder="Enter Department Name"
              name="dep_name"
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 p-3"
            >
              Description
            </label>
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md "
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Department
          </button>
        </form>
      </div>
    </div>
//     <div className="mx-4 md:mx-auto mt-4 md:mt-10 bg-white p-4 md:p-8 rounded-md shadow-md w-full md:max-w-3xl">
//   <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
//     Add New Department
//   </h2>
//   <form onSubmit={handleSubmit}>
//     <div className="mb-4">
//       <label className="block text-sm md:text-base font-medium text-gray-700 mb-1 md:mb-2">
//         Department Name
//       </label>
//       <input
//         className="w-full p-2 text-sm md:text-base border border-gray-300 rounded-md"
//         // ... rest remains same
//       />
//     </div>
//     <div className="mb-4">
//       <label className="block text-sm md:text-base font-medium text-gray-700 mb-1 md:mb-2">
//         Description
//       </label>
//       <textarea
//         className="w-full p-2 text-sm md:text-base border border-gray-300 rounded-md"
//         // ... rest remains same
//       ></textarea>
//     </div>
//     <button
//       className="w-full mt-4 md:mt-6 text-sm md:text-base bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
//       // ... rest remains same
//     >
//       Add Department
//     </button>
//   </form>
// </div>
  );
};

export default AddDepartment;
