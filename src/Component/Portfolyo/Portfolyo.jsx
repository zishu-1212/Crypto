import React from 'react'
import SecondTable from '../Second_table/Second_table'
import "./Portfolyo.css"
function Portfolyo() {
  return (
    <div className='back2_main py-4'>
      <div className=""><p className='eta_what'>ETA PORTFOLIO</p></div>
      <div className=" ">
<div className="">
    <div className="row m-0 p-0 justify-content-between">
        <div className="col-md-4 mt-3">
        <div className="Unitsss  text-center ps-4 py-3">
        <p>My ETA Portfolio</p>
    </div>
        </div>
        <div className="col-md-4 mt-3">
        <div className="Unitsss  text-center ps-4 py-3">
        <p>Current Round : <span className='text-white'>03</span> </p>
    </div>
        </div>
    </div>

<div className="row p-0 m-0 justify-content-between mt-4">
    <div className="col-md-4 mt-3">
    <div className="Unitsss  text-center ps-4 py-3">
        <p>Total ETA Purchased : 1100 </p>
    </div>
    </div>
    <div className="col-md-4 mt-3">
    <div className="Unitsss  text-center ps-4 py-3">
        <p>Total USD Spent :   $1701</p>
    </div>
    </div>
    <div className="col-md-4 mt-3">
    <div className="Unitsss  text-center ps-4 py-3">
        <p>Total USD Received : $010.4</p>
    </div>
    </div>

</div>

<SecondTable last="TXID" last2="546145dasdsa" title="Round Number : 01" no="Price" TXID="Units" USDT="Total USD Spend" USDACE="Profit" one="$1.00" addres="100" dollor="$100.00" dollor2="$112.00"/>
<SecondTable last="TXID" last2="546145dasdsa" title="Round Number : 02" no="Price" TXID="Units" USDT="Total USD Spend" USDACE="Profit" one="$1.00" addres="100" dollor="$100.00" dollor2="$112.00"/>
<SecondTable last="TXID" last2="546145dasdsa" title="Round Number : 03" no="Price" TXID="Units" USDT="Total USD Spend" USDACE="Profit" one="$1.00" addres="100" dollor="$100.00" dollor2="$112.00"/>

</div>
      </div>
    </div>
  )
}

export default Portfolyo
