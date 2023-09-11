import { User } from "../models/user"

export interface FindUser {
  find: (params: FindUser.Params) => Promise<FindUser.Model>
}

export namespace FindUser {
  export type Params = {id: string}

  export type Model = User | undefined
}
