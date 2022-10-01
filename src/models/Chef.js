import mongoose from "mongoose";

const chefShema = new mongoose.Schema(
    {
        id: {type: String},
        Nome: {type: String, required: true},
        Especialidade: {type: String, required: true},
        Nacionalidade: {type: String, required: true},
    }
)

const chefs = mongoose.model("chefs", chefShema)

export default chefs;