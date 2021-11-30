import { UserModel } from "./usuario.js";


const resolverUsuario={
    Query:{
        Usuarios: async(paren,args)=>{
            const usuarios = await UserModel.find();
            return usuarios;
        },
        buscarUsuario: async(parent,args)=>{
            const buscado= await UserModel.findById({_id:args._id});
            return buscado;
        },
        bucarByCampos: async(parent,args)=>{
            const buscado= await UserModel.find({
                estado:args.estado
                
            }); 
            return buscado;
        },
       
    },
    Mutation:{
        crearUsuario: async(parent,args)=>{
            const user= await UserModel.create({
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
            });
            if(Object.keys(args).includes('estado')){
                user.estado=args.estado;
            }
            return user;
        },
        eliminarUsuario: async(parent,args)=>{
            var eliminado=null;
            if(Object.keys(args).includes('_id')){
            eliminado=await UserModel.findByIdAndDelete({_id:args._id});
            }
            else if (Object.keys(args).includes('correo')){
                eliminado=await UserModel.findOneAndDelete({correo:args.correo});
            }
            return eliminado;
        },
        modificarUsuario: async(parent,args)=>{
            
            const modificado= await UserModel.findByIdAndUpdate({_id:args._id},{
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                estado:args.estado,
                rol:args.rol,
            },{new:true});
            return modificado;
        },
}
}
    
export {resolverUsuario};