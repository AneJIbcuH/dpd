import axios from 'axios'

export default class PostService {
  // запрос токена
  static async getToken(data) {
    const URL = window.API
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await axios({
        baseURL: `${URL}/api/login`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        method: 'POST',
        data,
      })
      return response.data
      // eslint-disable-next-line no-useless-catch
    } catch (e) {
      throw e
    }
  }

}
