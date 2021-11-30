import { InscriptionModel } from "./isncripcion.js"

const resolverInscripciones={
    Query:{
        Inscripciones:async(parent,args)=>{
            const minscripcion=await InscriptionModel.find().populate('proyecto');
            return minscripcion;
        }
    },
    Mutation:{
        crearInscripcion:async(parent,args)=>{
            const minscripcion=await InscriptionModel.create({
                estado:args.estado,
                proyecto:args.proyecto,
                estudiante:args.estudiante
            });
            return minscripcion;
        },
        aprobarInscripcion:async(parent,args)=>{
            const inscripcionaprobada=await InscriptionModel.findByIdAndUpdate({_id:args._id},{
                estado:'ACEPTADO',
                fechaIngreso:Date.now(),
            },{new:true});
            return inscripcionaprobada;
        }
    }
}
export {resolverInscripciones};