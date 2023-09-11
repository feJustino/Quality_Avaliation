import { UnexpectedError } from "../../domain/errors/unexpected-error"
import { FindUser } from "../../domain/usecases/find-user"
import { HttpClient, HttpStatusCode } from "../protocols/http/http-client"

export class RemoteFindUser implements FindUser {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteFindUser.Model>
  ) {}

  async find (params: FindUser.Params): Promise<FindUser.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.id}`,
      method: 'get',
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteFindUser {
  export type Model = FindUser.Model
}
