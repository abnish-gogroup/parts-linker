import React from 'react';
import OrderSummaryBox from './OrderSummaryBox';

function InvoiceDashboardTable(props) {
  const { insuranceData } = props;

  const goToOrderProcessScreen = () => {
    window.history.pushState({}, '', '/insurance-order-process');
    window.location.reload();
  }

  return (
    <>
      <OrderSummaryBox />
      <div className='dashboard_table_head mrgt_30 pdl_10'>
        <div className='w_15'>Bestellnummer</div>
        <div className='w_15'>Fallnummer</div>
        <div className='w_17'>Werkstatt</div>
        <div className='w_25'>Teilehändler</div>
        <div className='w_15'>Status</div>
        <div className='w_17'>Prozess</div>
        <div className='w_15'>Datum</div>
      </div>
      {insuranceData?.map(item => (
        <div className='job_row_cont h_50'>
          <div className='job_row_class pt_5 pdl_10 cp' onClick={goToOrderProcessScreen}>
            <div className='w_15'>{item.orderNo}</div>
            <div className='w_15'>{item.caseNo} </div>
            <div className='w_17'>{item.workshop}</div>
            <div className='w_25'>{item.partDealer}</div>
            <div className='w_15'>{item.currentStatus}</div>
            <div className='w_17'>{item.process}</div>
            <div className='w_15'>{item.date}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default InvoiceDashboardTable;
