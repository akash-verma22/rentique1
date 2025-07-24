import express from "express";
import {
    getProperties,
    getProperty,
    createProperty
} from "../controllers/propertyControllers";
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";

const storage = multer.memoryStorage();
const upload = multer({storage:storage,
                      limits:{fileSize:10*1024*1024});

const router = express.Router();

router.get("/", getProperties);
router.get("/:id", getProperty);
router.post("/", authMiddleware(["manager"]),upload.array("photos",10), createProperty);

export default router;
