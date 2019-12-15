import * as express from "express";
const router = express.Router();

router.use("/building", require("./building"));
router.use("/user", require("./user"));
router.use("/data", require("./data"));
router.use("/facility", require("./facility"));


module.exports = router;