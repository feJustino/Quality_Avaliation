import { UnexpectedError } from "../../domain/errors/unexpected-error"
import { UpdateUser } from "../../domain/usecases/update-user"
import { HttpClient, HttpStatusCode } from "../protocols/http/http-client"

export class RemoteUpdateUser implements UpdateUser {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteUpdateUser.Model>
  ) {}

  async update (params: UpdateUser.Params): Promise<UpdateUser.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.id}`,
      method: 'post',
      body: params.user
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteUpdateUser {
  export type Model = UpdateUser.Model
}
