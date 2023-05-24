import React, { Component } from 'react'
import Mars_selector from './Mars_selector'
import Pic_of_the_day from './Pic_of_the_day'

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      deadlock: true
    }
  }

  handler = () => {
    this.setState({
      deadlock: !this.state.deadlock
    })
  }

  render() {
    if (this.state.deadlock === true) {
      return (
        <div>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <p className="navbar-brand">Hey NASA</p>
                <button type="button" className="btn btn-outline-light" onClick={this.handler}>NASA pic of the day</button>
              </div>
            </nav>
          </div>
          <Mars_selector></Mars_selector>
        </div>
      )
    }
    else if (this.state.deadlock === false) {
      return (
        <div>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <p className="navbar-brand">Hey NASA</p>
                <button type="button" className="btn btn-outline-light" onClick={this.handler}>Mars landrover images</button>
              </div>
            </nav>
          </div>
          <Pic_of_the_day api="7hItL4nRV3Ut5WrrdbfehL41d1GH0uvKpWC4pvqs"></Pic_of_the_day>
        </div>
      )
    }
  }
}
