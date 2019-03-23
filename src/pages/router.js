import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './index'
import Login from './login'
import AuthListen from './../containers/auth/auth-listen-container'
import Reserves from './reserves'

import { Provider } from 'react-redux'
import { storeApp } from './../lib/state/store'

const RouterApp = () => (
    <Provider store={storeApp()}>
        <Fragment>
            <AuthListen>
                <Router>
                    <Fragment>
                        <Route path={'/'} exact component={Home} />
                        <Route path={'/login'} exact component={Login} />
                        <Route path={'/reservas'} exact component={Reserves} />
                    </Fragment>
                </Router>
            </AuthListen>
        </Fragment>
    </Provider>
)

export default RouterApp