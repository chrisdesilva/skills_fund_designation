import React from 'react'
import GeneralTerms from './generalterms'
import InterestOnlyTerms from './interestonlyterms'
import ImmRepaymentTerms from './immrepaymentterms'

// update with school-specific info
const schoolInfo = {
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APRRange36: '11.08 - 11.16%',
    APRRange60: '12.48 - 12.51%',
    interestOnly: [{
        programName: '',
        APR36: '11.16%',
        financeCharge36: '$2,293.64',
        IOPayment36: '$77.91',
        FullMonthlyPayment36: '$330.67',
        APR60: '12.51%',
        financeCharge60: '$4,040.39',
        IOPayment60: '$95.25',
        FullMonthlyPayment60: '$226.07',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
        programLength: '3' // program length in months
    }],
    immediateRepayment: [{ // set values to empty strings if no IR option is available
        programName: 'PATH Program with/without the certification',
        APR36: '12.20%',
        financeCharge36: '$1,991.39',
        FullMonthlyPayment36: '$333.09',
        APR60: '13.19%',
        financeCharge60: '$3,710.86',
        FullMonthlyPayment60: '$228.51',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
    }]
}
const multipleLoanLengths = true // true if both 36 and 60 month options are available
const multipleLoanTypes = false // true if both IR and IO are available

const TermInfo = props => (
    <div className="text-center mx-2 lg:mx-10 p-8 shadow rounded">
       <h2 className="py-4 text-center">More Info On Terms</h2>
        <div>
            <GeneralTerms 
                multipleLoanLengths={multipleLoanLengths}
                multipleLoanTypes={multipleLoanTypes}
                interestRate36={schoolInfo.interestRate36}
                interestRate60={schoolInfo.interestRate60}
                IOAPR36={schoolInfo.interestOnly[0].APR36}
                IOAPR60={schoolInfo.interestOnly[0].APR60}
                IRAPR36={schoolInfo.immediateRepayment[0].APR36}
                IRAPR60={schoolInfo.immediateRepayment[0].APR60}
                APRRange36={schoolInfo.APRRange36}
                APRRange60={schoolInfo.APRRange60}
            />

            {schoolInfo.interestOnly.map(school => {
                return <InterestOnlyTerms
                programName={school.programName} 
                loanExampleAmt={school.LoanExampleAmt}
                APR36={school.APR36}
                APR60={school.APR60}
                finCharge36={school.financeCharge36}
                finCharge60={school.financeCharge60}
                ioPayment36={school.IOPayment36}
                ioPayment60={school.IOPayment60}
                fullPayment36={school.FullMonthlyPayment36}
                fullPayment60={school.FullMonthlyPayment60}
                oFee={school.LoanExampleOFeeAmt}
                loanPlusOFee={school.LoanExampleAmtPlusOFee}
                programLength={school.programLength}
                multipleLoanLengths={multipleLoanLengths}
            />
            })}

            {multipleLoanTypes && schoolInfo.immediateRepayment.map(school => {
                return <ImmRepaymentTerms
                programName={school.programName} 
                loanExampleAmt={school.LoanExampleAmt}
                APR36={school.APR36}
                APR60={school.APR60}
                finCharge36={school.financeCharge36}
                finCharge60={school.financeCharge60}
                fullPayment36={school.FullMonthlyPayment36}
                fullPayment60={school.FullMonthlyPayment60}
                oFee={school.LoanExampleOFeeAmt}
                loanPlusOFee={school.LoanExampleAmtPlusOFee}
                multipleLoanLengths={multipleLoanLengths}
                multipleLoanTypes={multipleLoanTypes}
            />
            })

            }
        </div>
    </div>
)

export default TermInfo