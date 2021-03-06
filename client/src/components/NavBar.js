import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Menu}  from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {
  const { user, handleLogout } = useContext(AuthContext)

  const rightNavItems = () => {
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item 
          name='logout'
          onClick={()=> handleLogout(props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
      <Menu.Menu position='right'>
        <Link to ='/login'>
          <Menu.Item 
            id='login'
            name='login'
            active={props.location.pathname === '/login'}
          />
        </Link>
        <Link to ='/register'>
          <Menu.Item 
            id='register'
            name='register'
            active={props.location.pathname === '/register'}
          />
        </Link>
      </Menu.Menu>
      )
    }
  }
  return (
    <div>
      <Menu pointing secondary>
        <Link to='/'>
          <Menu.Item
            name='home'
            id='home'
            active={props.location.path === '/'}
          />
        </Link>
        <Link to='/demo'>
          <Menu.Item
            name='demo'
            id='demo'
            active={props.location.path === '/demo'}
          />
        </Link>
        <Link to='/bannana'>
          <Menu.Item
            name='yoyo'
            id='someID'
            active={props.location.path === '/bannana'}
          />
        </Link>
        {rightNavItems()}
      </Menu>
    </div>
  )
}

export default withRouter(NavBar)
