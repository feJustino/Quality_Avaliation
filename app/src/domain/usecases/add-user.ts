import { UserRequest } from "../models/user"

export interface AddUser {
  add: (params: AddUser.Params) => Promise<AddUser.Model>
}

export namespace AddUser {
  export type Params = UserRequest

  export type Model = void
}
