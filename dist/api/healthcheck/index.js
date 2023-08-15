"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const healthcheck_controller_1 = require("./healthcheck.controller");
const router = (0, express_1.Router)();
router.get('/', healthcheck_controller_1.healchecktHandler);
exports.default = router;
