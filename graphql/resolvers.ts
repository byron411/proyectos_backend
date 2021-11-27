import { UserModel } from "../models/users";

const resolvers={
    Query:{
        Usuarios: async(paren,args)=>{
            const usuarios = await UserModel.find();
            return usuarios;
        },
    },
    Mutation:{
        crearUsuario: async(parent,args)=>{
            const user= await UserModel.create({
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                estado:args.estado,
                rol:args.rol,
            });
            return user;
        }
    }
};
    
export {resolvers};