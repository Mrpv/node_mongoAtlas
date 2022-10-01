import mongoose from "mongoose";


const pratosSchema = new mongoose.Schema(
    {
        id: {type: String},
        Nome: {type: String, required: true},
        Chef: {type: mongoose.Schema.Types.ObjectId, ref: 'chefs', required: true},
        Lactose: {type: String, required: true},
    }
) 


const pratos = mongoose.model("pratos", pratosSchema);

export default pratos;
