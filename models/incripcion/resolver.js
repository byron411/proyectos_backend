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
            const inscripcionaprobada=await InscriptionModel.findByIdAndUpdate(args.id,{
                estado:'ACEPTADO',
               // fechaIngreso:Date.now(),
            });
            return inscripcionaprobada;
        }
    }
}
export {resolverInscripciones};