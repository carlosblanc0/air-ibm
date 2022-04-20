const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const router = express.Router();
const Auth = require("./controllers/AuthController");
const Workplace = require("./controllers/WorkplaceController");

const upload = multer(uploadConfig);

router.post("/auth", Auth.store);
router.post("/workplace", upload.single('thumbnail'), Workplace.store);

module.exports = router;
