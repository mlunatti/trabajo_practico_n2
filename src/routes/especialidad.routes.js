//Ruta de Especialidad

const router = require("express").Router()

const especialidadController = require('../controllers/especialidad.controller')

router.get('/', especialidadController.listar)
router.post('/', especialidadController.crear)
router.get('/:idEspecialidad', especialidadController.listarInfo)

module.exports =router