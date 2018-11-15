import React, { Component } from 'react'
import CryptoCurrency from './CryptoCurrency'
import currencies from './currencies.json'

class CryptoCurrencies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coins: []
    }
  }

  fetchCoins = () => {
    fetch(`https://api.coinmarketcap.com/v2/ticker/?limit=${this.state.count}`)
      .then(resp => resp.json())
      .then(apiData => {
        this.setState({
          coins: apiData['data']
        })
      })
  }

  componentDidMount = () => {
    this.fetchCoins()

    setInterval(this.fetchCoins, 10 * 1000)
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <th>
              <td>Name</td>
            </th>
            <th>
              <td>Symbol</td>
            </th>
            <th>
              <td>Price</td>
            </th>
            <th>
              <td>Logo</td>
            </th>
          </thead>
          <tbody>
            {Object.values(this.state.coins).map(currency => {
              return (
                <CryptoCurrency
                  key={currency.id}
                  name={currency.name}
                  symbol={currency.symbol}
                  price={currency.quotes.USD.price.toFixed(2)}
                  id={currency.id}
                  highPrice={this.state.highPrice}
                  count={this.state.count}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default CryptoCurrencies
