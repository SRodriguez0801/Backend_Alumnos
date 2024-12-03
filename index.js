const express = require('express')
const RouterEstudiante = require('./Modelos/Estudiante');
const RouterAsignatura =  require('./Modelos/Asignatura');
const RouterAsiganturaEstuadiante =  require('./Modelos/AsignaturaEstudiante');



const app= express();

app.use(express.json())

var port = 3000;

app.use('/estudiantes',RouterEstudiante)
app.use('/asignaturas',RouterAsignatura)
app.use('/asignaturaEstudiante',RouterAsiganturaEstuadiante)




app.listen(port,()=>{
    console.log('Ejecutando en puerto', port)
})

