'use strict';

export class CalculationUtils {
    static #toFiniteNumber(value, fallback = 0) {
        const num = typeof value === 'number' ? value : Number(value);
        return Number.isFinite(num) ? num : fallback;
    }

    static #clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    static #sanitizeRate(value, { min = 0, max = 1 } = {}) {
        const num = CalculationUtils.#toFiniteNumber(value, 0);
        return CalculationUtils.#clamp(num, min, max);
    }

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
        const gross = CalculationUtils.#toFiniteNumber(amount, 0);
        const incomeTax = CalculationUtils.#sanitizeRate(rates?.incomeTax);
        const socialSecurity = CalculationUtils.#sanitizeRate(rates?.socialSecurity);
        const other = CalculationUtils.#sanitizeRate(rates?.other);

        // Cap total deductions to keep the UI stable even if inputs are wrong.
        const totalTax = CalculationUtils.#clamp(incomeTax + socialSecurity + other, 0, 0.95);
        const net = gross * (1 - totalTax);

        return {
            gross,
            net: net,
            taxRate: totalTax * 100,
            breakdown: {
                incomeTax: gross * incomeTax,
                socialSecurity: gross * socialSecurity,
                other: gross * other
            }
        };
    }

    static calculateTotalOverhead(salary, rates) {
        const annualSalary = CalculationUtils.#clamp(CalculationUtils.#toFiniteNumber(salary, 0), 0, Number.MAX_SAFE_INTEGER);
        const fixedOverhead = CalculationUtils.#clamp(CalculationUtils.#toFiniteNumber(rates?.fixedOverhead, 0), 0, Number.MAX_SAFE_INTEGER);
        const employerTax = CalculationUtils.#sanitizeRate(rates?.employerTax);
        const workersComp = CalculationUtils.#sanitizeRate(rates?.workersComp);
        const otherFees = CalculationUtils.#sanitizeRate(rates?.otherFees);

        const annualFixed = fixedOverhead * 12;
        const variableCosts = annualSalary * (employerTax + workersComp + otherFees);
        
        return {
            fixed: annualFixed,
            variable: variableCosts,
            total: annualFixed + variableCosts,
            breakdown: {
                employerTax: annualSalary * employerTax,
                workersComp: annualSalary * workersComp,
                otherFees: annualSalary * otherFees
            }
        };
    }
} 