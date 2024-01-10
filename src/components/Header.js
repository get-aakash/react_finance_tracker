import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUser } from '../redux/user/UserSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'
import { toast } from 'react-toastify'

const Header = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.user)

  const handleOnLogOut = () => {
    signOut(auth).yhen(() => {
      dispatch(setUser({}))
    }).catch(error => toast.error(error.message))

  }
  return (
    <Navbar expand="md" bg='info'>
      <Container>
        <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {userInfo?.uid && <div>Welcome Back {userInfo?.displayName}</div>}
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!userInfo?.uid ? (
              <>
                <Link to="/" className='nav-link'>
                  SignIn
                </Link>
                <Link to="/register" className='nav-link'>SignUp</Link>
              </>
            ) : (
              <Link to="/" className='nav-link' onClick={handleOnLogOut}>Log Out</Link>
            )}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
