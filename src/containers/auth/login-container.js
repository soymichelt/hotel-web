import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'

import SigninForm from './../../components/auth/login'

/*
    Actions
*/
import {
    
    signinStarted,
    signinFinalized,
    signinError,

} from './../../lib/state/actions/signInAction'

class SigninContainer extends Component {

    constructor(props) {
        super(props);
        this.signinPage = React.createRef();
        this.state = {
            email: '',
            password: '',
        };
    }

    isUserAuth = () => {

        console.log('isUserAuth()', this.props.userAccount)

        return (this.props.userAccount !== undefined);

    };

    signInWithEmailAndPassword = (email, password) => {

        try {

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Firebase Auth success')
            })
            .catch((error) => {

                console.log('Firebase Auth Error Promise Catch:');

                console.log(error);

                this.props.signinError(error);

            });

        }
        catch(error) {

            console.log('Error Try Catch:');

            console.log(error);

        }

    };

    handleClickSignin = () => {

        this.props.signinStarted();

        const { email, password } = this.state;

        this.signInWithEmailAndPassword(email, password);

    };
  
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    render() {

        const { email, password, } = this.state;

        return (

            <SigninForm
                isUserAuth={this.isUserAuth()}
                onClickAuth={this.handleClickSignin}
                onEmailChange={this.handleEmailChange}
                email={email}
                onPasswordChange={this.handlePasswordChange}
                password={password}
            />

        );
        
    }

}

const mapStateToProps = (newState, props) => {

    var { signIn } = newState;

    let userAccount = undefined;

    if(!signIn) {
        signIn = {
            isLoading: false,
            error: undefined,
        };
    }
    else {
        const { current } = signIn;
        userAccount = current;
    }

    return {
        isLoading: signIn.isLoading ? signIn.isLoading : false,
        error: signIn.error,
        userAccount: userAccount,
        email: '',
        password: '',
    };

};

const mapDispatchToProps = dispatch => ({

    signinStarted: () => dispatch(signinStarted()),
    signinFinalized: () => dispatch(signinFinalized()),
    signinError: (error) => dispatch(signinError(error)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);