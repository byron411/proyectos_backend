import { Schema, model } from "mongoose";
import {Enum_Rol,Enum_Estado_Usuario} from '../enums/enums'


interface User{
    correo:string;
    identificacion:string;
    nombre:string;
    apellido:string;
    rol:Enum_Rol;
    estado:Enum_Estado_Usuario;
}

const userSchema=new Schema<User>({
    correo:{
        type:String,
        required:true
    },
    identificacion:{
        type:String,
        required:true,
        unique:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        required:true,
        enum:Enum_Rol,
    },
    estado:{
        type:String,
        enum:Enum_Estado_Usuario,
        default:Enum_Estado_Usuario.PENDIENTE,
    },
});

const UserModel=model('User',userSchema);
export {UserModel};