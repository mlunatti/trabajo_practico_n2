const models = require('../database/models/index')

module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Paciente listar Todos')

            const patients = await models.paciente.findAll()

            res.json({
                success:true,
                data:{
                    pacientes:patients
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            console.log('ejecutando Paciente Crear')

            const patient = await models.paciente.create(req.body)

            res.json({
                success:true,
                data:{
                    id: patient.id
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    listarInfo: async (req,res) => {
        try {
            console.log('ejecutando Paciente listarInfo')
            const patient = await models.paciente.create(req.body)

            res.json({
                success:true,
                data:{
                    paciente: patient
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

}