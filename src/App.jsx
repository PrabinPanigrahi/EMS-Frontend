import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import RoleBasedRoutes from "./utils/RoleBasedRoutes.jsx";
import AdminSummary from "./components/dashboard/AdminSummary.jsx";
import DepartmentList from "./components/department/DepartmentList.jsx";
import AddDepartment from "./components/department/AddDepartment.jsx";
import EditDepartment from "./components/department/EditDepartment.jsx";
// import { useEffect } from "react";
import List from "./components/employee/List.jsx";
import Add from "./components/employee/Add.jsx";
import View from "./components/employee/View.jsx";
import Edit from "./components/employee/Edit.jsx";
import AddSalary from './components/salary/Add.jsx'
import ViewSalary from './components/salary/View.jsx'
import Summary from './components/EmployeeDashboard/Summary.jsx'
import LeaveList from './components/leave/List.jsx'
import AddLeave from './components/leave/Add.jsx'
import Table from "./components/leave/Table.jsx";
import Detail from "./components/leave/Detail.jsx";


// const PersistedRedirect = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname !== "/login") {
//       localStorage.setItem("lastVisited", location.pathname);
//     }
//   }, [location]);

//   const lastVisited = localStorage.getItem("lastVisited") || "/admin-dashboard";

//   return <Navigate to={lastVisited} replace />;
// };


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        {/* <Route path="/" element={<PersistedRedirect />} /> */}
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBasedRoutes requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBasedRoutes>
            </PrivateRoutes>
          }
        >
          <Route index element={<AdminSummary/>}></Route>
          <Route path="departments"element={<DepartmentList/>}></Route>
          <Route path="add-department"element={<AddDepartment/>}></Route>
          <Route path="department/:id"element={<EditDepartment/>}></Route>


          <Route path="employees"element={<List/>}></Route>
          <Route path="add-employee"element={<Add/>}></Route>
          <Route path="/admin-dashboard/employees/:id"element={<View/>}></Route>
          <Route path="/admin-dashboard/employees/edit/:id"element={<Edit/>}></Route>
          <Route path="/admin-dashboard/employees/salary/:id"element={<ViewSalary/>}></Route>

          <Route path="/admin-dashboard/salary/add"element={<AddSalary />}></Route>
          <Route path="/admin-dashboard/leaves" element={< Table/>}></Route>
          <Route path="/admin-dashboard/leaves/:id" element={<Detail />}></Route>
          <Route path="/admin-dashboard/employees/leaves/:id" element={<LeaveList />}></Route>

        </Route>
        <Route
          path="/employee-dashboard"
          element={
          <PrivateRoutes>
            <RoleBasedRoutes requiredRole={["admin","employee"]}>
            <EmployeeDashboard />
            </RoleBasedRoutes>
          </PrivateRoutes>}
        >

          <Route index element={< Summary />}></Route>
          

        <Route path="/employee-dashboard/profile/:id" element={<View /> }></Route>
        <Route path="/employee-dashboard/leaves/:id" element={<LeaveList /> }></Route>
        <Route path="/employee-dashboard/add-leave" element={<AddLeave /> }></Route>
        <Route path="/employee-dashboard/salary/:id" element={<ViewSalary /> }></Route>
        
        


        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
