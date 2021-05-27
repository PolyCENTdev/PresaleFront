import React, { Component, useState, useEffect } from "react";
import { useWallet } from '@binance-chain/bsc-use-wallet'
import ParticlesBg from "particles-bg";
import icon from "./icon.js";
import Countdown from 'react-countdown';
import GetPrices from '../web3.js'



class Header extends Component {

  render() {
    return (
      <header>

        <img className="logo-header" src="/images/PEN_383.png" alt="" />
        <div className="title-logo"><a href="/">PolyEarn</a></div>
        
        </header>
    );
  }
}
export default Header
