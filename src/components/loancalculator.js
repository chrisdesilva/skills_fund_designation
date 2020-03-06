import React, { useState } from "react"
// import LoanCalcPaymentTable from './loancalcpaymenttable'
import { UnmountClosed as Collapse } from "react-collapse"

const LoanCalculator = () => {
  const defaultLoanAmount = 10000 // defaultLoanAmount, placeholder, and loanAmount/setLoanAmount should all be the same number
  const placeholder = "$10,000"
  const [loanAmount, setLoanAmount] = useState(10000)
  const [loanOptions, showLoanOptions] = useState(false)
  const minLoanAmt = 2000
  const interestRate36 = 8.99
  const interestRate60 = 10.99
  const origFee = 0.04
  const multiPrograms = false // only true if there are multiple programs
  const [multiMetros, showMetros] = useState(false) // true if there are multiple metros that have DIFFERENT max loan amounts for the SAME PROGRAM
  const [interestPayment, setInterestPayment] = useState({
    payment36: null,
    payment60: null,
  })
  const [monthlyPayment, setMonthlyPayment] = useState({
    payment36: null,
    payment60: null,
  })
  const [loanType, setLoanType] = useState("0") // default to 0 for interest-only, 1 for immediate repayment
  const [loanInformation, setLoanInformation] = useState({
    maxLoanAmt: 20300,
    loanTerm36: true, // only true if 36 month option is available
    loanTerm60: false, // only true if 60 month option is available
    k: 6, // (program length in weeks / 4) + 2 -- round program length down to nearest number divisible by 4 (ie. 27 week program rounds down to 24, 24 / 4 + 6 = 12, k = 12)
    "0": {
      // interest-only
      apr36: 11.08,
    },
    "1": null,
  })

  const updateLoanAmount = e => {
    setLoanAmount(Number(e.target.value))
  }

  const calculateMonthlyPayment = () => {
    const monthlyRate36 = interestRate36 / 100 / 12
    const monthlyRate60 = interestRate60 / 100 / 12
    const borrowedAmount = loanAmount || defaultLoanAmount
    const totalLoan = borrowedAmount * (1 + origFee)
    let pv = totalLoan
    let payment36 = Number(
      (monthlyRate36 * pv) / (1 - 1 / Math.pow(1 + monthlyRate36, 36))
    ).toFixed(2)
    let payment60 = Number(
      (monthlyRate60 * pv) / (1 - 1 / Math.pow(1 + monthlyRate60, 60))
    ).toFixed(2)
    setMonthlyPayment({ payment36: payment36, payment60: payment60 })
    setLoanAmount(borrowedAmount)
    calculateInterest()
    showLoanOptions(true)
  }

  const calculateInterest = () => {
    let interest36 = (
      ((loanAmount * (1 + origFee)) / 12) *
      (8.99 / 100)
    ).toFixed(2)
    let interest60 = (
      ((loanAmount * (1 + origFee)) / 12) *
      (10.99 / 100)
    ).toFixed(2)
    setInterestPayment({ payment36: interest36, payment60: interest60 })
  }

  const selectProgram = e => {
    let program = e.target.value
    switch (program) {
      case "Onsite Bootcamp": // use this info for default case at bottom
        setLoanInformation({
          maxLoanAmt: 19495,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        showMetros(true)
        setLoanType("0")
        break
      case "Online Full-Time":
        setLoanInformation({
          maxLoanAmt: 14995,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        showMetros(false)
        setLoanType("0")
        break
      case "Online Part-Time":
        setLoanInformation({
          maxLoanAmt: 9995,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 6,
            apr36: 11.08,
            apr60: 12.48,
          },
          "1": null,
        })
        showMetros(false)
        setLoanType("0")
        break
      default:
        // info below needs to match info from first program
        setLoanInformation({
          maxLoanAmt: 19495,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
    }
  }

  const selectMetro = e => {
    let metro = e.target.value
    switch (metro) {
      case "Arlington, VA": // use this info for default case at bottom
        setLoanInformation({
          maxLoanAmt: 19495,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
      case "Berkeley (East Bay), CA":
        setLoanInformation({
          maxLoanAmt: 19995,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
      case "Chicago, IL":
        setLoanInformation({
          maxLoanAmt: 18995,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 6,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
      case "Dallas, TX": // use this info for default case at bottom
        setLoanInformation({
          maxLoanAmt: 17495,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
      case "Los Angeles, CA":
        setLoanInformation({
          maxLoanAmt: 17995,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
      case "Orange County, CA":
        setLoanInformation({
          maxLoanAmt: 17995,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 6,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
      case "Seattle, WA": // use this info for default case at bottom
        setLoanInformation({
          maxLoanAmt: 19995,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
      case "Silicon Valley, CA":
        setLoanInformation({
          maxLoanAmt: 20995,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
      case "Tulsa, OK":
        setLoanInformation({
          maxLoanAmt: 16495,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 6,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
      default:
        // info below needs to match info from first program
        setLoanInformation({
          maxLoanAmt: 19495,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        })
        setLoanType("0")
        break
    }
  }

  return (
    <div className="flex flex-col justify-center m-2 lg:m-10">
      <div className="shadow-xl rounded h-auto p-8 flex flex-col items-center">
        <h3 className="text-center">Calculate Your Monthly Payments</h3>

        {/* UPDATE LOAN AMOUNTS AND COST OF LIVING BY PROGRAM BELOW */}
        <p className="text-center">
          Choose the loan amount that works best for you. Borrow up to $15,800
          for Designation's UI/UX Design program and up to $4,500 for cost of
          living.
        </p>
        {/* <LoanCalcPaymentTable /> */}

        <div className="flex flex-col justify-center w-full md:w-1/3">
          {/* ADD OR REMOVE PROGRAMS BELOW */}
          {multiPrograms && (
            <>
              <label className="text-xs text-center">Select a Program:</label>
              <select
                className="rounded border-2 border-primary mb-5 bg-white text-primary text-center"
                onChange={selectProgram}
              >
                <option value="Onsite Bootcamp">Onsite Bootcamp</option>
                <option value="Online Full-Time">Online Full-Time</option>
                <option value="Online Part-Time">Online Part-Time</option>
              </select>
            </>
          )}

          {/* ADD OR REMOVE METROS BELOW */}
          <Collapse
            isOpened={multiMetros}
            springConfig={{ stiffness: 150, damping: 30 }}
          >
            <div className="flex flex-col">
              <label className="text-xs text-center">Select a Metro:</label>
              <select
                className="rounded border-2 border-primary mb-5 bg-white text-primary text-center"
                onChange={selectMetro}
              >
                <option value="Arlington, VA">Arlington, VA</option>
                <option value="Berkeley (East Bay), CA">
                  Berkeley (East Bay), CA
                </option>
                <option value="Chicago, IL">Chicago, IL</option>
                <option value="Dallas, TX">Dallas, TX</option>
                <option value="Los Angeles, CA">Los Angeles, CA</option>
                <option value="Orange County, CA">Orange County, CA</option>
                <option value="Seattle, WA">Seattle, WA</option>
                <option value="Silicon Valley, CA">Silicon Valley, CA</option>
                <option value="Tulsa, OK">Tulsa, OK</option>
              </select>
            </div>
          </Collapse>
        </div>

        {/* DROPDOWN MENU FOR LOAN TYPES */}
        {loanInformation["0"] && loanInformation["1"] && (
          <div className="flex flex-col justify-center w-full md:w-1/3">
            <label className="text-xs text-center">Select a Loan Type:</label>
            <select
              className="rounded border-2 border-primary mb-5 bg-white text-primary text-center"
              onChange={e => setLoanType(e.target.value)}
            >
              <option value="0">Interest-Only</option>
              <option value="1">Immediate Repayment</option>
            </select>
          </div>
        )}

        {/* LOAN AMOUNT INPUT */}
        <div className="flex flex-col justify-center items-center w-1/2 md:w-1/3">
          <label className="text-xs text-center">Enter a loan amount:</label>
          <input
            type="number"
            onChange={updateLoanAmount}
            className="rounded border-2 border-primary p-3 mb-5 text-primary text-center text-2xl"
            maxLength="6"
            placeholder={placeholder}
          />
        </div>

        <Collapse
          isOpened={
            minLoanAmt > loanAmount || loanAmount > loanInformation.maxLoanAmt
          }
        >
          <p className="text-red-500 text-xs m-0 pb-4">
            Please enter a number between {minLoanAmt} and{" "}
            {loanInformation.maxLoanAmt}
          </p>
        </Collapse>
        <button
          className="opacityApply uppercase bg-primary p-3 mb-4 lg:ml-4 w-48 rounded-full shadow-lg text-white"
          onClick={calculateMonthlyPayment}
        >
          Calculate payments
        </button>

        <p className="m-0 text-center">
          Students may borrow from ${minLoanAmt} to $
          {loanInformation.maxLoanAmt}
        </p>
        <p className="font-bold text-xs text-center my-2">
          Enroll in Autopay to reduce your interest rate. Learn more{" "}
          <a
            href="https://skills.fund/frequently-asked-questions/#autopay"
            className="text-primary font-bold"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </a>
          .{" "}
          <a
            href="https://skills.fund/autopay-terms-and-conditions"
            className="text-primary font-bold"
            target="_blank"
            rel="noreferrer noopener"
          >
            Terms and conditions
          </a>{" "}
          apply.
        </p>
        {loanType === "0" && (
          <p className="text-xs text-center hidden lg:inline mb-2">
            Make interest-only payments while in the program. Two months after
            completion, begin full payments.
          </p>
        )}
        {loanType === "1" && (
          <p className="text-xs text-center hidden lg:inline mb-2">
            Start making full payments (interest + principal) about one month
            after disbursement.
          </p>
        )}
        <Collapse
          isOpened={loanOptions}
          springConfig={{ stiffness: 150, damping: 40 }}
        >
          <div className="px-4 md:px-12 pt-8 flex flex-col lg:flex-row">
            {/* OPTION 1, 36 MONTHS */}
            {loanInformation.loanTerm36 && (
              <div
                className={
                  loanInformation.loanTerm60
                    ? "flex flex-col mb-8 lg:mb-0 lg:mx-6"
                    : "flex flex-col"
                }
              >
                <h3 className="text-primary text-center font-normal">
                  Option 1
                </h3>
                <h4 className="text-primary text-center font-normal">
                  36-Month Fixed Rate Loan
                </h4>
                <p className="m-0 text-center">
                  {interestRate36}% Interest Rate,{" "}
                  {loanInformation[loanType]["apr36"]}% APR*
                </p>
                {loanType === "0" && (
                  <p className="text-xs text-center lg:hidden mb-2">
                    Make interest-only payments while in the program. Two months
                    after completion, begin full payments.
                  </p>
                )}
                {loanType === "1" && (
                  <p className="text-xs text-center lg:hidden mb-2">
                    Start making full payments (interest + principal) about one
                    month after disbursement.
                  </p>
                )}
                <p className="font-bold text-center my-4">Payments:</p>
                <div className="flex justify-around">
                  {loanType === "0" && (
                    <div className="flex flex-col items-center">
                      <h4 className="border-primary border-b text-center font-normal mx-5 mb-3">
                        Interest-Only Period
                      </h4>
                      {loanAmount >= minLoanAmt &&
                      loanAmount <= loanInformation.maxLoanAmt ? (
                        <p className="text-primary text-2xl mb-0">
                          ${interestPayment.payment36}
                        </p>
                      ) : (
                        <p className="text-primary text-2xl mb-0">--</p>
                      )}
                      <p className="text-xs">per month</p>
                    </div>
                  )}
                  <div className="flex flex-col items-center">
                    <h4 className="border-primary border-b text-center font-normal mx-5 mb-3">
                      Full Payment Period
                    </h4>
                    {loanAmount >= minLoanAmt &&
                    loanAmount <= loanInformation.maxLoanAmt ? (
                      <p className="text-primary text-2xl mb-0">
                        ${monthlyPayment.payment36}
                      </p>
                    ) : (
                      <p className="text-primary text-2xl mb-0">--</p>
                    )}
                    <p className="text-xs">per month</p>
                  </div>
                </div>
              </div>
            )}

            {/* OPTION 2, 60 MONTHS */}
            {loanInformation.loanTerm60 && (
              <div className="flex flex-col lg:mx-6">
                <h3 className="text-primary text-center lg:mt-0 font-normal">
                  {loanInformation.loanTerm36 && loanInformation.loanTerm60
                    ? "Option 2"
                    : "Option 1"}
                </h3>
                <h4 className="text-primary text-center lg:mt-0 font-normal">
                  60-Month Fixed Rate Loan
                </h4>
                <p className="m-0 text-center">
                  {interestRate60}% Interest Rate,{" "}
                  {loanInformation[loanType]["apr60"]}% APR*
                </p>
                <p className="text-xs text-center lg:hidden">
                  Make interest-only payments while in the program. Two months
                  after completion, begin full payments.
                </p>
                <p className="font-bold text-center my-4">Payments:</p>
                <div className="flex justify-around">
                  {loanType === "0" && (
                    <div className="flex flex-col items-center">
                      <h4 className="border-primary border-b text-center font-normal mx-5 mb-3">
                        Interest-Only Period
                      </h4>
                      {loanAmount >= minLoanAmt &&
                      loanAmount <= loanInformation.maxLoanAmt ? (
                        <p className="text-primary text-2xl mb-0">
                          ${interestPayment.payment60}
                        </p>
                      ) : (
                        <p className="text-primary text-2xl mb-0">--</p>
                      )}
                      <p className="text-xs">per month</p>
                    </div>
                  )}
                  <div className="flex flex-col items-center">
                    <h4 className="border-primary border-b text-center font-normal mx-5 mb-3">
                      Full Payment Period
                    </h4>
                    {loanAmount >= minLoanAmt &&
                    loanAmount <= loanInformation.maxLoanAmt ? (
                      <p className="text-primary text-2xl mb-0">
                        ${monthlyPayment.payment60}
                      </p>
                    ) : (
                      <p className="text-primary text-2xl mb-0">--</p>
                    )}
                    <p className="text-xs">per month</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Collapse>
        <Collapse
          isOpened={loanOptions}
          springConfig={{ stiffness: 150, damping: 40 }}
        >
          <p className="text-center text-xs m-0 p-3">
            <i>
              *The Annual Percentage Rate (APR) shown is estimated based on the
              loan type, origination fee, and approximate program length. The
              actual APR may be slightly different than the example provided
              based on loan type and program length. To learn how an Annual
              Percentage Rate (APR) is calculated,{" "}
              <a
                href="https://skills.fund/resources/how-is-an-apr-calculated"
                rel="noreferrer noopener"
              >
                visit our blog.
              </a>
            </i>
          </p>
        </Collapse>
      </div>
    </div>
  )
}

export default LoanCalculator
