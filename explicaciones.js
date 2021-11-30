import conexion from "./db/db.js";
import {UserModel} from "./models/usuario/usuario.js";
import {Enum_Rol,Enum_Estado_Usuario, Enum_TipoObjetivo} from "./models/enums/enums.js";
import { ProjectModel } from "./models/proyecto/proyecto.js";
import { ObjectiveModel } from "./models/objetivo.js";
import { AdvanceModel } from "./models/avance/avance.js";
const main=async()=>{
    await conexion();
    await AdvanceModel.create({
        proyecto:'61942c431d40a7cad9bab2c4',
        fecha: Date.now(),
        descripcion: 'Modificación',
        observaciones:['primera observacion','segunda observacion'],
        creadoPor:'6193f931b30e8fb7d2a9a887'
    });
    /*await ObjectiveModel.create({
        descripcion:'Este es el objetivo especifico',
        tipo:Enum_TipoObjetivo.específico,
    });
    //const proyecto= await ProjectModel.find({_id:'61941dbdca250f77003e0d05'}).populate('lider');
    //console.log(proyecto);
    /*CRUD USUARIO
    await UserModel.create({
        correo:'ddjdj@gmail.com,',
        identificacion:"10868228",
        nombre:'melina3',
        apellido:'Trejo2',
        rol:Enum_Rol.estudiante
    })
    .then((u)=>{
        console.log('agregado',u);
    })
    .catch((e)=>{
        console.log('Error agregando',e)
    });
    /*UserModel.create({
        correo:'djdjd@gmail.com',
        identificacion:"1086",
        nombre:'gael',
        apellido:'Trejo',
        rol:'lider',
    })
    .then(()=>{
        console.log('usuario creado');
    })
    .catch((e)=>{
        console.log('error creando usuario',e);
    });
    UserModel.find()
    .then((u)=>{
        console.log(u);
    })
    .catch((e)=>{
        console.log("Error listando usuarios",e);
    })*/

    /*await ProjectModel.create({
        nombre:'proyecto 5',
        presupuesto:120000,
        fechaInicio:Date.now(),
        fechaFin:new Date("2022/11/10"),
        lider: '619408e1b5580c6ac1a149dc',
        objetivos:['619426fd6e0db79ebcdbbff3','619427609deefb7bf3f5a9e4']
    })*/
    //const usuario=await UserModel.find({_id:'619408e1b5580c6ac1a149dc'});
    //console.log('este usuario',usuario);
}
main();