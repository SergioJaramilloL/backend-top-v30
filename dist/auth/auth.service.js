"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = process.env.JWT_SECRET;
const verifyToken = (token) => {
    const decoded = jsonwebtoken_1.default.verify(token, SECRET);
    return decoded;
};
exports.verifyToken = verifyToken;
const signToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, SECRET, { expiresIn: '1d' });
    return token;
};
exports.signToken = signToken;
