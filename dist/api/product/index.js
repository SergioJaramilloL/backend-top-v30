"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.get('/', product_controller_1.getAllProductsHandler);
router.post('/', product_controller_1.createProductHandler);
exports.default = router;
