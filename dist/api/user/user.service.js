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
exports.updateUser = exports.deleteUser = exports.getUserByEmail = exports.getUserById = exports.createUser = exports.getAllUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("../../auth/utils/bcrypt");
const prisma = new client_1.PrismaClient();
function getAllUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.findMany({
            select: {
                id: false,
                firstName: true,
                lastName: true,
                email: true,
                avatar: true,
                //
                roles: {
                    select: {
                        Role: {
                            select: {
                                id: true,
                                name: true,
                            }
                        }
                    }
                }
            }
        });
        return users;
    });
}
exports.getAllUser = getAllUser;
function createUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield (0, bcrypt_1.hashPassword)(input.password);
        const data = Object.assign(Object.assign({}, input), { password: hashedPassword });
        const user = yield prisma.user.create({
            data
        });
        return user;
    });
}
exports.createUser = createUser;
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({
            where: {
                id,
            },
        });
        return user;
    });
}
exports.getUserById = getUserById;
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({
            where: {
                email,
            },
            include: {
                roles: {
                    select: {
                        Role: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                }
            }
        });
        return user;
    });
}
exports.getUserByEmail = getUserByEmail;
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.delete({
            where: {
                id,
            },
        });
        return user;
    });
}
exports.deleteUser = deleteUser;
function updateUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.update({
            where: {
                id: data.id,
            },
            data,
        });
        return user;
    });
}
exports.updateUser = updateUser;
