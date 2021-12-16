import { InscriptionModel } from "./isncripcion.js"

const resolverInscripciones={
    Query:{
        Inscripciones:async(parent,args)=>{
            const inscripciones=await InscriptionModel.find().populate('proyecto').populate('estudiante');
            return inscripciones;
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
        },
        rechazarInscripcion:async(parent,args)=>{
            const inscripcionrechazada=await InscriptionModel.findByIdAndUpdate({_id:args._id},{
                estado:'RECHAZADO',
                fechaEgreso:Date.now(),
            },{new:true});
            return inscripcionrechazada;
        },
    }
}
export {resolverInscripciones};