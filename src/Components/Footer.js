import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bd-footer mt-5">
            <div className="container text-center">
                <div className="row">                    
                    <div className="col-4 col-lg-4 mb-3 text-left reserved">
                      © 2021. All rights reserved.
                    </div>
                    <div className="col-8 col-lg-8 mb-3 text-right">
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/" target="_blank" rel="noopener noreferrer" title="GitHub"><img src="/images/github.eb93cde4.svg" alt="" />Github</a></li>
                            <li className="mb-2"><a href="/" target="_blank" rel="noopener noreferrer" title="Medium"><img src="/images/medium.012d1912.svg" alt="" />Medium</a></li>
                            <li className="mb-2"><a href="/" target="_blank" rel="noopener noreferrer" title="Twitter"><img src="/images/twitter.94e1a815.svg" alt="" />Twitter</a></li>
                            <li className="mb-2"><a href="https://t.me/polyearn" target="_blank" rel="noopener noreferrer" title="Telegram PolyEarn"><img src="/images/telegram.dfff36b6.svg" alt="" />Telegram</a></li>
                            <li className="mb-2"><a href="https://t.me/polyearnannouncements" target="_blank" rel="noopener noreferrer" title="Telegram PolyEarn"><img src="/images/telegram.dfff36b6.svg" alt="" />Announcements</a></li>
                        </ul> 
                    </div> 
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
