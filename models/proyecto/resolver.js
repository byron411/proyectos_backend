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
        },{new:true});
        return elmodificado;
    }
}
}
    
export {resolverProyecto};