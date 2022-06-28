export const apiConfig = {
  FORM_ENDPOINT: process.env.REACT_APP_FORM_ENDPOINT,
  FORM_ENDPOINT_DEV: process.env.REACT_APP_FORM_ENDPOINT_DEV,
}

export const uId = () => {
  return `id-${(~~(Math.random()*1e8)).toString(16)}`
}
