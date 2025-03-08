import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import profilePlaceholder from "../Assets/UserPic.jpg";
import home_icon from "../Assets/home_icon.png";
import file_icon from "../Assets/file_icon.png";
import messages_icon from "../Assets/messages_icon.png";
import notification_icon from "../Assets/notification_icon.png";
import location_icon from "../Assets/location_icon.png";
import logout_icon from "../Assets/logout_icon.png";
import profile_icon from "../Assets/profile_icon.png"


export default function Sidebar() {
    const user = {
        name: "Usman",
        email: "usmansaleem2k3@gmail.com",
        profileImage: profilePlaceholder,
    };
    const logout = async () => {
        try {
            localStorage.removeItem("token");
            window.location.href = "/login";
        } catch (error) {
            console.error("Logout error:", error);
            alert("An unexpected error occurred");
        }
    };


    return (
        <div className="sidebar">
            <div className="profile-section">
                <img src={user?.profileImage || profilePlaceholder} alt="Profile" className="profile-image" />
                <h2 className="user-name">{user?.name || "Guest"}</h2>
                <p className="user-email">{user?.email || "Not logged in"}</p>
            </div>

            <div className="sidebar-btns">
                <Link to={"/"}><img src={home_icon} alt="home" /><span>Home</span></Link>
                <Link to={"/files"}><img src={file_icon} alt="file" /><span>File</span></Link>
                <Link to={"/messages"}><img src={messages_icon} alt="messages" /><span>Messages</span></Link>
                <Link to={"/notifications"}><img src={notification_icon} alt="notifications" /><span>Notification</span></Link>
                <Link to={"/location"}><img src={location_icon} alt="location" /><span>Location</span></Link>
                <Link to={"/edit-profile"}><img src={profile_icon} alt='profile_icon' /><span>Edit Profile</span></Link>
                <button onClick={logout} className="logout-btn">
                    <img src={logout_icon} alt="logout" className="logout-icon" />
                    <span className="logout-text">Logout</span>
                </button>
            </div>
        </div>
    );
}
