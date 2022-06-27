import axios from "axios";
import {FormType} from "../components/contacts/ContactForm";

const instance = axios.create({
  baseURL: "https://formspree.io/f/",
})

// ToDo: убрать в .env
export const formsAPI = {
  sendMessage(data: FormType) {
    // return instance.post(`mvollgzr`, data) // main  ToDo: убрать в .env
    return instance.post(`xgedbpqd`, data) // dev  ToDo: убрать в .env
      .then(res => {
        return res.data
      })
  },
}