import { UnexpectedError } from "../../domain/errors/unexpected-error"
import { FindManyUser } from "../../domain/usecases/find-many-user"
import { HttpClient, HttpStatusCode } from "../protocols/http/http-client"

export class RemoteFindManyUser implements FindManyUser {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteFindManyUser.Model>
  ) {}

  async findMany (): Promise<FindManyUser.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteFindManyUser {
  export type Model = FindManyUser.Model
}
