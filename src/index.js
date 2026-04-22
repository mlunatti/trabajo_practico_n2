const logger = require('morgan')
const express= require('express')
const cors = require('cors')

const globalconstants  = require('./const/globalconstants')
const routerConfig = require('./routes/index.routes')

const configuracionApi =(app) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(logger('dev'))
    app.use(cors())
      return;
};
 

const configuracionRouter = (app) => {
  app.use('/api/', routerConfig.rutas_init())
};

const configuracionHeaders =(app) =>{
      app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Allow", "GET, POST, PUT, DELETE, OPTIONS")
      next()
      })
      return;
};

const init = () =>{
    const app = express() // crea instancia de express
    configuracionApi(app) //configuracion de la api

    configuracionRouter(app)

    app.listen(globalconstants.PORT)
    console.log('La aplicación se está ejecutando en el puerto: ' + globalconstants.PORT)

}

init();