export class FormatUtils {
    static formatCurrency(amount, currency, currencySymbols) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            currencyDisplay: 'symbol'
        }).format(amount);
    }

    static formatCostWithCurrency(amount, country, currencyData) {
        const currency = currencyData.countryToCurrency[country];
        const symbol = currencyData.currencySymbols[currency];
        return `${symbol}${amount.toLocaleString()}`;
    }

    static convertToUSD(amount, currency, exchangeRates) {
        return amount * exchangeRates[currency];
    }
} 