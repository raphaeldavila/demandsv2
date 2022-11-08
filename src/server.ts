import express from "express";
import { router } from "./routes"
import cors from "cors"
import mongoose from "mongoose"
import 'dotenv/config'

const app = express();
const db: string = (process.env.DATABASE_URL as string)
const port: string = (process.env.PORT as string)
mongoose.connect(db);

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port || 5000, () => {
    console.log("Servidor rodando na porta: " + port)
});