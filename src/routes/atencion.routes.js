//Ruta de Tratamiento

const router = require("express").Router()

const atencionController = require('../controllers/atencion.controller')

router.get('/', atencionController.listar)
router.post('/', atencionController.crear)
router.get('/:idAtencion', atencionController.listarInfo)

module.exports =router