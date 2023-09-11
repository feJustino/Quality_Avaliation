export interface DeleteUser {
  delete: (params: DeleteUser.Params) => Promise<DeleteUser.Model>
}

export namespace DeleteUser {
  export type Params = {id: string}

  export type Model = void
}
