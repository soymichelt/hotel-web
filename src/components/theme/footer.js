/* Node & ReactJS Modules */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

/* CSS */
import './footer.css';

const styles = theme => ({
    footerSection: {
        backgroundColor: '#263238',
    },
    devContent: {
        float: 'right',
        height: 32,
    },
    devProfilePhoto: {
        width: 32,
        height: 32,
    },
});

export class Footer extends Component {

    render() {

        const { classes } = this.props;

        return (
            <footer className="footer-section">
                <Grid container className={classes.root}>
                    <Grid item xs={10} sm={9} className="blue-grey darken-4">
                        <span className="copyright">
                            &copy; Copyright - <Link to="/" className="red-text">Hotel Masagua</Link> 2019.
                        </span>
                    </Grid>
                    <Grid item xs={2} sm={3}>
                        <a
                            className={classes.devContent}
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                className={classes.devProfilePhoto}
                                src={process.env.PUBLIC_URL + '/assets/author.png'}
                                alt={'Michel Roberto Traña Tablada'}
                            />
                        </a>
                    </Grid>
                </Grid>
            </footer>
        );

    }

}

export default withStyles(styles)(Footer);