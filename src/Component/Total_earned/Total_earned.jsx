import React from 'react'
import Communication from '../Communication/Communication'

function Total_earned() {
  return (
    <div className='back2_main'>
       <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-4 ">
          <div className="Units text-white text-start ps-4 py-3 mt-4">
        <p className=''>Total Commission Earned: $ 3,1000</p>
    </div>
          </div>
        </div>
      </div>
      <Communication no="No" TXID="TXID" USDT="USDT" USDACE="USDACE" one="" addres="546145dasdsa" dollor="$200.00" dollor2="$800.00"/>
      <Communication title="Withdrawal History" no="No" TXID="TXID" USDT="Type" USDACE="Amount" one="" addres="546145dasdsa" dollor="USDT" dollor2="$800.00"/>
    </div>
  )
}

export default Total_earned
