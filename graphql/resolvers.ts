import { UserModel } from "../models/users";

const resolvers={
    Query:{
        Usuarios:async(parent,args)=>{
            const usuarios= await UserModel.find();
            return usuarios;
        }
    },
    Mutation:{
        crearUsuario:async (parent, args)=>{
            console.log("Estoy ejecutando la mutación de ususario");
        }
    }
    
};
export {resolvers};