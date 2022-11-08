import { Router } from "express"
import FileRoutes from './modules/File/routes'

const router = Router()

router.use('/api', FileRoutes)

export { router }