import express from "express";
import ChefController from "../controllers/chefsController.js";

const router = express.Router();

router
    .get("/chefs", ChefController.mostrarChefs)
    .get("/chefs/:id", ChefController.mostrarChefPorId)
    .post("/chefs", ChefController.cadastrarChef)
    .put("/chefs/:id", ChefController.atualizarChef)
    .delete("/chefs/:id", ChefController.excluirChef)


export default router;    