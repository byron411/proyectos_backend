import { resolverProyecto } from "../models/proyecto/resolver.js";
import { resolverUsuario } from "../models/usuario/resolver.js";
import { resolverAvance } from "../models/avance/resolver.js";
import { resolverInscripciones } from "../models/incripcion/resolver.js";

export const resolvers=[resolverProyecto, resolverUsuario,resolverAvance,resolverInscripciones];