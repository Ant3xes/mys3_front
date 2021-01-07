import React, { Component } from 'react'

export default class modal extends Component {
  render() {
    return (
        <div>
          <h1>React Modal</h1>
          <button type="button" onClick={this.props.showModal}>
            open
          </button>
        </div>
    )
  }
}
