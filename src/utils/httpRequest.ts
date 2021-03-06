import Taro from '@tarojs/taro'
import * as GraphQl from '../apis/graphql'
import {getUrlCode} from '@/utils/commonUtils';
let Fly;
if (process.env.TARO_ENV === 'h5') {
  Fly = require('flyio')
} else if (process.env.TARO_ENV === 'weapp'){
  Fly = require('flyio/dist/npm/wx')
}
const httpRequest = typeof Fly === 'function' ? new Fly() : Fly
const tokenRquest =  typeof Fly === 'function' ? new Fly() : Fly

const redirectToLoginH5 = () => {
  location.replace(`${BASE_URL}/auth/sso/authorize?client_id=mobile_web&redirect_uri=${location.href}&response_type=code`);
}
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

const getH5Auth = async (code) => {
  // console.log('before getH5Auth')
  // const res = await tokenRquest.post('/auth/sso/access_token', {
  //   code,
  //   client_id: 'mobile_web',
  //   client_secret: 'ee98123ea98e3fa482a23e41f27ebf9a5f6dc6c2'
  // });
  // console.log('res----------------',res);
  // // const { CreateAuth = {} } = res.data.data
  // // const { access_token, logined } = CreateAuth
  // // Taro.setStorageSync('accessToken', access_token)
  // // Taro.setStorageSync('logined', logined)
  // console.log('after getH5Auth')
}

httpRequest.config.baseURL = `${BASE_URL}`
tokenRquest.config.baseURL = `${BASE_URL}`

httpRequest.interceptors.request.use(async request => {
  if (process.env.TARO_ENV === 'weapp') {
    let accessToken = Taro.getStorageSync('accessToken')
    if(!accessToken) {
      getAuth()
    }
    request.headers["X-AUTH-TOKEN"] = Taro.getStorageSync('accessToken')
  }
  if (process.env.TARO_ENV === 'h5') {
    const code = getUrlCode(); 
    let accessToken = Taro.getStorageSync('accessToken');
    if(!accessToken) {
      getH5Auth(code)
    }
  }
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
          if (process.env.TARO_ENV === 'weapp') {
            Taro.reLaunch({
              url: '/pages/login/login'
            })
          }
          if (process.env.TARO_ENV === 'h5') {
            redirectToLoginH5();
          }
        } else { // 403
          if (process.env.TARO_ENV === 'weapp') {
            getAuth()
            err.request.headers['X-AUTH-TOKEN'] = Taro.getStorageSync('accessToken')
            return await httpRequest.request(err.request)
          }
          if (process.env.TARO_ENV === 'h5') {
            // redirectToLoginH5();
          }
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

