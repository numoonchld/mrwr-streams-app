import React, { Component } from "react";
import { connect } from 'react-redux'
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "989542116549-63pd3tkvrrr231uo67i8otcop8jpf9in.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {

    const userID = this.auth.currentUser.get().getId()

    if (isSignedIn) {
      this.props.signIn(userID)
    }
    else {
      this.props.signOut()
    }
  };

  onSignInAttempt = () => {
    this.auth.signIn()
  };
  onSignOutAttempt = () => {
    this.auth.signOut()
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutAttempt}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInAttempt}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
