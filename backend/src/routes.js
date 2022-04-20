const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const router = express.Router();
const AuthController = require("./controllers/AuthController");
const WorkplaceController = require("./controllers/WorkplaceController");

const upload = multer(uploadConfig);

router.post("/auth", AuthController.store);
router.post("/workplace", upload.single("thumbnail"), WorkplaceController.store);
router.get("/workplace", WorkplaceController.index);


module.exports = router;
