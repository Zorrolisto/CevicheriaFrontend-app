import { Mesa } from '../../mesa/mesa-class/mesa';
import { LineaDeBebida } from './linea-de-bebida-class/linea-de-bebida';
import { LineaDeGuarnicion } from './linea-de-guarnicion-class/linea-de-guarnicion';
import { LineaDePlato } from './linea-de-plato-class/linea-de-plato';

export class Pedido {
   id:number;
   precioTotal:number;
   estado:boolean;
   fecha:Date;
   mesa:Mesa;
   lineaDePlatos:LineaDePlato[]; 
   lineaDeBebidas:LineaDeBebida[];
   lineaDeGuarniciones:LineaDeGuarnicion[];
}
