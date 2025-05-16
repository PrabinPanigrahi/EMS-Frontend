import { useNavigate } from "react-router-dom";
import axios from "axios";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.dep_name,  
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartmentButtons = ({ _id, onDepartmentDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Do you want to delete this department?");
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `https://ems-backend-zfi7.onrender.com/api/department/${_id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.success) {
          onDepartmentDelete(_id); // Update the list without refresh
        }
      } catch (error) {
        console.error("Error deleting department:", error);
        alert(error.response?.data?.error || "An error occurred while deleting the department.");
      }
    }
  };

  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 bg-teal-600 text-white hover:bg-teal-700 rounded"
        onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
      >
        Edit
      </button>
      <button
        className="px-3 py-1 bg-red-600 text-white hover:bg-red-700 rounded"
        onClick={handleDelete} // Call function directly
      >
        Delete
      </button>
    </div>
  );
};

// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export const columns = [
//   {
//     name: "S No",
//     selector: (row) => row.sno,
//   },
//   {
//     name: "Department Name",
//     selector: (row) => row.dep_name,
//   },
//   {
//     name: "Action",
//     selector: (row) => row.action,
//   },
//   // {

//   //     name: "S No",
//   //     selector: (row) => row.sno
//   // }
// ];

// export const DepartmentButtons = ({ _id, onDepartmentDelete }) => {
//   const navigate = useNavigate();

//   const handleDelete = async (id) => {
//     const confirm = window.confirm("Do you want to delete ?");
//     if (confirm) {
//       try {
//         const response = await axios.delete(
//           `http://localhost:5000/api/department/${_id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         if (response.data.success) {
//           onDepartmentDelete(id);
//         }
//       } catch (error) {
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       }
//     }
//   };
//   return (
//     <div className="flex space-x-3">
//       <button
//         className="px-3 py-1 bg-teal-600 text-white hover:bg-teal-700 rounded"
//         onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
//       >
//         Edit
//       </button>
//       <button
//         className="px-3 py-1 bg-red-600 text-white hover:bg-red-700 rounded"
//         onClick={(id) => handleDelete(id)}
//       >
//         Delete
//       </button>
//     </div>
//   );
// }; 
