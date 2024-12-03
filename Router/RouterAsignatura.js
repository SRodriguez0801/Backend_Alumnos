const express = require('express')
const ControllerAsignatura= require('../Controller/ControllerAsignatura')


const router = express.Router();

router.get('/',ControllerAsignatura.getAsignatura)
router.post('/',ControllerAsignatura.postAsignatura)
router.put('/:idAsignatura',ControllerAsignatura.putAsignatura)
router.delete('/:idAsignatura',ControllerAsignatura.deleteAsignatura)


module.exports=router;