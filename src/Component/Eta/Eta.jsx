import React from 'react'
import Buy_eta from '../Buy_eta/Buy_eta'
import Eta_card from '../Eta_card/Eta_card'
import "./Eta.css"
function Eta() {
  return (
    <div className=''>
        <div className="back2_main pt-5">
      <div className="eta_what">
        <p>WHAT IS ETA</p>
      </div>
<div className="row m-0 p-0 back2_mains">
    <div className="col-md-6">
        <Eta_card/>
    </div>
    <div className="col-md-6">
   <Buy_eta/>
   <Buy_eta/>
   <button className='btn2 py-3 mt-3'>Withdraw all ETA to Wallet</button>
    </div>
</div>

    </div></div>
  )
}

export default Eta
