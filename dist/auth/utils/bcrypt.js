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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
/**
 * Hash password
 * @param password Password to hash
 * @param factor Number of rounds to hash the password, default is 10
 * @returns Promise<string> Hashed password
 */
const hashPassword = (password, factor) => __awaiter(void 0, void 0, void 0, function* () {
    // 1. salt
    const salt = yield bcrypt_1.default.genSalt(factor);
    // 2. hash
    return yield bcrypt_1.default.hash(password, salt);
});
exports.hashPassword = hashPassword;
/**
 * compare password
 * @param password Password to compare
 * @param hashedPassword Password hashed to compare
 * @returns Promise<boolean> True if password match, false otherwise
 */
const comparePassword = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.compare(password, hashedPassword);
});
exports.comparePassword = comparePassword;
