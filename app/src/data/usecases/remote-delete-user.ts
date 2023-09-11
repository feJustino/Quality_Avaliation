import { UnexpectedError } from "../../domain/errors/unexpected-error"
import { DeleteUser } from "../../domain/usecases/delete-user"
import { HttpClient, HttpStatusCode } from "../protocols/http/http-client"

export class RemoteDeleteUser implements DeleteUser {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteDeleteUser.Model>
  ) {}

  async delete (params: DeleteUser.Params): Promise<DeleteUser.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.id}`,
      method: 'delete'
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteDeleteUser {
  export type Model = DeleteUser.Model
}
