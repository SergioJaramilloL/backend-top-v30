"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("./config/express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 8080;
//Setup Express
(0, express_2.default)(app);
//Setup Routes
(0, routes_1.default)(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
