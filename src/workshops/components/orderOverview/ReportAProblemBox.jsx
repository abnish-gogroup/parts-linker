import React from 'react';

function ReportAProblemBox() {

  return (
    <>
      <div className='order_no_cont'>
        <div className='order_no_text fs_30'>
          Bestellung # 1234
        </div>
        <div className='job_item_no fw_400 fs_14'>Frontschaden - Stossfänger vorne<span className='theme_clr'>(ID 1234)</span></div>
      </div>
      <div className='report_a_prob_cont fs_14'>
        <div className='order_from_cont fw_600'>
          <div>Bestellung am</div>
          <div className='fs_12'>19 Dez.</div>
        </div>
        <div className='eta_cont fw_600'>
          <div>Liefertermin</div>
          <div className='fs_12'>21 Dez.</div>
        </div>
        <div className='total_price_cont fw_600'>
          <div>Gesamt Preis</div>
          <div className='fs_12'>€269.94</div>
        </div>
        <div className='delivery_addr_cont'>
          <div className='fw_600'>Lieferadresse:</div>
          <div className='fw_400 fs_12'>Güntzelstrasse 18, 54298 Gilzem</div>
        </div>
        <div className='report_a_prob_text'>
          Melde ein Problem
        </div>
      </div>
    </>
  )
}

export default ReportAProblemBox;
