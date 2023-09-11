import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { makeCreate } from '../main/factories/pages/create-factory'

const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={makeCreate} />
        </Switch>
      </BrowserRouter>
  )
}

export default Router
