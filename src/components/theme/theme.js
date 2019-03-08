import React, {Fragment} from 'react'
import AppBar from './appBar'
import Toolbar from '@material-ui/core/Toolbar'
import './theme.css'
import { Provider } from 'react-redux'
import { storeApp } from './../../lib/state/store'

export default (props) => {

    const { children } = props
    
    return (
        <Provider store={storeApp()}>
            <Fragment>
                <Toolbar />
                <AppBar />
                <div className={'body-theme'}>
                    {children}
                </div>
            </Fragment>
        </Provider>
    )

}