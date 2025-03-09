const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const updateUserProfile = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        let updateFields = { username, email };

        // If a new password is provided, hash it before updating
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateFields.password = await bcrypt.hash(password, salt);
        }

        // If a new profile picture is uploaded, save the file path
        if (req.file) {
            updateFields.profilePic = `/uploads/${req.file.filename}`;
        }

        const updatedUser = await User.findOneAndUpdate(
            { email },
            updateFields,
            { new: true }
        );

        if (!updatedUser) return res.status(404).json({ message: "User not found" });

        res.json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Server error" });
    }
};


// const getUserData = async (req, res) => {
//     try {
//         const token = req.headers.authorization?.split(" ")[1];
//         if (!token) return res.status(401).json({ message: "Unauthorized" });

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await User.findById(decoded.userId).select("-password");

//         if (!user) return res.status(404).json({ message: "User not found" });

//         res.json({ user });
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// };


const getUserData = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Unauthorized" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId).select("-password");


        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Convert stored image path to Base64 if needed
        let profilePicBase64 = "";
        if (user.profilePic) {
            profilePicBase64 = Buffer.from(user.profilePic, "base64").toString("base64");
        }

        res.json({
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                profilePic: profilePicBase64, // Send Base64 data
            },
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { updateUserProfile, getUserData };
