import express from "express";
import pratos from "./pratosRoutes.js";
import chefs from "./chefsRoutes.js"


const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Bem vindo ao restaurante"})
    })

    app.use(
        express.json(),
        pratos,
        chefs
    )
}

export default routes