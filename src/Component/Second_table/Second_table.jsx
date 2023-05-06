import React from 'react'
import "./Second_table.css"
function Second_table(props) {
  return (
    <div className='back2_mains'>
        <div className="container">
        <div class="card  m-auto card_backs mt-3" >
            <p className='text-center title_table m-0'>{props.title}</p>
  <div class="card-body body_card card-table">
    
    <div className="hoverss ">
        <div className="row text-white mt-1 py-2 price_color">
            <div className="col-2"><p className='dollors'>{props.no}</p></div>
            <div className="col-2"><p className='dollors'>{props.TXID}</p></div>
            <div className="col-3"><p className='dollors'> {props.USDT}</p></div>
            <div className="col-2"><p className='dollors'>{props.USDACE}</p></div>
            <div className="col-3"><p className='dollors'>{props.last}</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-2"><p className='dollor'>{props.one}</p></div>
            <div className="col-2"><p className='dollor'>{props.addres}</p></div>
            <div className="col-3"><p className='dollor'>{props.dollor}</p></div>
            <div className="col-2"><p className='dollor'>{props.dollor2}</p></div>
            <div className="col-3"><p className='dollor'>{props.last2}</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-2"><p className='dollor'>{props.one}</p></div>
            <div className="col-2"><p className='dollor'>{props.addres}</p></div>
            <div className="col-3"><p className='dollor'>{props.dollor}</p></div>
            <div className="col-2"><p className='dollor'>{props.dollor2}</p></div>
            <div className="col-3"><p className='dollor'>{props.last2}</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-2"><p className='dollor'>{props.one}</p></div>
            <div className="col-2"><p className='dollor'>{props.addres}</p></div>
            <div className="col-3"><p className='dollor'>{props.dollor}</p></div>
            <div className="col-2"><p className='dollor'>{props.dollor2}</p></div>
            <div className="col-3"><p className='dollor'>{props.last2}</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-2"><p className='dollor'>{props.one}</p></div>
            <div className="col-2"><p className='dollor'>{props.addres}</p></div>
            <div className="col-3"><p className='dollor'>{props.dollor}</p></div>
            <div className="col-2"><p className='dollor'>{props.dollor2}</p></div>
            <div className="col-3"><p className='dollor'>{props.last2}</p></div>
        </div>
       
    
        
    
  </div>
  </div>
  </div>

    </div>
    </div>
  )
}

export default Second_table
