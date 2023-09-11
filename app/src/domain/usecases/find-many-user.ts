import { User } from "../models/user"

export interface FindManyUser {
  findMany: () => Promise<FindManyUser.Model>
}

export namespace FindManyUser {
  export type Params = {}

  export type Model = User[] | undefined
}
