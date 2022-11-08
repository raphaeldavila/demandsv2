import { Router } from 'express'

import FileController from './controller/FileController'

export const fileRouter = Router()

fileRouter.post(
    '/file',
    FileController.create
)
fileRouter.get(
    '/files',
    FileController.find
)
fileRouter.get(
    '/file/:id',
    FileController.findFile
)
fileRouter.delete(
    '/file/:id',
    FileController.deleteFile
)

export default fileRouter