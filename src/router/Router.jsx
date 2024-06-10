import HomePage from "../pages/HomePage";
import Detail from "../pages/Detail";
import LogIn from "../pages/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
