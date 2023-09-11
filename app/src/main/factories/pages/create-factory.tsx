
import React from 'react'
import Create from '../../../presentation/pages/create/create'
import { makeRemoteAddUser } from '../usecases/remote-add-user-factory'
import { makeUserValidation } from '../validation/user-validation-factory'

export const makeCreate: React.FC = () => {
  return (
    <Create
    validation={makeUserValidation()}
    addUser={makeRemoteAddUser()}
    />
  )
}
