import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" id="city"/>
            <input type="text" name="country" id="country"/>
            <button>Get Weather</button>
        </form>
      </div>
    )
  }
}
