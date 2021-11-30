import mongoose from 'mongoose';
import { UserModel } from "../usuario/usuario.js";
import {ProjectModel} from "../proyecto/proyecto.js"

const {Schema, model}=mongoose;


const advanceSchema= new Schema({
    fecha:{
        type:Date,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    observaciones:[
        {
            type:String,
        },
    ],
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProjectModel,
        required:true,
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:UserModel,
    }
});

export const AdvanceModel=model('Avance',advanceSchema);