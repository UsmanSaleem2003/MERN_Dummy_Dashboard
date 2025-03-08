import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import EditProfile from "./pages/EditProfile/EditProfile";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import { useAuth } from "./context/authContext";

function App() {
  const { token } = useAuth();
  const isLoggedIn = !!token;

  return (
    <BrowserRouter>
      <div className="app-container">
        {isLoggedIn && <Sidebar />}
        <div className="routess" style={{ marginLeft: isLoggedIn ? "200px" : "0px" }}>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Navigate replace to="/login" />} />
            <Route path="/edit-profile" element={isLoggedIn ? <EditProfile /> : <Navigate replace to="/login" />} />
            <Route path="/login" element={isLoggedIn ? <Navigate replace to="/" /> : <Signin />} />
            <Route path="/signup" element={isLoggedIn ? <Navigate replace to="/" /> : <Signup />} />
            <Route path="*" element={<Navigate replace to={isLoggedIn ? "/" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
