"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_controller_1 = require("../../auth/auth.controller");
const router = (0, express_1.Router)();
// /api/users -> GET
router.get('/', user_controller_1.getAllUserHandler);
// /api/users -> POST
router.post('/', user_controller_1.createUserHandler);
// /api/users/:id -> GET
router.get('/:id', user_controller_1.getUserHandler);
// /api/users/:id -> DELETE
router.delete('/', auth_controller_1.isAuthenticated, user_controller_1.deleteUserHandler);
// /api/users/:id -> PATCH
router.patch('/:id', user_controller_1.updateUserHandler);
exports.default = router;
