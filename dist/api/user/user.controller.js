"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserHandler = exports.deleteUserHandler = exports.getUserHandler = exports.createUserHandler = exports.getAllUserHandler = void 0;
const user_service_1 = require("./user.service");
function getAllUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield (0, user_service_1.getAllUser)();
        return res.json(users);
    });
}
exports.getAllUserHandler = getAllUserHandler;
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        const user = yield (0, user_service_1.createUser)(data);
        return res.json(user);
    });
}
exports.createUserHandler = createUserHandler;
function getUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const user = yield (0, user_service_1.getUserById)(id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        return res.json(user);
    });
}
exports.getUserHandler = getUserHandler;
function deleteUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.user;
        const user = yield (0, user_service_1.getUserById)(id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        yield (0, user_service_1.deleteUser)(id);
        return res.json(user);
    });
}
exports.deleteUserHandler = deleteUserHandler;
function updateUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.updateUserHandler = updateUserHandler;
