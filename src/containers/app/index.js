import NotFound from 'components/not-found'
import PageLayout from './page-layout'
import PrivateRoute from './private-route'
import React from 'react'
import Review from 'containers/review'
import Search from 'containers/search'
import SignIn from 'containers/sign-in'
import SignUp from 'containers/sign-up'
import Topics from 'containers/topics'
import store from 'store'
import {Provider} from 'react-redux'
import {Redirect, Switch} from 'react-router-dom'
import {Route, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <PageLayout>
        <Switch>
          <Redirect from="/" to="review" exact/>
          <Route path="/review" component={Review}/>
          <Route path="/search" component={Search}/>
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/sign-up" component={SignUp}/>
          <PrivateRoute path="/topics" component={Topics}/>
          <Route component={NotFound}/>
        </Switch>
      </PageLayout>
    </Router>
  </Provider>
)

export default App
