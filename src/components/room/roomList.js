import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './../theme/card'

const RoomList = (props) => {

    const {
        data,
    } = props

    return (
        <Grid container spacing={16} justify={'center'}>
            {data && data.map((item) => {
                return (
                    <Grid item lg={4} md={6} sm={3}>
                        <Card
                            key={item.uid}
                            imageURL={item.imagenURL}
                            title={item.descripcion}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )

}

export default RoomList