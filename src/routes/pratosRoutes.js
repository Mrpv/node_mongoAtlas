import express from "express";
import PratosController from "../controllers/pratosController.js";

const router = express.Router();

router
    .get("/pratos", PratosController.mostrarPratos)
    .get("/pratos/busca", PratosController.mostarPratosPorLactose)
    .get("/pratos/:id", PratosController.mostrarPratosPorId)
    .post("/pratos", PratosController.cadastrarPratos)
    .put("/pratos/:id", PratosController.atualizarPratos)
    .delete("/pratos/:id", PratosController.excluirPrato)


export default router;    