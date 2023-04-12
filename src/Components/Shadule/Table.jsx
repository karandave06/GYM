import React from 'react'
import './table.scss'

const Table = () => {
  return (
    <div>
      <table className="table">
        <tbody>

            <tr>
                <td className='day'>Monday</td>
                <td><strong>9:00 AM</strong></td>
                <td>Body Building <br />9:00 to 10:00 Am</td>
            </tr>

            <tr>
                <td className='day'>Tuesday</td>
                <td><strong>9:00 AM</strong></td>
                <td>Body Building <br />9:00 to 10:00 Am</td>
            </tr>

            <tr>
                <td className='day'>Wednesday</td>
                <td><strong>9:00 AM</strong></td>
                <td>Body Building <br />9:00 to 10:00 Am</td>
            </tr>

            <tr>
                <td className='day'>Thuresday</td>
                <td><strong>9:00 AM</strong></td>
                <td>Body Building <br />9:00 to 10:00 Am</td>
            </tr>

            <tr>
                <td className='day'>Friday</td>
                <td><strong>9:00 AM</strong></td>
                <td>Body Building <br />9:00 to 10:00 Am</td>
            </tr>

            <tr>
                <td className='day'>Saturday</td>
                <td><strong>9:00 AM</strong></td>
                <td>Body Building <br />9:00 to 10:00 Am</td>
            </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Table
