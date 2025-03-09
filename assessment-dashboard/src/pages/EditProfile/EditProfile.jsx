import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
import profile_icon from "../../components/Assets/profile_placeholder.png"

export default function EditProfile() {
    const [user, setUser] = useState({
        username: "",
        password: "",
        profilePic: null,
        profilePicPreview: profile_icon,
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
                    profilePic: file,
                    profilePicPreview: reader.result,
                });
            };
        }
    };

    const userEmaill = JSON.parse(localStorage.getItem("user"));
    const userEmail = userEmaill?.email;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("email", userEmail);
        formData.append("username", user.username);
        if (user.password) formData.append("password", user.password);
        if (user.profilePic) formData.append("profilePic", user.profilePic);

        try {
            const response = await fetch("http://localhost:5000/api/user/update", {
                method: "PUT",
                body: formData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message || "Failed to update profile");
            setUser({
                username: "",
                password: "",
                profilePic: null,
                profilePicPreview: "https://via.placeholder.com/150",
            });
            console.log("Profile updated successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Error updating profile. Please try again.");
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
                    <input type="text" name="username" value={user.username} onChange={handleChange} />
                </div>

                <div className="input-group">
                    <label>Password (leave blank if unchanged):</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                </div>

                <button type="submit" className="save-btn">Save Changes</button>
            </form>
        </div>
    );
}
