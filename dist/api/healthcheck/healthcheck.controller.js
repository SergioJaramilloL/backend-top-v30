"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healchecktHandler = void 0;
const healchecktHandler = (_, res) => {
    res.status(200).json({ message: 'OK', uptime: process.uptime() });
};
exports.healchecktHandler = healchecktHandler;
