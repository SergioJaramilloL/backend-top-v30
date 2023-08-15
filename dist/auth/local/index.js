"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const local_controller_1 = require("./local.controller");
const route = (0, express_1.Router)();
//login -> POST /auth/local/login
route.post('/login', local_controller_1.loginHandler);
//change password
//reset password
//active account
//louout
exports.default = route;
