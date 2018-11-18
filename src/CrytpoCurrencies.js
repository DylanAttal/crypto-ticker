import React, { Component } from 'react'
import CryptoCurrency from './CryptoCurrency'
import axios from 'axios'

class CryptoCurrencies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coins: [],
      ignoredCoins: []
    }
  }

  addCurrencyIdToIgnoredCoins = currencyId => {
    let newIgnoredCoins = this.state.ignoredCoins
    newIgnoredCoins.push(currencyId)
    this.setState({
      ignoredCoins: newIgnoredCoins
    })
  }

  fetchCoins = () => {
    axios
      .get(`https://api.coinmarketcap.com/v2/ticker/?limit=${this.props.count}`)
      .then(response => {
        this.setState({
          coins: response.data['data']
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
              if (this.state.ignoredCoins.includes(currency.id)) {
                return null
              }
              return (
                <CryptoCurrency
                  key={currency.id}
                  name={currency.name}
                  symbol={currency.symbol}
                  price={currency.quotes.USD.price.toFixed(2)}
                  id={currency.id}
                  highPrice={this.props.highPrice}
                  addCurrencyIdToIgnoredCoins={this.addCurrencyIdToIgnoredCoins}
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
