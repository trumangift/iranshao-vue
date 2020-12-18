import Api from '../apis'
const callApi = async (apiName: string, args: any = {}) => {
  try {
    const response = await Api[apiName](args)
    const { status, data } = response
    if (status === 200) {
      return data.data
    }
  } catch(e) {
    console.log(e);
  }
}

export default callApi
