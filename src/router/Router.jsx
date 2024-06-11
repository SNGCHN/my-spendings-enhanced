import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Detail from "../pages/Detail";
import LogIn from "../pages/LogIn";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? children : <Navigate to="/" />;
};

function Router() {
  return (
    // prettier-ignore
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<PrivateRoute><HomePage /></PrivateRoute>}/>
        <Route path="/detail/:detailId" element={<PrivateRoute><Detail /></PrivateRoute>}/>
        <Route path="/login"element={<PublicRoute><LogIn /></PublicRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
