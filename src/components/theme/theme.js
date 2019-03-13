import React, {Fragment} from 'react'
import AppBar from './appBar'
import Footer from './footer'
import Toolbar from '@material-ui/core/Toolbar'
import './theme.css'
import { Provider } from 'react-redux'
import { storeApp } from './../../lib/state/store'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});

export default (props) => {

    const { children, heroSection, } = props
    
    return (
        <Provider store={storeApp()}>
            <Fragment>
                <MuiThemeProvider theme={theme}>
                    <Toolbar />
                    <AppBar />
                    {heroSection}
                    <div className={'body-theme'}>
                        {children}
                    </div>
                    <Footer />
                </MuiThemeProvider>
            </Fragment>
        </Provider>
    )

}