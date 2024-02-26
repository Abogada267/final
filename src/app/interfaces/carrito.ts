import { Pelicula } from "./pelicula";

export interface Carrito {
    id?:string,
    dias:number,
    pelicula: Pelicula
}