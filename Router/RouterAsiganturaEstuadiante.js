const express = require('express')
const ControllerAsignaturaEstudiante= require('../Controller/ControllerAsignaturaEstudiante')


const router = express.Router();

router.get('/',ControllerAsignaturaEstudiante.getAsignaturaEstudiante)
router.post('/',ControllerAsignaturaEstudiante.postAsignaturaEstudiante)
router.put('/:id',ControllerAsignaturaEstudiante.postAsignaturaEstudiante)
router.delete('/:id',ControllerAsignaturaEstudiante.deleteAsignaturaEstudiante)


module.exports=router;