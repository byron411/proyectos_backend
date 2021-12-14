import { ProjectModel } from "./proyecto.js";

const resolverProyecto={
    Query:{
        Proyectos: async(parent,args)=>{
            const proyectos=await ProjectModel.find().populate('lider').populate('avances').populate('inscripciones');
            return proyectos;
        },
        buscarProyectosByLider:async(parent,args)=>{
            const buscados=await ProjectModel.find({lider:args.lider});
            return buscados;
        },
        buscarProyectoByCampos:async(parern,args)=>{
            const buscados=await ProjectModel.find({estado:args.estado});
            return buscados;
        },
        buscarProyectoById:async(parent,args)=>{
            const proyecto=await ProjectModel.findById({_id:args._id}).populate('lider');
            return proyecto;
        },
    },
    Mutation:{
        crearProyecto: async(parent, args)=>{
            const elproyecto=await ProjectModel.create({
            nombre:args.nombre,
            presupuesto:args.presupuesto,
            fechaInicio:args.fechaInicio,
            fechaFin:args.fechaFin,
            estado:args.estado,
            fase:args.fase,
            lider:args.lider,
            objetivos:args.objetivos,
        });
        return elproyecto;
    },
    modificarProyecto:async(parent,args)=>{
        const elmodificado=await ProjectModel.findByIdAndUpdate({_id:args._id},{
            nombre:args.nombre,
            presupuesto:args.presupuesto,
            fechaInicio:args.fechaInicio,
            fechaFin:args.fechaFin,
            estado:args.estado,
            fase:args.fase,
            lider:args.lider,
            objetivos:args.objetivos,
        },{new:true}).populate('lider');
        return elmodificado;
    },
    crearObjetivo:async(parente, args)=>{
        const elobjetivo=await ProjectModel.findByIdAndUpdate(args.idProyecto,{
            $addToSet:{
                objetivos:{
                    descripcion:args.descripcion,
                    tipo:args.tipo 
                },
            },
        },{new:true});
        return elobjetivo;
    },
    editarObjetivo: async (parent, args) => {
        const proyectoEditado = await ProjectModel.findByIdAndUpdate(
          args.idProyecto,
          {
            $set: {
              [`objetivos.${args.indexObjetivo}.descripcion`]: args.campos.descripcion,
              [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
            },
          },
          { new: true }
        );
        return proyectoEditado;
      },
    

    eliminarObjetivo: async (parent, args) => {
        const proyectoObjetivo = await ProjectModel.findByIdAndUpdate(
          { _id: args.idProyecto },
          {
            $pull: {
              objetivos: {
                _id: args.idObjetivo,
              },
            },
          },
          { new: true }
        );
        return proyectoObjetivo;
      },

}
}
    
export {resolverProyecto};