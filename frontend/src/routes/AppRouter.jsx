import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import CitizenDashboard from "../components/CitizenDashboard";
import Login from "../components/Login";
import AdminDashboard from "../components/AdminDashboard";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />


        <Route path="/register" element={<Register />} />


        <Route path="/citizen-dashboard" element={<CitizenDashboard />} />

        <Route path='/AdminDashboard' element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
