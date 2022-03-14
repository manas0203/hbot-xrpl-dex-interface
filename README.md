----

A standalone lightweight webserver which consumes the XRP Ledger API and implements methods to trade on the XRPL-DEX.

The basic features to be implemented would be

* Creating an order book with the prices and quantities from the ‘top of the order book’
* Parameterization of the ticks sizes and max/min order sizes for various tokens / currencies
* Sending Limit Buy and Limit Sell Orders
* Sending Market Buy and Market Sell Orders
* Cancelling single or all orders
* Getting the status of the current working orders
* Getting user balances (including trust lines and open reserves)
* Handle errors and automatic recovery / alerts.


