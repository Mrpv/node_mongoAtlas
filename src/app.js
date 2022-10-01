import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'error ao conectar'))
db.once("open", () => {
  console.log('Conexao feita com o banco')
})

const app = express()
app.use(express.json())

routes(app)

// app.get('/pratos', (req, res) => {
//     pratos.find((err, pratos) => {
//         res.status(200).json(pratos);
//     })
// })
  
export default app 