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
}
type Mutation{
    crearUsuario(
        nombre: String!
        apellido: String!
        identificacion: String!
        correo:String!
        estado:Enum_EstadoUsuario
        rol: Enum_Rol!
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