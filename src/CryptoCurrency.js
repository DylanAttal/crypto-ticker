import React, { Component } from 'react'

class CryptoCurrency extends Component {
  logo = () => {
    return `https://s2.coinmarketcap.com/static/img/coins/16x16/${
      this.props.id
    }.png`
  }

  classNameBasedOnPrice = () => {
    if (this.props.price > this.props.highPrice) {
      return 'high-price'
    } else {
      return ''
    }
  }

  handleIgnore = event => {
    let currencyIdToIgnore = this.props.id
    this.props.addCurrencyIdToIgnoredCoins(currencyIdToIgnore)
  }

  render() {
    return (
      <tr className={this.classNameBasedOnPrice()}>
        <td>
          <button onClick={this.handleIgnore}>Ignore</button>
          {this.props.name}
        </td>
        <td>{this.props.symbol}</td>
        <td>{this.props.price}</td>
        <td>
          <img src={this.logo()} />
        </td>
      </tr>
    )
  }
}

export default CryptoCurrency
