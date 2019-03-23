import React from 'react'
import Theme from '../components/theme/theme'
import Grid from '@material-ui/core/Grid'
import ReserveList from './../containers/reserves/reserve-list-container'

export default () => (
    <Theme>
        <Grid container justify={'center'}>
            <Grid item xs={12} sm={8}>
                <ReserveList />
            </Grid>
        </Grid>
    </Theme>
)