import { ProjectModel } from "./proyecto";

const resolverProyecto={
    Query:{
        Proyectos: async(parent,args)=>{
            const proyectos=await ProjectModel.find().populate('lider');
            return proyectos;
        }
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
}
}
    
export {resolverProyecto};