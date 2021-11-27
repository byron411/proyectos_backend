enum Enum_Rol{
    ESTUDIANTE='ESTUDIANTE',
    LIDER='LIDER',
    ADMINISTRADOR='ADMINISTRADOR',
}
enum Enum_Estado_Usuario{
    PENDIENTE='PENDIENTE',
    AUTORIZADO='AUTORIZADO',
    NO_AUTORIZADO='NO_AUTORIZADO',   
}

enum Enum_EstadoProyecto{
    activo="Activo",
    inactivo="Inactivo"
}

enum Enum_FaseProyecto{
    iniciado='Iniciado',
    desarrollo='Desarrollo',
    terminado='Terminado',
    nulo=''
}
enum Enum_TipoObjetivo{
    general='General',
    específico='Especifico'
}
export {
    Enum_Rol,
Enum_Estado_Usuario,
Enum_EstadoProyecto,
Enum_FaseProyecto,
Enum_TipoObjetivo
}