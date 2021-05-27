import React, { Component } from "react";

class Buy extends Component {
  render() {

    return (
      <section id="buynow">

        <div className="row">
        <a target="_blank" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xf32cba62514be085839c8ec426b4b13f24936764" className="button btn project-btn">
                <i className="fa fa-book"></i>Buy Now in Pancakeswap
              </a>
              <br />
              <span>Contract: 0xf32cba62514be085839c8ec426b4b13f24936764</span>
        </div>
      </section>
    );
  }
}

export default Buy;
