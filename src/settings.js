const settings = {
    api_url: "http://localhost:8000/api/v1/",
    prefixs : ['eur','usd'],
    host:'currency-converter5.p.rapidapi.com',
    key:'ccfc2b9818msh37990253e6a8f70p143620jsnd713ff641e81',
    
}
export const getFormatURL = (to,from,amount) =>{
    return `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&to=${to}&from=${from}&amount=${amount}`
}
export default settings;