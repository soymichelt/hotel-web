import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/DateRange';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
/*
    Actions
*/
import {
  signoutStarted,
  signoutFinalized,
  signoutError,
  authorized,
} from './../../lib/state/actions/signInAction'

import firebase from 'firebase/app';
import 'firebase/auth';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 140,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();

    //salir
    this.props.signoutStarted();
    this.logout();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  isUserAuth = () => {

    return (this.props.userAccount !== undefined);

  };

  logout = () => {

    try {

        firebase.auth().signOut()
        .then(() => {
            console.log('Firebase Auth Logout Success')
        })
        .catch((error) => {

            console.log('Firebase Auth Logout Error Promise Catch:');

            console.log(error);

            this.props.signinError(error);

        });

    }
    catch(error) {

        console.log('Error Try Catch:');

        console.log(error);

    }

  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes, } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Salir</MenuItem>
      </Menu>
    );

    let renderMobileMenu;
    if(this.isUserAuth()) {
      renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem>
            <Link to={'/reservas'} component={'a'}>
              <IconButton style={{color: '#fff'}}>
                <NotificationsIcon />
              </IconButton>
              <p>Reservaciones</p>
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleProfileMenuOpen}>
            <IconButton color="inherit">
              <ExitToAppIcon />
            </IconButton>
            <p>Perfil</p>
          </MenuItem>
        </Menu>
      );
    }
    else {
      renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem>
            <Link to={'/login'} component={'a'}>
              <IconButton style={{color: '#fff'}}>
                <AccountCircle />
              </IconButton>
              <p>Iniciar Sesión</p>
            </Link>
          </MenuItem>
        </Menu>
      );
    }

    let renderMenuDesktop;
    if(this.isUserAuth()) {
      renderMenuDesktop = (
        <div className={classes.sectionDesktop}>
          <Link to={'/reservas'} component={'a'}>
            <IconButton style={{color: '#fff'}}>
              <NotificationsIcon />
            </IconButton>
          </Link>
          <IconButton
            aria-owns={isMenuOpen ? 'material-appbar' : undefined}
            aria-haspopup="true"
            onClick={this.handleProfileMenuOpen}
            color="inherit"
          >
            <ExitToAppIcon />
          </IconButton>
        </div>
      );
    }
    else {
      renderMenuDesktop = (
        <div className={classes.sectionDesktop}>
          <Link to={'/login'} component={'a'}>
            <IconButton
              style={{color: '#fff'}}
            >
              <AccountCircle />
            </IconButton>
          </Link>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Link to='/'>
              <Typography className={classes.title} style={{color: '#fff', textDecoration: 'none',}} variant="h6" color="inherit" noWrap>
                Hotel Masagua
              </Typography>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />

            {renderMenuDesktop}

            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }

  componentDidCatch() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          // User is signed in.
          /*var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;*/
          // ...
          console.log('autorizado')
          this.props.authorized(user);
      } else {
          this.props.authorized(null);
      }
    });
  }

}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (newState, props) => {

  var { signIn } = newState;

  let userAccount = undefined;

  if(signIn) {
      const { current } = signIn;
      userAccount = current;
  }

  console.log('appBar', userAccount)

  return {
      userAccount: userAccount,
  };

};

const mapDispatchToProps = dispatch => ({

  signoutStarted: () => dispatch(signoutStarted()),
  signoutFinalized: () => dispatch(signoutFinalized()),
  signoutError: (error) => dispatch(signoutError(error)),
  authorized: (user) => dispatch(authorized(user)),

});

const AppBarWithStyles = withStyles(styles)(PrimarySearchAppBar);

export default connect(mapStateToProps, mapDispatchToProps)(AppBarWithStyles);