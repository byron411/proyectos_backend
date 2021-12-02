import {gql} from 'apollo-server-express';
import { tiposEnum } from '../models/enums/tipos.js';
import { tiposUsuario } from '../models/usuario/tipos.js';
import { tipoProyecto } from '../models/proyecto/tipos.js';
import { tipoAvance } from '../models/avance/tipos.js';
import { tiposInscripcion } from '../models/incripcion/tipos.js';
import { tiposAutenticacion } from './auth/tipos.js';

const tiposGlobales=gql`

scalar Date

`;

export const tipos= [tiposGlobales, tiposEnum, tiposUsuario, tipoProyecto, tipoAvance, tiposInscripcion, tiposAutenticacion];
