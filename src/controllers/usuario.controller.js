module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando listar todos los usuarios')

            res.json({
                message:'Listado de todos los Usuario:' 
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            console.log('ejecutando Crear Usuario')

            res.json({
                message:'Usuario Creado:' + req.body.usuario
            })
        } catch (error) {
            console.log(error)
        }

    },

    listarInfo: async (req,res) => {
        
        try {
            console.log('ejecutando listarInfo')

            res.json({
                message:'Usuario:' +req.params.idUsuario
            })
        } catch (error) {
            console.log(error)
        }

    },

    prueba: async (req,res) =>{
        try {
            console.log('ejecutando prueba')

            res.json({
                message:'Hola Mundos'
            })
        } catch (error) {
            console.log(error)
        }

    },
}