import pratos from "../models/Pratos.js"

class PratosController {

   static mostrarPratos = (req, res) => {
    pratos.find()
        .populate('Chef')
        .exec((err, pratos) => {
        if(err) {
            res.status(400).send({message: `${err.message} - falha ao Trazer o cardapio.`})
        } else {
            res.status(200).json(pratos)
        }
      
    })
   }

   static mostrarPratosPorId = (req, res) => {
    const id = req.params.id;
    
    pratos.findById(id)
    .populate('Chef', 'Nome')
    .exec((err, pratos) => {
        if(err) {
            res.status(400).send({message: `${err.message} - falha ao buscar o prato.`})
        } else {
            res.status(200).send(pratos)
       }
    })
   }

   static cadastrarPratos = (req, res) => {
    let prato = new pratos(req.body);

    prato.save((err) => {
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar o prato.`})
        } else {
            res.status(201).send(prato.toJSON())
        }
    })
   }

   static atualizarPratos = (req, res) => {
    const id = req.params.id;

    pratos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao atualizar o prato.`})
        } else {
            res.status(200).send({message: 'Prato atualizado com sucesso'})
        }
    })
   }

   static excluirPrato = (req, res) => {
    const id = req.params.id;

    pratos.findByIdAndDelete(id,(err) => {
        if(!err){
            res.status(200).send({message: 'Prato removido com sucesso.'})
          }else {
            res.status(500).send({message: `${err.message} - falha ao excluir o prato.`})
          }
    })
   }


   static mostarPratosPorLactose = (req, res) => {
    const lactose = req.query.Lactose

    pratos.find({'Lactose': lactose}, {}, (err, prato) => {
      if(!err){
        res.status(200).send(prato)
      }else {
        res.status(500).send({message: err.message})
      }
    })
  }


}


export default PratosController