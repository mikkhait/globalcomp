'use strict';

export class CalculationUtils {
    static calculateMonthlyRange(range) {
        return {
            min: range.min / 12,
            max: range.max / 12
        };
    }

    static calculatePurchasingPower(amountUSD, costOfLivingIndex) {
        const adjustmentFactor = 100 / costOfLivingIndex;
        return amountUSD * adjustmentFactor;
    }

    static calculateTakeHome(amount, rates) {
        const totalTax = rates.incomeTax + rates.socialSecurity + rates.other;
        const net = amount * (1 - totalTax);

        return {
            gross: amount,
            net: net,
            taxRate: totalTax * 100,
            breakdown: {
                incomeTax: amount * rates.incomeTax,
                socialSecurity: amount * rates.socialSecurity,
                other: amount * rates.other
            }
        };
    }

    static calculateTotalOverhead(salary, rates) {
        const annualFixed = rates.fixedOverhead * 12;
        const variableCosts = salary * (rates.employerTax + rates.workersComp + rates.otherFees);
        
        return {
            fixed: annualFixed,
            variable: variableCosts,
            total: annualFixed + variableCosts,
            breakdown: {
                employerTax: salary * rates.employerTax,
                workersComp: salary * rates.workersComp,
                otherFees: salary * rates.otherFees
            }
        };
    }
} 