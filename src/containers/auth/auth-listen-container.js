import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {authorized} from './../../lib/state/actions/signInAction'
import firebase from 'firebase/app'
import 'firebase/auth'

class AuthListenContainer extends Component {

    constructor(props) {
        super(props)

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
    
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({

    authorized: (user) => dispatch(authorized(user)),

});

export default connect(null, mapDispatchToProps)(AuthListenContainer);