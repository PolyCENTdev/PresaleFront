import React, { Component } from "react";

class Contract extends Component {
  render() {

    return (
      <section id="principal">
        <div className="row m-5 justify-content-md-center">
          <div className="col col-md-9">
           <div className="text-center"><img className="logo" src="/images/PEN_383.png" alt="" /><a class="titulo">  PolyEarn</a></div>
            <h1 className="text-center">PEN Token Sale</h1>
            <div className="subtitle">PolyEarn Finance is a DeFi portal on the Polygon network that will allow you to earn tokens and save yourself from market crashes</div>
            <div className="ml-7 clock"></div> 
            <div className="left-text">left until the presale ends</div>
            <div className="pbar row">
              <div className="col-2 col-md-1 text-right">
                <span className="spAmount"> 0 </span>
              </div>
              <div class="col-8 col-md-10">
                <div className="progress">
                  <div className="progress-bar bg-gradient" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-2 col-md-1 text-left">
                <span className="spAmount"> 50M </span>
              </div>
              
            </div>
            <div className="info row text-center">
              <div className="col">
                <h6 className="text-info">
                  TOKEN RATIO
</h6>
                <h3 className="display-5 mb-5" id="txtRelationPenMatic"></h3>
              </div>
              <div className="col">
                <h6 className="text-info">
                  AMOUNT LEFT NOW
</h6>
                <h3 id="txtAmountLeft" className="display-5 mb-5"></h3>
              </div>
              <div className="col">
                <h6 className="text-info">
                  POOL SUPPLY
</h6>
                <h3 id="txtPoolSupply" className="display-5 mb-5"></h3>
              </div>
            </div>
            <div className="row m-5 justify-content-md-center">
              <div className="divparentcoin">
                  <img className="img_coin imgmatic" src="images/matic.png" width="45" alt="" />
                  <input className="pp form-control" id="matictxt" type="number" placeholder="Enter Matic Amount" />
              </div>
              <div className="text-center mx-3 my-2">
                <i className="fa fa-arrows-alt-h arrow"></i>
              </div>
              <div className="divparentcoin">
                <img className="img_coin imgpen" src="images/pen.png" width="45" alt="" />
                  <input class="pp form-control"  id="pentxt" type="number" placeholder="Enter PEN Amount" />
              </div>  
						</div>
            <div className="row m-5 justify-content-md-center">
              <a className="btn btnbuy">Buy Now</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contract;
