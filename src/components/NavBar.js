import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <>
                <nav className={` navbar  fixed-top navbar-expand-lg ${this.props.mode==="light"?"navbar-dark bg-dark":"navbar-light bg-light"}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">WorldNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Enterainnment</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/weather">Weather</Link>
                                </li>
                            </ul>
                            <div className="form-check form-switch">
                                <input onClick={this.props.setMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar
