import React, { useState } from "react";
import './InputBox.css'

import Form from './Form'

const Answer = () => {
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [loanMonths, setLoanMonths] = useState(0);
    const [interestRateOne, setInterestRate] = useState(0);
    const [totalLoanAmount, setTotalLoanAmount] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [annualPayment, setAnnualPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);




    const calculate = (loanAmount, interestRate, loanTerm) => {


        calculateMonths(loanTerm);
        calcInterestRate(interestRate);
        setTotalLoanAmount(loanAmount);

        // mortgage Calculations
        const interestRatePlusOne = interestRateOne + 1;
        const interestRateCalc = 1 - Math.pow(interestRatePlusOne, - loanMonths);
        const interestRateCalcTwo = interestRateOne / interestRateCalc;
        const final = interestRateCalcTwo * totalLoanAmount;
        //console.log(interestRateCalc);
        //console.log(interestRateCalcTwo);

        // console.log("30");
        //console.log(30);
        //console.log(interestRatePlusOne);
        //console.log(typeof (loanTerm));
        //console.log(typeof loanAmount);


        setMonthlyPayment(`$${Math.ceil(final)}`);
        setTotalPayment(`$${Math.ceil(final * loanMonths)}`);
        setAnnualPayment(`$${Math.ceil(final) * 12}`);
        setTotalInterest(`$${Math.ceil(final * loanMonths) - totalLoanAmount}`);


    };

    const calculateMonths = (loanTerm) => {
        setLoanMonths(loanTerm * 12);
    };

    const calcInterestRate = (interestRate) => {
        setInterestRate(interestRate / 100 / 12)
    };

    //function to display the number output with commas.
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    };




    return (
        <div>
            <Form calculate={calculate} />
            <br></br>
            <br></br>
            <p value={monthlyPayment}> Monthly Payment:   {numberWithCommas(monthlyPayment)} </p>
            <p> Total Payment:   {numberWithCommas(totalPayment)} </p>
            <p> Total Interest:   {numberWithCommas(totalInterest)} </p>
            <p> Annual Payment: {numberWithCommas(annualPayment)} </p>

        </div>

    );

};

export default Answer;