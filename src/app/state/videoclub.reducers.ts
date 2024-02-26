import { Appstate } from "./videoclub.state"
import { ADD_CARRITO, DELETE_CARRITO, DELETE_ITEM_CARRITO, SET_LOGIN, SET_USER } from "./videoclub.actions"

const initialState: Appstate = { logueado: false, usuario: {}, carrito: [] }

export const videoclubReducer = (state = initialState, action: any) => {
    console.warn('reducer contador', state, action, Date.now())

    switch (action.type) {
        case SET_LOGIN:
            return { ...state, logueado: action.payload }

        case SET_USER:
            return { ...state, usuario: action.payload }

        case ADD_CARRITO:
            var carrito = [...state.carrito]
            console.log(carrito)
            console.log(action)
            var index = carrito.findIndex(item => item.pelicula.id == action.payload.id)
            if (index == -1) carrito.push({ dias: 1, pelicula: action.payload })
            return { ...state, carrito: carrito }

        case DELETE_ITEM_CARRITO:
            var carrito = [...state.carrito]
            //console.warn([...carrito], action)
            var index:number = action.payload
            carrito.splice(index,1)
            //console.warn([...carrito], action)

            return { ...state, carrito: carrito }

        case DELETE_CARRITO:
            return { ...state, carrito: [] }

        default:
            return state
    }
}