//Ruta de Tratamiento

const router = require("express").Router()

const diagnosticotoController = require('../controllers/diagnostico.controller')

router.get('/', diagnosticotoController.listar)
router.post('/', diagnosticotoController.crear)
router.get('/:idDiagnostico', diagnosticotoController.listarInfo)

module.exports =router