import mongoose from "mongoose"

const File = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    }
},
    { strict: false })

export default mongoose.model("File", File);