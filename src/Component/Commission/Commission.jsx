import React from 'react'
import Buy_eta from '../Buy_eta/Buy_eta'
import Play_button from '../Play_button/Play_button'
import USDT_Balance from '../USDT_Balance/USDT_Balance'

function Commission() {
  return (
    <div>
      <div className="back2_main pt-5">
      <div className="eta_what">
        <p>Commission</p>
      </div>
      <div className="row justify-content-center m-0 p-0 back2_mains">
    <div className="col-lg-7 col-md-12">
     <Play_button/>
    </div>
    <div className="col-lg-5 col-md-12">
 <USDT_Balance/>
 <USDT_Balance/>
   
    </div>

      </div>
    </div>
    </div>
  )
}

export default Commission
