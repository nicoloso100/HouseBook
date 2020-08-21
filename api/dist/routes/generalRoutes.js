"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generalController_1 = require("../controllers/generalController");
const router = express_1.Router();
router.get("/getCities", generalController_1.getCities);
exports.default = router;
//# sourceMappingURL=generalRoutes.js.map