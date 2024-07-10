import {calculateInvestmentResults} from "../util/investment.js";

export default function Result({input}) {
    const resultsData = calculateInvestmentResults(input);

    console.log(resultsData);

    return <p>Result...</p>
};