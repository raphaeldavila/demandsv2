import { Request, Response } from "express"
import File from "../../../database/schemas/File"

class FileController {

    async findFile(request: Request, response: Response) {
        const { id } = request.params
        try {
            const user = await File.findById(id);
            return response.json(user);
        } catch (error) {
            return response.status(500).json({
                error: "Erro ao realizar busca. Tente novamente mais tarde!",
                message: error
            })
        }
    }

    async find(request: Request, response: Response) {
        try {
            const users = await File.find()
            return response.json(users);
        } catch (error) {
            return response.status(500).json({
                error: "Erro ao realizar busca. Tente novamente mais tarde!",
                message: error
            })
        }
    }

    async create(request: Request, response: Response) {
        try {
            const createFile = await File.insertMany(request.body);
            return response.json(createFile);
        } catch (error) {
            return response.status(500).json({
                error: "Erro ao cadastrar importação!",
                message: error
            })
        }
    }


    async deleteFile(request: Request, response: Response) {
        const { id } = request.params
        try {
            const over = await File.deleteOne({ _id: id })
            return response.json(over);
        } catch (error) {
            return response.status(500).json({
                error: "Erro ao realizar busca. Tente novamente mais tarde!",
                message: error
            })
        }
    }

}

export default new FileController