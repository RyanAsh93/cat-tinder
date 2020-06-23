import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import FetchUser from './components/FetchUserOld';
import ProtectedRoute from './components/ProtectedRoute';
import MyCats from './components/MyCats';


function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/my_cats' component={MyCats} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Container>
      </FetchUser>
    </>
  );
}

export default App;
