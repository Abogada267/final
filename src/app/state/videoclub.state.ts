import { Carrito } from "../interfaces/carrito";

export interface Appstate {
    logueado: boolean,
    usuario: any,
    carrito:Carrito[]
}