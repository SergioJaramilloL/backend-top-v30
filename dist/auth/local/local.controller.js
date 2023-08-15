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
exports.loginHandler = void 0;
const user_service_1 = require("../../api/user/user.service");
const bcrypt_1 = require("../utils/bcrypt");
const auth_service_1 = require("../auth.service");
function loginHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const user = yield (0, user_service_1.getUserByEmail)(email);
            if (!user) {
                return res.status(401).send('Invalid credentials');
            }
            // Compare password
            const isMatch = yield (0, bcrypt_1.comparePassword)(password, user.password);
            if (!isMatch) {
                return res.status(401).send('Invalid credentials');
            }
            // JWT
            const payload = {
                id: user.id,
                email: user.email,
            };
            const token = (0, auth_service_1.signToken)(payload);
            const profile = {
                fullName: `${user.firstName} ${user.lastName}`,
                email: user.email,
                avatar: user.avatar,
                roles: user.roles.map(({ Role }) => ({
                    id: Role.id,
                    name: Role.name
                }))
            };
            return res.status(200).json({ token, profile });
        }
        catch (error) { }
    });
}
exports.loginHandler = loginHandler;
