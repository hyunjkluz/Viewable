const express = require("express");
const router = express.Router();

const storeController = require("../controller/storeController");

router.get("/:categoryIdx", storeController.getStoreByCategoryIdx); // 카테고리별 검색
router.get("/", storeController.getStoreSearch); // 검색

module.exports = router;