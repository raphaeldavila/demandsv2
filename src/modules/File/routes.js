"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
const express_1 = require("express");
const FileController_1 = __importDefault(require("./controller/FileController"));
exports.fileRouter = (0, express_1.Router)();
exports.fileRouter.post('/file', FileController_1.default.create);
exports.fileRouter.get('/files', FileController_1.default.find);
exports.fileRouter.get('/file/:id', FileController_1.default.findFile);
exports.fileRouter.delete('/file/:id', FileController_1.default.deleteFile);
exports.default = exports.fileRouter;
