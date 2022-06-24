import {AppThunk} from "./store";
import {formsAPI} from "./api";

const initialState = {
  isLoading: false,
  isAboutMe: true,
}
export type InitialStateType = typeof initialState
export const formReducer = (state: InitialStateType = initialState, action: FormActionsType): InitialStateType => {
  switch (action.type) {
    case 'app/SET-STATUS':
    case 'app/SWITCH-ABOUT-ME':
      return {...state, ...action.payload}
    default:
      return state
  }
}

// actions
export const setFormStatusAC = (isLoading: boolean) => {
  return {type: 'app/SET-STATUS', payload: {isLoading}} as const;
}
export const switchAboutMeAC = (isAboutMe: boolean) => {
  return {type: 'app/SWITCH-ABOUT-ME', payload: {isAboutMe}} as const;
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
  | ReturnType<typeof switchAboutMeAC>
export type FormActionsType = SetFormStatusType

