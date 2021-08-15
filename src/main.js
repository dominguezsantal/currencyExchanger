import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from '.src/exchanger.js';


function getRates(response, conversionAmount, currencyCode, currencyText) {
    if (response["conversion_rates"][currencyCode] === undefined) {
        $(".showErrors").text(`The selected currency code is not available`);
    } else if (response.result === "success") {
        $(".showConversion").text(`${conversionAmount} USD = ${(response["conversion_rates"][currencyCode]*[conversionAmount]).toLocaleString()} ${currencyText}`);
    } else {
        $(".showErrors").text(`There was an error processing your request: ${response["error-type"]}`);
    }
}