import React, { useState } from "react";
import "./EditProfile.css";

export default function EditProfile() {
    const [user, setUser] = useState({
        username: "Usman",
        email: "usmansaleem2k3@gmail.com",
        password: "",
        profilePic: null,
        profilePicPreview: "https://via.placeholder.com/150", // Default image
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setUser({
                    ...user,
                    profilePic: reader.result, // Store Base64 string
                    profilePicPreview: reader.result, // Preview image
                });
            };
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch.post("http://localhost:5000/api/user/update", user);
            console.log("Response:", response.data);
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div className="edit-profile-container">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit} className="edit-profile-form">
                <div className="profile-pic-container">
                    <img src={user.profilePicPreview} alt="Profile" className="profile-pic" />
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>

                <div className="input-group">
                    <label>Username:</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} required />
                </div>

                <div className="input-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} required />
                </div>

                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} required />
                </div>

                <button type="submit" className="save-btn">Save Changes</button>
            </form>
        </div>
    );
}
