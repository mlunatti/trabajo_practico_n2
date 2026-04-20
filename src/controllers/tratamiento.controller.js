module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Tratamiento listar todos')

            res.json({
                message:'Listado de todos los trataminetos'
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            console.log('Ejecutando tratamiento Crear')

            res.json({
                message:'Tratamineto  Creado: '+ req.body.tratamiento
            })
        } catch (error) {
            console.log(error)
        }
    },

    listarInfo: async (req,res) => {
        try {
            console.log('ejecutando Tratamiento listarInfo')

            res.json({message:'Informacion de tratamiento: ' + req.params.idTratamiento
        }) 
    }catch (error) {
            console.log(error)
        }
    },

}