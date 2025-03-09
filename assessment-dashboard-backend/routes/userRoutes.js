const express = require("express");
const { updateUserProfile, getUserData } = require("../controllers/userController");
const upload = require("../middleware/multerMiddleware");
const router = express.Router();

router.put("/update", upload.single("profilePic"), updateUserProfile);
router.get("/user-data", getUserData);

module.exports = router;
