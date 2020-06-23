import React from "react";
import axios from "axios";
// create the context
export const AuthContext = React.createContext();
// create the consumer
export const AuthConsumer = AuthContext.Consumer;
// create the provider
export default class AuthProvider extends React.Component {
  state = { user: null };

  handleRegister = (user, history) => {
    console.log('handleRegister called')
    // here I want to do axios call 
    // user email, password, passwordconfirmation, confirm_success-ur'
    axios
    .post('/api/auth', user)
    .then( (res) => {

      this.setState({ user: res.data.data })  
      history.push('/')
      // here I want to go to the home page
    }).catch( (err) => {
        console.log(err)
        alert('Invalid register attempt')
    })

    // then I want to redirct to home page on successful register
  };

  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
    .then( (res) => {
      this.setState({ user: res.data.data})
        history.push('/')
    })
    .catch((e) => {
      alert('Invalid login attempt')
    })
  };

  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
    .then((res) => {
      console.log(res)
      this.setState({ user: null })
      history.push('/login')
    })
    .catch((e) => {
      alert('Invalid logout attempt')
    })
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          authenticated: this.state.user !== null,
          handleLogin: this.handleLogin,
          handleRegister: this.handleRegister,
          handleLogout: this.handleLogout,
          setUser: (user) => this.setState({ user }),
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
