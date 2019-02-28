import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div> 
        { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
        { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
        { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
        { this.props.description && <p>Conditions: {this.props.description}</p> }
        { this.props.error && <p> {this.props.error} </p> }
        { this.props.code === 600 && 601 && 602 && 611 && 612 && 615 && 616 && 620 && 621 && 622 &&  <p>Change to Snow background</p>}
        { this.props.code === 200 && 201 && 202 && 210 && 210 && 211 && 212 && 221 && 230 && 231 && 232 && <p>Change to Thunderstorm background</p> }
        { this.props.code === 300 && 301 && 302 && 310 && 311 && 312 && 313 && 314 && 321 && 500 && 501 && 502 && 503 && 504 && 511 && 520 && 521 && 531 && <p>Change to Raining background</p> }
        { this.props.code === 800 && <p>Change to Clear Sky background</p> }
        { this.props.code === 801 && 802 && 803 && 804 && <p>Change to Cloudy background</p> }
      </div>
    )
  }
}
