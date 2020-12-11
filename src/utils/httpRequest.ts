import Taro from '@tarojs/taro'
import * as GraphQl from '../apis/graphql'
let Fly;
if (process.env.TARO_ENV === 'h5') {
  Fly = require('flyio')
} else if (process.env.TARO_ENV === 'weapp'){
  Fly = require('flyio/dist/npm/wx')
}
const httpRequest = typeof Fly === 'function' ? new Fly() : Fly
const tokenRquest =  typeof Fly === 'function' ? new Fly() : Fly

const getAuth = async () => {
  httpRequest.lock();
  const { code } = await Taro.login();
  const res = await tokenRquest.post('/api/executions', {
    query: GraphQl.createAuth,
    variables: { code }
  })
  const { CreateAuth = {} } = res.data.data
  const { access_token, logined } = CreateAuth
  Taro.setStorageSync('accessToken', access_token)
  Taro.setStorageSync('logined', logined)
  httpRequest.unlock()
}

httpRequest.config.baseURL = `${BASE_URL}`
tokenRquest.config.baseURL = `${BASE_URL}`

httpRequest.interceptors.request.use(async request => {
  let accessToken = Taro.getStorageSync('accessToken')
  if(!accessToken) {
    getAuth()
  }
  request.headers["X-AUTH-TOKEN"] = Taro.getStorageSync('accessToken')
  return request
})
httpRequest.interceptors.response.use(
  (response: any) => {
    return response
  },
  async err => {
    const {status} = err
    try {
      if (status === 0) {
        Taro.showToast({ title: "网络问题", icon: 'none' })
      }
      if (status === 401 || status === 403) {
        if(status === 401) {
          Taro.reLaunch({
            url: '/pages/login/login'
          })
        } else {
          getAuth()
          err.request.headers['X-AUTH-TOKEN'] = Taro.getStorageSync('accessToken')
          return await httpRequest.request(err.request)
        }
      } else if(status === 500) {
        throw new Error(err.response.data.errors[0].message)
      } else {
        throw new Error(err.message)
      }
      return err
    } catch (e) {
      throw e
    }
  }
)

const defaultRequest = (query: any) => (variables?: any) => (
  httpRequest.request('/api/executions', {
      query,
      variables,
    },
    {
      method: 'post',
      BASE_URL: `${BASE_URL}`,
      timeout: 10000, //超时设置为10s
    }
  )
)

export {defaultRequest, httpRequest}

