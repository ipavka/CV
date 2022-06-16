import axios from "axios";

const instance = axios.create({
  baseURL: "https://formspree.io/f/",
})


export const formsAPI = {
  sendMessage() {
    return instance.post(`mvollgzr`, {})
      .then(res => {
        return res.data
      })
  },
}