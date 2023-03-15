import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">NewsApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/science">science</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/sports">sports</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/business">Business</Link>
                </li>
                
              
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;