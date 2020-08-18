"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const validateToken_1 = require("../libs/validateToken");
const router = express_1.Router();
router.post('/singup', authController_1.singup);
router.post('/singin', authController_1.singin);
router.get('/profile', validateToken_1.tokenValidation, authController_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map