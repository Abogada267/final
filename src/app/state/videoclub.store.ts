import { InjectionToken } from "@angular/core";
import { compose, createStore } from "redux";
import { videoclubReducer } from "./videoclub.reducers";


//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es
const devTools = 
(window as any)['__REDUX_DEVTOOLS_EXTENSION__']?
(window as any)['__REDUX_DEVTOOLS_EXTENSION__']() : (f:any) => f

export function createAppStore() {
    return createStore(
        videoclubReducer,
        compose(
            devTools
        )
    )
}

export const AppStore = new InjectionToken('app.store')

export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
]