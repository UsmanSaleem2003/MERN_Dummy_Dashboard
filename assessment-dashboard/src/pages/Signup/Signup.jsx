import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
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
                <button className="signup-btn">Signup</button>
                <p className="signup-link">
                    Already have an account? <Link to="/login">Login Here</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
