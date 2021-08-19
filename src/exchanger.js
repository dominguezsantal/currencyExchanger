export default class CurrencyExchange {
    static async getConversion() {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        } catch (error) {
            if (error.message.length === 0) {
                return "Something went wrong!";
            } else {
                return error.message;
            }
        }
    }
}