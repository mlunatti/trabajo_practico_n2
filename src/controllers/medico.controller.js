const models = require('../database/models/index')
module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Medico listar Todos')

            const doctors = await models.doctor.findAll()

            res.json({
                success:true,
                data:{
                    Medicos:doctors
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            console.log('ejecutando Medico Crear')

            const doctor = await models.doctor.create(req.body)

            res.json({
                success:true,
                data:{
                    id: doctor.id
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    listarInfo: async (req,res) => {
        try {
            console.log('ejecutando Medico listarInfo')

            const doctor = await models.doctor.create(req.body)

            res.json({
                success:true,
                data:{
                    medico: doctor
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

}