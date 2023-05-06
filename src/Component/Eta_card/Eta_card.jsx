import React from 'react'
import { useSelector } from 'react-redux';
import "./Eta_card.css"
function Eta_card() {
    const myState = useSelector((state)=>state.changeNumber);
  return (
    <div>
      <div class="card  m-auto card_back mt-3" >
  <div class="card-body body_card">
    <h5 class="card-title tital_of_round">Round No :<span className='text-white'> {myState}</span></h5>
    <h5 class="card-title tital_of_round">ETA Sell Order</h5>
    <div className="ul_linka ">
        <div className="row text-white mt-4 py-2 price_color">
            <div className="col-6"><p className='dollors'>Price</p></div>
            <div className="col-6"><p className='dollors'>Order</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-6"><p className='dollor'>$1.05</p></div>
            <div className="col-6"><p className='dollor'>13,500</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-6"><p className='dollor'>$1.05</p></div>
            <div className="col-6"><p className='dollor'>13,500</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-6"><p className='dollor'>$1.05</p></div>
            <div className="col-6"><p className='dollor'>13,500</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-6"><p className='dollor'>$1.05</p></div>
            <div className="col-6"><p className='dollor'>13,500</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-6"><p className='dollor'>$1.05</p></div>
            <div className="col-6"><p className='dollor'>13,500</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-6"><p className='dollor'>$1.05</p></div>
            <div className="col-6"><p className='dollor'>13,500</p></div>
        </div>
        <div className="row text-white  py-2 price">
            <div className="col-6"><p className='dollor'>$1.05</p></div>
            <div className="col-6"><p className='dollor'>13,500</p></div>
        </div>
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Eta_card
