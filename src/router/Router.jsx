import HomePage from "../pages/HomePage";
import Detail from "../pages/Detail";
import LogIn from "../pages/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

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
