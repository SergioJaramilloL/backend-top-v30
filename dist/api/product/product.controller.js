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
exports.createProductHandler = exports.getAllProductsHandler = void 0;
const product_service_1 = require("./product.service");
const getAllProductsHandler = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, product_service_1.getAllProducts)();
    return res.status(200).json(products);
});
exports.getAllProductsHandler = getAllProductsHandler;
const createProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const productCreated = yield (0, product_service_1.createProduct)(data);
    return res.status(201).json(productCreated);
});
exports.createProductHandler = createProductHandler;
