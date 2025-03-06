// import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = false;
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   checkAuthStatus();
  // }, []);

  // const checkAuthStatus = async () => {
  //   try {
  //     const response = await fetch('http://localhost:4000/check-auth', {
  //       credentials: 'include'
  //     });
  //     const data = await response.json();
  //     setIsLoggedIn(data.isAuthenticated);
  //   } catch (error) {
  //     console.error('Error checking authentication:', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <BrowserRouter>
      <div className='app-container'>
        {isLoggedIn && <Sidebar />}
        <div className='routess' style={{ marginLeft: isLoggedIn ? '200px' : '0px' }}>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate replace to="/" />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate replace to="/login" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
