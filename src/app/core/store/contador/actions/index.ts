import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';



export const ContadorActions = createActionGroup({
  source: 'Contador',
  events: {
    incrementar: emptyProps(),
    decrementar: props<{ cantidad: number }>(),
    
  },
});
