import { Pelicula } from "../interfaces/pelicula"

export const SET_LOGIN:string = 'SET_LOGIN'
export const setLogin = (estado:boolean) => {
    //console.log('action setLogin', estado, Date.now())

    return {
        type: SET_LOGIN,
        payload: estado
    }
}

export const SET_USER:string = 'SET_USER'
export const setUser = (usuario:object|null) => {
    //console.log('action setUser', email, Date.now())

    return {
        type: SET_USER,
        payload: usuario
    }
}

export const ADD_CARRITO:string = 'ADD_CARRITO'
export const addCarrito = (pelicula:Pelicula) => {
    //console.log('action addCarrito', pelicula, Date.now())

    return {
        type: ADD_CARRITO,
        payload: pelicula
    }
}

export const DELETE_CARRITO:string = 'DELETE_CARRITO'
export const deleteCarrito = () => {
    //console.log('action deleteCarrito', Date.now())

    return {
        type: DELETE_CARRITO
    }
}

export const DELETE_ITEM_CARRITO:string = 'DELETE_ITEM_CARRITO'
export const deleteItemCarrito = (index:number) => {
    //console.log('action deleteItemCarrito', id, Date.now())

    return {
        type: DELETE_ITEM_CARRITO,
        payload: index
    }
}
