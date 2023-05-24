import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Hey NASA</a>
            <button type="button" className="btn btn-light">NASA pic of the day</button>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
