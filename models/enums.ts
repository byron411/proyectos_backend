enum Enum_Rol{
    estudiante= 'Estudiante',
    lider= 'Lider',
    administrador='Administrador'
}
enum Enum_Estado_Usuario{
    pendiente= 'Pendiente',
    autorizado= 'Autorizado',
    noAutorizado='NoAutorizado'
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