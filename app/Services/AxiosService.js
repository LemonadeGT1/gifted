

// @ts-ignore
export const sandboxApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 5000
})

// @ts-ignore
export const giphyApi = new axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 5000,
  params: { api_key: 'LUoaIOz6CBpCaFaWBaArmfPbsTqg5BMz' }
})