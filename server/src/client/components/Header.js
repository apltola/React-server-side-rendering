import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
    ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <div style={headerContainer}>
      <div style={headerContentLeft}>
        <Link to="/">SSR_DEMO</Link>
      </div>
      <div style={headerContentRight}>
        <div style={headerLink}>
          <Link to="/users">Users</Link>
        </div>
        <div style={headerLink}>
          <Link to="/admins">Admins</Link>
        </div>
        <div style={headerLink}>
          {authButton}
        </div>
      </div>
    </div>
  )
}

const headerContainer = { paddingBottom: '2em' }
const headerContentLeft = { display: 'inline-block' }
const headerContentRight = { display: 'inline-block', marginLeft: '4em' }
const headerLink = { display: 'inline-block', marginRight: '1em' }

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);