import {gql} from 'apollo-server-express';
import { tiposEnum } from '../models/enums/tipos';
import { tiposUsuario } from '../models/usuario/tipos';
import { tipoProyecto } from '../models/proyecto/tipos';

const tiposGlobales=gql`

scalar Date

`;

export const tipos= [tiposGlobales, tiposEnum, tiposUsuario, tipoProyecto];
