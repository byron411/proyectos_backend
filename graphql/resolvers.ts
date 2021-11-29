import { ProjectModel } from "../models/project";
import { UserModel } from "../models/users";

const resolvers={
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
        Proyectos: async(parent,args)=>{
            const proyectos=await ProjectModel.find().populate('lider').populate('objetivos');
            return proyectos;
        }
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
            });
            return modificado;
        },

        crearProyecto: async(parent, args)=>{
            const elproyecto=await ProjectModel.create({
            nombre:args.nombre,
            presupuesto:args.presupuesto,
            fechaInicio:args.fechaInicio,
            fechaFin:args.fechaFin,
            estado:args.estado,
            fase:args.fase,
            lider:args.lider,
            objetivos:args.objetivos,
        });
        return elproyecto;
    },
}
}
    
export {resolvers};