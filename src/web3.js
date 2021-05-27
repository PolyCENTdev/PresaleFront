const Web3 = require('web3');
const axios = require('axios');



class GetPrices {
    /**
    * Llamar a getContracts() tras instanciar la clase para que funcione.
    */
    constructor(token_address, lp_address) {
        this.web3 = new Web3(Web3.givenProvider || "https://bsc-dataseed2.binance.org");
        this.contracts = {}
        this.priceBUSD = 0;
        this.addresses = {
            "token": token_address,
            "lp": lp_address,
            "bnb": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            "busd": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            "bnbbusd": "0x1B96B92314C44b159149f7E0303511fB2Fc4774f",
        }
    }

    async getContracts() {
        let queue = []
        for (const address in this.addresses) {
            queue.push(axios.get(`https://api.bscscan.com/api?module=contract&action=getabi&address=${this.addresses[address]}&apikey=2KZTE52SV2EFBI5B8GW9EWD4D992E8CYDS`))
        }
        const results = await Promise.all(queue)
        for (const res in results) {
            const abi = results[res].data.result
            const name = Object.keys(this.addresses)[res]
            this.contracts[name] = await new this.web3.eth.Contract(JSON.parse(abi), this.addresses[name])
        }
        this.token_decimals = await this.contracts['token'].methods.decimals().call()
    }

    async getPrices() {
        let amounts = await Promise.all([
            await this.contracts['busd'].methods.balanceOf(this.addresses['bnbbusd']).call(),
            await this.contracts['bnb'].methods.balanceOf(this.addresses['bnbbusd']).call(),
            await this.contracts['bnb'].methods.balanceOf(this.addresses['lp']).call(),
            await this.contracts['token'].methods.balanceOf(this.addresses['lp']).call(),
        ])
        let bnbbusd_price = amounts[0] / amounts[1]
        let tokenbnb_price = (amounts[2] / 10 ** 18) / (amounts[3] / 10 ** this.token_decimals)
        let tokenbusd_price = bnbbusd_price * tokenbnb_price
        this.priceBUSD = tokenbusd_price;
        return [tokenbnb_price, tokenbusd_price]
    }

    async getTotalSupply() {
        var result = await this.contracts['token'].methods.totalSupply().call() / 10 ** this.token_decimals
        
        return result;
    }

    async getMarketCap() {
        var totalSupply = await this.contracts['token'].methods.totalSupply().call() / 10 ** this.token_decimals
        var result = totalSupply * this.priceBUSD;
        return result;
    }

    async getBurned() {
        var burned = await this.contracts['token'].methods.totalBurn().call() / 10 ** this.token_decimals
        
        return burned;
    }

}
export default GetPrices