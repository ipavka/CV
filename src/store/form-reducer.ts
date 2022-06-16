import {AppThunk} from "./store";
import {formsAPI} from "./api";

const initialState = {
  isLoading: false,
}
export type InitialStateType = typeof initialState
export const formReducer = (state: InitialStateType = initialState, action: FormActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {...state, isLoading: action.status}
    default:
      return state
  }
}

// actions
export const setFormStatusAC = (status: boolean) => {
  return {type: 'APP/SET-STATUS', status,} as const;
}

// Thunk
export const sendDataTC = (number: string): AppThunk => dispatch => {
  dispatch(setFormStatusAC(true));
  formsAPI.sendMessage()
    .then(res => {
      console.log(res)
  }).catch((e) => {
    const error = e.response
      ? e.response.data.error
      : (e.message + ', more details in the console');
    console.log(error)
  }).finally(() => dispatch(setFormStatusAC(false)));
}

// type
export type SetFormStatusType = ReturnType<typeof setFormStatusAC>
export type FormActionsType = SetFormStatusType

