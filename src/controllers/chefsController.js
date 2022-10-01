import chefs from "../models/Chef.js"

class ChefController {

   static mostrarChefs = (req, res) => {
    chefs.find((err, chefs) => {
        res.status(200).json(chefs)
    })
   }

   static mostrarChefPorId = (req, res) => {
    const id = req.params.id;
    
    chefs.findById(id,(err, chefs) => {
        if(err) {
            res.status(400).send({message: `${err.message} - falha ao buscar o Id do chef.`})
        } else {
            res.status(200).send(chefs)
       }
    })
   }

   static cadastrarChef = (req, res) => {
    let chef = new chefs(req.body);

    chef.save((err) => {
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar o chef.`})
        } else {
            res.status(201).send(chef.toJSON())
        }
    })
   }

   static atualizarChef = (req, res) => {
    const id = req.params.id;

    chefs.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao atualizar o chef.`})
        } else {
            res.status(200).send({message: 'chef atualizado com sucesso'})
        }
    })
   }

   static excluirChef = (req, res) => {
    const id = req.params.id;

    chefs.findByIdAndDelete(id,(err) => {
        if(!err){
            res.status(200).send({message: 'Chef removido com sucesso.'})
          }else {
            res.status(500).send({message: `${err.message} - falha ao excluir o Chef.`})
          }
    })
   }

}


export default ChefController;