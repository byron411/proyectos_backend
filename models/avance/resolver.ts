import { AdvanceModel } from "./avance"

const resolverAvance={
    Query:{
        Avances:async(parent,args)=>{
            const elavance=await AdvanceModel.find().populate('proyecto').populate('creadoPor');
            return elavance;
        },
        filtrarAvance: async(parent,args)=>{
            const miavance=await AdvanceModel.find({
                proyecto:args.idProyecto}).populate('proyecto');
                return miavance;
        }
    },

    Mutation:{
        crearAvance:async(parent, args)=>{
            const miavance=await AdvanceModel.create({
                fecha:args.fecha,
                descripcion:args.descripcion,
                observaciones:args.observaciones,
                proyecto:args.proyecto,
                creadoPor:args.creadoPor,
            });
            return miavance;
        }
    },
}

export {resolverAvance};