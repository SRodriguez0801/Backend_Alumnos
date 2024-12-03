const Estudiante= require('../Modelos/Estudiante')


exports.getEstudiante = async (req,resp) =>{

    try {

        
        const estudiantes = await Estudiante.findAll();

        resp.status(200).send(estudiantes)
        
    } catch (error) {
        resp.status(500).send(error)
    }

}


exports.postEstudiante = async (req,resp) =>{

    try {
    
        const result =await Estudiante.create(req.body);
        resp.json(result)
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}

exports.putEstudiante = async (req,resp) =>{
    try {
    
        const result =await Estudiante.findByPk(req.params.idestudiantes);
    
        if(result){
          await result.update(req.body);
          resp.status(200).send("actualizado correctamente")
        }
        else{
          resp.status(402).send("No se encontraron registro")
        }
       
       
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }
}
exports.deleteEstudiante = async (req,resp) =>{

    try {
    
        const result =await Estudiante.findByPk(req.params.idestudiantes);
    
        if(result){
          await result.destroy();
          resp.status(200).send("Elimado correctamente")
        }
        else{
          resp.status(402).send("No se encontraron registro")
        }
       
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}