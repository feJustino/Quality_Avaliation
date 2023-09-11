
import React from 'react'
import Create from '../../../presentation/pages/create/create'
import { makeRemoteUpdateUser } from '../usecases/remote-update-user-factory'
import { makeUserValidation } from '../validation/user-validation-factory'
import { makeRemoteFindUser } from '../usecases/remote-get-user-factory'

export const makeUpdate: React.FC = () => {
  return (
    <Create
      validation={makeUserValidation()}
      updateUser={makeRemoteUpdateUser()}
      findUser={makeRemoteFindUser()}
    />
  )
}
