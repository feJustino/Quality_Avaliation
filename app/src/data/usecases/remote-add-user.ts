import { UnexpectedError } from "../../domain/errors/unexpected-error"
import { AddUser } from "../../domain/usecases/add-user"
import { HttpClient, HttpStatusCode } from "../protocols/http/http-client"

export class RemoteAddUser implements AddUser {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddUser.Model>
  ) {}

  async add (params: AddUser.Params): Promise<AddUser.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.created: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteAddUser {
  export type Model = AddUser.Model
}
