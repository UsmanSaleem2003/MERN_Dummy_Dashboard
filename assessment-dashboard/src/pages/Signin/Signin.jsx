import React, { useState } from "react";
import "./Signin.css";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Sign In</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="showPassword"
                        checked={passwordVisible}
                        onChange={() => setPasswordVisible(!passwordVisible)}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                </div>
                <button className="login-btn">Login</button>
                <p className="signup-link">
                    Don't have an account? <a href="/signup">Signup Here</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
