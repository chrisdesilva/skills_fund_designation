import React from 'react'

const LoanCalcPaymentTable = () => (
    <div className="flex flex-col items-center">
        {/* WEB TABLE */}
        <table className="hidden lg:inline">
            <tbody>
                <tr>
                    <th className="text-center">Location</th>
                    <th className="text-center">Tuition</th>
                    <th className="text-center">Cost of Living</th>
                    <th className="text-center">Max Total</th>
                </tr>
                <tr>
                    <td className="text-center">Arlington, VA</td>
                    <td className="text-center">$13,495</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$19,495</td>
                </tr>
                <tr>
                    <td className="text-center">Silicon Valley, CA</td>
                    <td className="text-center">$14,995</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$20,995</td>
                </tr>
                <tr>
                    <td className="text-center">Los Angeles, CA & Orange County, CA</td>
                    <td className="text-center">$11,995</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$17,995</td>
                </tr>
                <tr>
                    <td className="text-center">Seattle, WA & Berkeley (East Bay), CA</td>
                    <td className="text-center">$13,995</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$19,995</td>
                </tr>
                <tr>
                    <td className="text-center">Dallas, TX</td>
                    <td className="text-center">$11,495</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$17,495</td>
                </tr>
                <tr>
                    <td className="text-center">Tulsa, OK</td>
                    <td className="text-center">$10,495</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$16,495</td>
                </tr>
                <tr>
                    <td className="text-center">Chicago, IL</td>
                    <td className="text-center">$12,995</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$18,995</td>
                </tr>
            </tbody>
        </table>

        {/* MOBILE TABLE */}
        <table className="lg:hidden">
            <tbody>
                <tr>
                    <th className="text-center bg-primary text-white rounded">Arlington, VA</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $13,495</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $19,495</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded">Silicon Valley, CA</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $14,995</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $20,995</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded flex flex-col w-64"><span>Los Angeles, CA</span><span>Orange County, CA</span></th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $11,995</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $17,995</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded flex flex-col"><span>Seattle, WA</span><span>Berkeley (East Bay), CA</span></th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $13,995</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $19,995</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded">Dallas, TX</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $11,495</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $17,495</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded">Tulsa, OK</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $10,495</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $16,495</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded">Chicago, IL</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $12,995</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $18,995</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default LoanCalcPaymentTable