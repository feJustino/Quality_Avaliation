  import React from 'react'
  import { BrowserRouter, Route, Switch } from 'react-router-dom'
  import { makeCreate } from '../main/factories/pages/create-factory'
  import { makeHome } from '../main/factories/pages/home-factory'
  import { makeUpdate } from '../main/factories/pages/update-factory'

  const Router: React.FC = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={makeHome} />
            <Route path="/create" exact component={makeCreate} />
            <Route path="/update/:id" exact component={makeUpdate} />
          </Switch>
        </BrowserRouter>
    )
  }

  export default Router
