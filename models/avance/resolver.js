import { assertType } from "graphql";
import { AdvanceModel } from "./avance.js"

const resolverAvance={
    Query:{
        Avances:async(parent,args)=>{
            const elavance=await AdvanceModel.find().populate('proyecto').populate('creadoPor');
            return elavance;
        },
        filtrarAvance: async(parent,args)=>{
            const miavance=await AdvanceModel.find({
                proyecto:args.idProyecto}).populate('proyecto').populate('creadoPor');
                return miavance;
        }
    },

    Mutation:{
        crearAvance:async(parent, args)=>{
            const miavance=await AdvanceModel.create({
                fecha:Date.now(),
                descripcion:args.descripcion,
                observaciones:args.observaciones,
                proyecto:args.proyecto,
                creadoPor:args.creadoPor,
            });
            return miavance;
        },
        modificarAvance:async(parent,args)=>{
            const modificado=await AdvanceModel.findByIdAndUpdate({_id:args._id},{
                fecha:args.fecha,
    descripcion:args.descripcion,
    observaciones:args.observaciones
            },{new:true});
            return modificado;
        }
    },
}

export {resolverAvance};