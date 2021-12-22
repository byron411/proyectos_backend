import { UserModel } from "./usuario.js";


const resolverUsuario={
    Query:{
        Usuarios: async(paren,args)=>{
            const usuarios = await UserModel.find().populate('inscripciones').populate('avancesCreados');
            return usuarios;
        },
        buscarUsuario: async(parent,args)=>{
            const buscado= await UserModel.findById({_id:args._id}).populate([
                {
                    path:'inscripciones',
                    populate:{
                        path:'proyecto',
                        populate:[{path:'lider'},{path:'avances'}],
                    },
                },
                {
                    path:'proyectosLiderados',
                    populate:{
                        path:'avances',
                        populate:[{path:'creadoPor'}],
                    }
                },
            ]);
            return buscado;
        },
        bucarByCampos: async(parent,args)=>{
            const buscado= await UserModel.find({
                rol:args.rol,
                
            }); 
            return buscado;
        },
        buscarLider:async(parent,args)=>{
            const lideres=await UserModel.find({rol:'LIDER'});
            return lideres;
        },
        buscarEstudiante:async(parent,args)=>{
            const estudiantes=await UserModel.find({rol:'ESTUDIANTE'});
            return estudiantes;
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
                password:args.password,
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