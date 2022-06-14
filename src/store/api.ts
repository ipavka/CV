import axios, {AxiosResponse} from "axios";

const formspree = axios.create({
  baseURL: "https://formspree.io/f/",
})
const phone = axios.create({
  baseURL: "http://num.voxlink.ru/",
})


export const formsAPI = {
  sendMessage() {
    return formspree.post(`mvollgzr`, {})
      .then(res => {
        return res.data
      })
  },
  checkedPhoneNumber(number: string) {
    return phone.get('get/', {params: {num: number}})
      .then(res => {
        console.log(res)
        return res.data
      })
  }
}