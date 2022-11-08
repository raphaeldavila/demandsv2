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
const File_1 = __importDefault(require("../../../database/schemas/File"));
class FileController {
    findFile(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const user = yield File_1.default.findById(id);
                return response.json(user);
            }
            catch (error) {
                return response.status(500).json({
                    error: "Erro ao realizar busca. Tente novamente mais tarde!",
                    message: error
                });
            }
        });
    }
    find(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield File_1.default.find();
                return response.json(users);
            }
            catch (error) {
                return response.status(500).json({
                    error: "Erro ao realizar busca. Tente novamente mais tarde!",
                    message: error
                });
            }
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createFile = yield File_1.default.insertMany(request.body);
                return response.json(createFile);
            }
            catch (error) {
                return response.status(500).json({
                    error: "Erro ao cadastrar importação!",
                    message: error
                });
            }
        });
    }
    deleteFile(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const over = yield File_1.default.deleteOne({ _id: id });
                return response.json(over);
            }
            catch (error) {
                return response.status(500).json({
                    error: "Erro ao realizar busca. Tente novamente mais tarde!",
                    message: error
                });
            }
        });
    }
}
exports.default = new FileController;
