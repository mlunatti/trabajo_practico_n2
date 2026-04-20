const logger = require('morgan')
const express= require('express')


const globalconstants  = require('./const/globalconstants')
const routerConfig = require('./routes/index.routes')

const configuracionApi =(app) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(logger('dev'))
      return;
};
 

const configuracionRouter = (app) => {
  app.use('/api/', routerConfig.rutas_init())
}
const init = () =>{
    const app = express() // crea instancia de express
    configuracionApi(app) //configuracion de la api

    configuracionRouter(app)

    app.listen(globalconstants.PORT)
    console.log('La aplicación se está ejecutando en el puerto: ' + globalconstants.PORT)

}

init();