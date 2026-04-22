//FUNCIONAMIENTO DE TODAS LAS RUTAS DE USUARIO

const models = require('../database/models/index')

module.exports ={
    
    listar: async (req,res) => {
        try {
            console.log('ejecutando listar todos los usuarios')
            
            const users = await models.usuario.findAll()

            res.json({
                success:true,
                data:{
                    usuarios:users
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            console.log('ejecutando Crear Usuario')
            const user = await models.usuario.create(req.body)
            // si no coinciden nombres del body con campos de la tabla
            // por cada uno que no coincida Ej:  nombre: req.body.nombre_usuario
            res.json({
                success:true,
                data:{
                    id: user.id
                }
            })
        } catch (error) {
            console.log(error)
        }

    },

    listarInfo: async (req,res) => {
        
        try {
            console.log('ejecutando listarInfo')

            const user = await models.usuario.findOne({
                where:{
                    id:req.params.idUsuario
                }
            })

            res.json({
                success:true,
                data:{
                    usuario:user
                }    
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