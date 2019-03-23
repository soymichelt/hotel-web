import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './../theme/card'

const RoomList = (props) => {

    const {
        data,
        onReserve,
    } = props

    return (
        <Grid container spacing={16} justify={'center'} style={{minHeight: '300px',}}>
            {data && data.map((item) => {
                return (
                    <Grid item lg={4} md={6} sm={3} key={item.uid}>
                        <Card
                            key={item.uid}
                            imageURL={item.imagenURL}
                            title={item.descripcion}
                            onClick={() => {
                                onReserve(item.uid, item.descripcion)
                            }}
                            onReserve={()=> {
                                onReserve(item.uid, item.descripcion)
                            }}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )

}

export default RoomList