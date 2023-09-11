import { User, UserRequest } from "../models/user"

export interface UpdateUser {
  update: (params: UpdateUser.Params) => Promise<UpdateUser.Model>
}

export namespace UpdateUser {
  export type Params = {id: string, user: UserRequest}

  export type Model = User | undefined
}
