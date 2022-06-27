import {AppThunk} from "./store";
import {formsAPI} from "./api";
import {FormType} from "../components/contacts/ContactForm";

// type
export type InitialStateType = typeof initialState
export type SetFormStatusType = ReturnType<typeof setFormStatusAC>
  | ReturnType<typeof switchAboutMeAC>
  | ReturnType<typeof setInfoSendingAC>
export type FormActionsType = SetFormStatusType
export type InfoSendingType = 'Thank you for your message, I will definitely answer you (:'
  | 'Sending...'
  | 'Something went wrong, please try later' | ''

export enum SendingTypes {
  ok = 'Thank you for your message, I will definitely answer you (:',
  inProgress = 'Sending...',
  error = 'Something went wrong, please try later',
  empty = '',
}

const initialState = {
  isLoading: false,
  isAboutMe: true,
  infoSending: SendingTypes.empty as InfoSendingType,
}

export const formReducer = (state: InitialStateType = initialState, action: FormActionsType): InitialStateType => {
  switch (action.type) {
    case 'app/SET-STATUS':
    case 'app/SWITCH-ABOUT-ME':
    case 'app/SET-INFO-SENDING':
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
export const setInfoSendingAC = (infoSending: InfoSendingType) => {
  return {type: 'app/SET-INFO-SENDING', payload: {infoSending}} as const;
}

// Thunk
export const sendDataTC = (data: FormType): AppThunk => dispatch => {
  dispatch(setFormStatusAC(true));
  dispatch(setInfoSendingAC(SendingTypes.inProgress));
  formsAPI.sendMessage(data)
    .then(res => {
      dispatch(setInfoSendingAC(SendingTypes.ok));
    }).catch((e) => {
    dispatch(setInfoSendingAC(SendingTypes.error));
    const error = e.response
      ? e.response.data.error
      : (e.message + ', more details in the console');
    console.log(error)
  }).finally(() => dispatch(setFormStatusAC(false)));
}


