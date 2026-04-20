module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Paciente listar Todos')

            res.json({
                message:'Listado de Todos los Pacientes'
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            console.log('ejecutando Paciente Crear')

            res.json({
                message:'Paciente Creado: '+ req.body.paciente
            })
        } catch (error) {
            console.log(error)
        }
    },

    listarInfo: async (req,res) => {
        try {
            console.log('ejecutando Paciente listarInfo')

            res.json({
                message:'Informacion de Paciente: ' +req.params.idPaciente            })
        } catch (error) {
            console.log(error)
        }
    },

}