import mongoose from 'mongoose';
import {Enum_TipoObjetivo} from './enums/enums.js';

const { Schema, model } = mongoose;


const ObjectiveSchema=new Schema({
    descripcion:{
        type:String,
        required:true,
    },
    tipo:{
        type:String,
        enum:['GENERAL', 'ESPECIFICO'],
        required:true,
    },
    /*proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProjectModel,
    }*/
    /*objetivos:[
        {
            type:Schema.Types.ObjectId,
            ref:ObjectiveModel,
        }
    ],*/
});

const ObjectiveModel=model('Objetivo', ObjectiveSchema);
export {ObjectiveModel};