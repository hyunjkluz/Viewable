import * as express from "express";
const router = express.Router();
import upload from '../utils/multer';

import * as buildingController from "../controller/buildingController.js";

router.get("/", buildingController.getTest); //test getbuilding
router.get("/:buildingIdx", buildingController.getOneBuilding); // 특정빌딩 정보보기
router.post("/:buildingIdx/report", upload.single('img'), buildingController.postbuildingReport); // 특정빌딩 신고하기

module.exports = router;