//FUNCIONAMIENTO DE TODAS LAS RUTAS DE TRATAMIENTO

const models = require('../database/models/index')

module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Tratamiento listar todos')

            const treatments = await models.tratamiento.findAll()

            res.json({
                success:true,
                data:{
                    tratamientos:treatments
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            const treatment = await models.tratamiento.create(req.body)

            res.json({
                success:true,
                data:{
                    id: treatment.id
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    listarInfo: async (req,res) => {
        try {
            console.log('ejecutando Tratamiento listarInfo')
            const treatment = await models.tratamiento.findOne({
                where:{
                    id:req.params.idTratamiento
                }
            })

            res.json({
                success:true,
                data:{
                    tratamiento:treatment
                }    
            })
    }catch (error) {
            console.log(error)
        }
    },

}