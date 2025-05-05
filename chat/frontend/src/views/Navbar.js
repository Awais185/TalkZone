import { useContext } from 'react';
import jwt_decode from 'jwt-decode';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './style/navbar.css';
import logo from '../Images/logo.jpg'

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");

  let user_id = null;
  if (token) {
    const decoded = jwt_decode(token);
    user_id = decoded.user_id;
  }

  return (
    <header className="header-sticky border-bottom py-2">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="d-flex align-items-center text-decoration-none me-3 mb-2 mb-md-0 gap-2"
          >
            <div className="logo-circle bg-gradient-purple logo gap-2">
              <i className="bi bi-chat-fill text-white"><img src={logo} alt="Description of image" className="img-fluid" /></i>
            </div>
            
            <span className="ms-2 fs-4 fw-bold text-gradient-purple home">Home</span>
          </Link>

          {/* All Menu Items (Visible on all screens) */}
          <nav className="d-flex flex-wrap align-items-center gap-3">
            {token ? (
              <>
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                <Link className="nav-link" to="/todo">Todo</Link>
                <Link className="nav-link" to="/inbox">Inbox</Link>
                <button 
                  className="btn btn-link nav-link p-0" 
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">Login</Link>
                <Link 
                  className="btn btn-gradient rounded-3 shadow-sm" 
                  to="/register"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;