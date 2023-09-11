
import React from 'react'
import Home from '../../../presentation/pages/home/home'
import { makeRemoteDeleteUser } from '../usecases/remote-delete-user-factory'
import { makeRemoteFindManyUser } from '../usecases/remote-get-many-user-factory'

export const makeHome: React.FC = () => {
  return (
    <Home
    findUser={makeRemoteFindManyUser()}
    deleteUser={makeRemoteDeleteUser()}
    />
  )
}
