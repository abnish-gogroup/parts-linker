import React from 'react';
import '../../../stylesheets/allOrders.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function AllOrdersCard(props) {
  const { orderID, noOfOrders, status, classname, deliveryTime, marginPercent, margin, total, goToComplaintsPage } = props;
  return (
    <div className='parts_row_cont'>
      <div className='parts_row_class pdl_10'>
        <div className='w_3'>
          <div className="circle" id='angleDown'>
            <FontAwesomeIcon icon={faAngleDown} className='angle_down_icon' />
          </div>
        </div>
        <div className='w_13'>{orderID}</div>
        <div className='w_10'>{noOfOrders}</div>
        <div className='w_17'><span className={classname}>{status}</span></div>
        <div className='w_10'>{deliveryTime}</div>
        <div className='w_10'>{marginPercent}</div>
        <div className='w_10'>{margin}</div>
        <div className='w_10'>{total}</div>
        <div className='w_20 dfx'>
          <button className='view_btn'>Ansehen</button>
          <button className='complain_btn' onClick={goToComplaintsPage}>Reklamation</button>
        </div>
      </div>
    </div>
  )
}

export default AllOrdersCard;
