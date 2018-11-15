import React, { Component } from 'react'
import './App.css'
import CryptoCurrencies from './CrytpoCurrencies'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      highPrice: 100.0,
      count: 10
    }
  }

  updateHighPrice = event => {
    this.setState({
      highPrice: parseFloat(event.target.value)
    })
  }

  updateCount = event => {
    this.setState({
      count: parseInt(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <h1>Crypto Ticker</h1>
        <h2>Highlight Prices over {this.state.highPrice}</h2>
        <h2>Displaying {this.state.count} Currencies (wait a few seconds)</h2>
        <CryptoCurrencies
          highPrice={this.state.highPrice}
          count={this.state.count}
        />

        <input
          type="range"
          min="0"
          max="10000"
          value={this.state.highPrice}
          onChange={this.updateHighPrice}
        />

        <input
          type="range"
          min="5"
          max="50"
          value={this.state.count}
          onChange={this.updateCount}
        />
      </div>
    )
  }
}

export default App
