import React from 'react'
import Theme from '../components/theme/theme'
import Grid from '@material-ui/core/Grid'
import RoomList from './../containers/room/roomListContainer'

export default () => (
    <Theme>
        <Grid container justify={'center'}>
            <Grid item xs={12} sm={8}>
                <RoomList />
            </Grid>
        </Grid>
    </Theme>
)