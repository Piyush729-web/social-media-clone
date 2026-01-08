import express from "express";
import { register, login } from "../controllers/auth.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post("/register", upload.single("picture"), register);
router.post("/login", login);  // <- add this

export default router;

