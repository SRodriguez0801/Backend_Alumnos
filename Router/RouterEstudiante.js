const express = require('express')
const ControllerEstudiante= require('../Controller/ControllerEstudiante')


const router = express.Router();

router.get('/',ControllerEstudiante.getAsignatura)
router.post('/',ControllerEstudiante.postAsignatura)
router.put('/:idAsignatura',ControllerEstudiante.putAsignatura)
router.delete('/:idAsignatura',ControllerEstudiante.deleteAsignatura)


module.exports=router;