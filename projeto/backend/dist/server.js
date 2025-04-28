"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = (0, express_1.default)();
const route = (0, express_2.Router)();
app.use(express_1.default.json());
route.get('/', (req, res) => {
    res.send('Hello World!, with Typescript!');
});
app.use(route);
app.listen(3000, () => {
    console.log('Servidor is rodando na port 3000');
});
