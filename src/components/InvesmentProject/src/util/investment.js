// Corrected function name (typo fix)
export function calculateInvestmentResult({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  // Input validation
  if ([initialInvestment, annualInvestment, expectedReturn, duration].some(isNaN)) {
    throw new Error('All input values must be numbers');
  }

  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInvested = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    totalInvested += annualInvestment;

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInvested: totalInvested, // Track cumulative investments
      totalInterest: investmentValue - totalInvested // New calculated field
    });
  }

  return annualData;
}

// Enhanced formatter with decimal support
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

// Utility function for percentage formatting
export const percentageFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

// New validation helper
export function validateInput(input) {
  return Object.values(input).every(
    value => typeof value === 'number' && 
    value >= 0 && 
    !isNaN(value)
  );
}
