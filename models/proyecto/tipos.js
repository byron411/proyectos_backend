import {gql} from 'apollo-server-express';

const tipoProyecto=gql`

type Objetivo{
    _id:ID!
    descripcion:String!
    tipo:Enum_TipoObjetivo!
}

input crearObjetivo{
    descripcion:String!
    tipo:Enum_TipoObjetivo!
}

input camposObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }


type Proyecto{
    _id:ID!
    nombre:String!
    presupuesto:Float!
    fechaInicio:Date!
    fechaFin:Date!
    estado: Enum_EstadoProyecto!
    fase:Enum_FaseProyecto!
    lider:Usuario!
    objetivos:[Objetivo]
    avances:[Avance]
    inscripciones:[Inscripcion]
}

type Query{
    
    Proyectos:[Proyecto]
    buscarProyectosByLider(lider:String!):[Proyecto]
    buscarProyectoByCampos(
        _id:String
        nombre:String
        presupuesto:Float
        fechaInicio:Date
        fechaFin:Date
        estado: Enum_EstadoProyecto
        fase:Enum_FaseProyecto
        
    ):[Proyecto]
    buscarProyectoById(_id:String!):Proyecto
}

type Mutation{
    
    crearProyecto(
        nombre:String!
        presupuesto:Float!
        fechaInicio:Date!
        fechaFin:Date!
        estado: Enum_EstadoProyecto
        fase:Enum_FaseProyecto
        lider:String!
        objetivos:[crearObjetivo]
        
    ):Proyecto

    modificarProyecto(
        _id:String!
        nombre:String
        presupuesto:Float
        fechaInicio:Date
        fechaFin:Date
        estado: Enum_EstadoProyecto
        fase:Enum_FaseProyecto
        lider:String
    ):Proyecto

    crearObjetivo(
        idProyecto:String!
        descripcion:String!
        tipo:Enum_TipoObjetivo!
    ):Proyecto


    editarObjetivo(
        idProyecto: String!, 
        indexObjetivo: Int!, 
        campos: camposObjetivo!): Proyecto

    eliminarProyecto(idProyecto:String!):Proyecto
    
    eliminarObjetivo(idProyecto: String!, idObjetivo: String!): Proyecto

}
`;

export {tipoProyecto};
