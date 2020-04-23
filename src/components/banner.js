import React from "react"
import Button from "./button"
import {
  applicationsLive,
  headline,
  nextCohortStartDate,
  schoolName,
} from "../constants/programInfo"

const Banner = props => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center relative z-0"
      id="banner"
    >
      {/* update h2 caps words with school-specific content */}
      <h1 className="text-3xl lg:text-4xl font-normal text-center mt-8 text-black px-4">
        This program is no longer active
      </h1>
      {/* <h2 className='text-base lg:text-xl font-light text-center text-black'>Know exactly what you'll pay with Skills Fund</h2> */}
      <h2 className="mb-2 font-normal">
        Need to pay your loan? Have a question about repayment on an existing
        loan?
      </h2>
      <ul className="mb-0 pb-4">
        <li>
          If you applied for your loan before December 26th, 2019, visit{" "}
          <a
            className="font-bold text-primary text-center"
            href="https://www.aspireservicingcenter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Aspire online
          </a>{" "}
          or at 1-800-243-7552.{" "}
        </li>
        <li>
          If you applied for your loan on or after December 26th, 2019, visit{" "}
          <a
            className="font-bold text-primary text-center"
            href="https://prod.launchservicing.com/Borrower/Login.aspx"
            target="_blank"
            rel="noreferrer noopener"
          >
            Launch online
          </a>{" "}
          or at 877-354-2629.{" "}
        </li>
      </ul>
    </div>
  )
}

export default Banner
