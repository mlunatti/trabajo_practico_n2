//Encargado de conectar las rutas

const { Router } = require('express')

const usuarioRoutes = require('./usuario.routes')
const pacienteRoutes = require('./paciente.routes')
const medicoRoutes = require('./medico.routes')
const tratamientoRoutes = require('./tratamiento.routes')
const especialidadRoutes = require('./especialidad.routes')
const atencionRoutes = require('./atencion.routes')
const diagnosticoRoutes = require('./diagnostico.routes')


 const rutas_init = () =>{
        const router = Router()

        router.use("/usuario", usuarioRoutes)
        router.use("/paciente", pacienteRoutes)
        router.use("/medico", medicoRoutes)
        router.use("/tratamiento", tratamientoRoutes)
        router.use("/especialidad", especialidadRoutes)
        router.use("/atencion", atencionRoutes)
        router.use("/diagnostico", diagnosticoRoutes)

        return router
 }

 module.exports={ rutas_init}
    