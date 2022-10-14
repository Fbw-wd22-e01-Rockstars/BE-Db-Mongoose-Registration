import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";

let router = express.Router();

router.get("/list", getUsers);
router.post("/register", createUser);

export default router;
