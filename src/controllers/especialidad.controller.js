module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Especialidad listar Todos')

            res.json({
                message:'Listado de todas las especialidades'
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            console.log('ejecutando Especialidad Crear')

            res.json({
                message:'Especialidad Creada: '+ req.body.especialidad
            })
        } catch (error) {
            console.log(error)
        }
    },

    listarInfo: async (req,res) => {
        try {
            console.log('ejecutando Especialidad listarInfo')

            res.json({
                message:'Informacion de Especialidad: ' +req.params.idEspecialidad
            })
        } catch (error) {
            console.log(error)
        }
    },

}