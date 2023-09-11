import axios, { AxiosResponse } from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from '../../data/protocols/http/http-client'

export class AxiosHttpClient implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error) {
      console.error(error)
      throw new Error()
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
