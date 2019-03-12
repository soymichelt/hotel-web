import React from 'react'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const styles = ({
    hero: {
        minHeight: 320,
        background: 'linear-gradient(45deg, #f44336 30%, #ef5350 90%)',
    },
    backgroundImage: {
        position: 'absolute',
        objectFit: 'cover',
        zIndex: 1,
    },
    background1: {
        left: 0,
        right: 0,
        minHeight: 320,
        width: '100%',
    },
    heroInfo: {
        minHeight: 320,
        maxWidth: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        margin: 0,
        fontSize: '24px',
        color: '#fff',
        fontWeight: '100',
        fontFamily: 'Roboto',
    },
    subTitle: {
        margin: 0,
        marginTop: '12px',
        color: '#fff',
        fontWeight: '100',
        fontFamily: 'Roboto',
    },
})

const Hero = (props) => {

    const { classes } = props

    return (
        <section className={classes.hero}>
            <img
                className={
                    classnames(
                        classes.backgroundImage,
                        classes.background1
                    )
                }
                src={
                    process.env.PUBLIC_URL + '/assets/hero.png'
                }
                alt={'Fondo 1'}
            />
            <section className={classes.heroInfo}>
                <h1 className={classes.title}>
                    Una noche placentera con el mejor servicio
                </h1>
                <h3 className={classes.subTitle}>
                    En <b>Hotel Masagua</b> le ofrecemos el mejor servicio
                    de habitaciones. Camas comodas con aire acondicionado y servicio
                    a la habitación.
                </h3>
            </section>
        </section>
    )

}

export default withStyles(styles)(Hero)