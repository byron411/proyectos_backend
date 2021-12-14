import {gql} from 'apollo-server-express';

const tiposUsuario=gql`

type Usuario{
    _id:ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo:String!
    estado:Enum_EstadoUsuario
    rol: Enum_Rol!
    inscripciones: [Inscripcion]
    avancesCreados: [Avance]
    proyectosLiderados: [Proyecto]
}

type Query{
    Usuarios:[Usuario]
    buscarUsuario(_id:String!):Usuario
    bucarByCampos(
        nombre: String
    apellido: String
    identificacion: String
    correo:String
    estado:Enum_EstadoUsuario
    rol: Enum_Rol
    ):[Usuario]

    buscarLider:[Usuario]
    buscarEstudiante:[Usuario]
}
type Mutation{
    crearUsuario(
        nombre: String!
        apellido: String!
        identificacion: String!
        correo:String!
        estado:Enum_EstadoUsuario
        rol: Enum_Rol!
        password:String!
    ):Usuario
    eliminarUsuario(_id:String, correo:String):Usuario
    modificarUsuario(
        _id:String!
        nombre: String
        apellido: String
        identificacion: String
        correo:String
        estado:Enum_EstadoUsuario
        rol: Enum_Rol):Usuario
}
`;

export {tiposUsuario};