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
    background2: {
        top: 64,
        right: 0,
        minHeight: 320,
        height: 320,
    },
    heroInfo: {
        minHeight: 320,
        maxWidth: '350px',
        marginLeft: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        margin: 0,
        fontSize: '24px',
        color: '#fff',
        fontWeight: '500',
        fontFamily: 'Roboto',
    },
    subTitle: {
        margin: 0,
        marginTop: '12px',
        color: '#fff',
        fontWeight: '100',
        fontFamily: 'Roboto',
    },
    socialImage: {
        width: '32px',
        height: '32px',
    },
    social: {
        marginTop: '12px',
        display: 'flex',
        flexDirection: 'row',
        width: `calc(${(32 * 3) + 12}px)`,
        justifyContent: 'space-between',
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
            <img
                className={
                    classnames(
                        classes.backgroundImage,
                        classes.background2
                    )
                }
                src={
                    process.env.PUBLIC_URL + '/assets/hero2.png'
                }
                alt={'Fondo 2'}
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
                <div className={classes.social}>
                    <a
                        href='https://www.facebook.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src={process.env.PUBLIC_URL + '/assets/fb.png'}
                            alt={'Facebook'}
                            className={classes.socialImage}
                        />
                    </a>
                    <a
                        href='https://twitter.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src={process.env.PUBLIC_URL + '/assets/tw.png'}
                            alt={'Twitter'}
                            className={classes.socialImage}
                        />
                    </a>
                    <a
                        href='https://www.youtube.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src={process.env.PUBLIC_URL + '/assets/yt.png'}
                            alt={'Youtube'}
                            className={classes.socialImage}
                        />
                    </a>
                </div>
            </section>
        </section>
    )

}

export default withStyles(styles)(Hero)