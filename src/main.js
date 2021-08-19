import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';

function getRates(response, conversionAmount, currencyCode, currencyText) {
    if (typeof response != "string" && response["conversion_rates"][currencyCode] === undefined) {
        $(".showErrors").text(`The selected currency code is not available`);
    } else if (typeof response != "string" && response.result === "success") {
        $(".showConversion").text(`${conversionAmount} USD = ${(response["conversion_rates"][currencyCode]*[conversionAmount]).toLocaleString()} ${currencyText}`);
    } else {
        $(".showErrors").text(`There was an error processing your request: ${response}`);
    }
}
async function makeApiCall(conversionAmount, currencyCode, currencyText) {
    const response = await CurrencyExchange.getConversion();
    getRates(response, conversionAmount, currencyCode, currencyText);
}
function clearFields() {
    $(".showConversion").text("");
    $(".showErrors").text("");
}
$(document).ready(function() {
    $("#conversion").click(function() {
        event.preventDefault();
        let conversionAmount = $("#usd-amount").val();
        const inputCurrency = $("#convertedCurrency").val();
        let currencyCode = inputCurrency.substring(0, 3);
        let currencyText = inputCurrency.substring(6);
        clearFields();
        makeApiCall(conversionAmount, currencyCode, currencyText);
        $("#output").show();
    });
});