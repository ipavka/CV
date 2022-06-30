import axios from "axios";
import {FormType} from "../components/contacts/ContactForm";
import {apiConfig} from "../utils/config";

const {FORM_ENDPOINT_DEV, FORM_ENDPOINT} = apiConfig;

export const formsAPI = {
  sendMessage(data: FormType) {
    return axios.post(`https://formspree.io/f/${FORM_ENDPOINT}`, data)
   // return axios.post(`https://formspree.io/f/${FORM_ENDPOINT_DEV}`, data)
      .then(res => {
        return res.data
      })
  },
}
