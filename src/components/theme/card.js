import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import PeopleIcon from '@material-ui/icons/People'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import HotelIcon from '@material-ui/icons/Hotel'

import BlueGray from '@material-ui/core/colors/blueGrey'

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    icons: {
        color: BlueGray[900],
    }
};

const MediaCard = (props) => {
    const {
        classes,
        imageURL,
        title,
        description,
        onReserve,
    } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageURL}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom component="p">
                        {title}
                    </Typography>
                    <Table className={classes.table}>
                        <TableBody>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    padding={'none'}
                                >
                                    <PeopleIcon className={classes.icons} />
                                </TableCell>
                                <TableCell
                                    align="right"
                                    padding={'none'}
                                >
                                    5
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    padding={'none'}
                                >
                                    <CompareArrowsIcon className={classes.icons} />
                                </TableCell>
                                <TableCell
                                    align="right"
                                    padding={'none'}
                                >
                                    con aire
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    padding={'none'}
                                >
                                    <HotelIcon className={classes.icons} />
                                </TableCell>
                                <TableCell
                                    align="right"
                                    padding={'none'}
                                >
                                    matrimonial
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button onClick={onReserve} size="small" color="primary">
                    Reservar
                </Button>
                <Typography style={{
                    
                }}>
                    C$ 150.00
                </Typography>
            </CardActions>
        </Card>
    );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);