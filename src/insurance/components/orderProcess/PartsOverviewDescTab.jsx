import React from 'react';

function PartsOverviewDescTab(props) {
  const { descriptionData } = props;
  return (
    <div>
      {descriptionData?.map((item) => (
        <div className='job_row_cont bb_none mrb_10 bg_fafaff h_55'>
          <div className='job_row_class'>
          <div className='w_5'></div>
            <div className='w_5'>
              <img src='http://static-assets-goparts.s3.amazonaws.com/static-images/right_arrow.png' />
            </div>
            <div className='w_20 h_20'>{item.partNumber}</div>
            <div className='w_20'></div>
            <div className={item.deliveryTime === 'Hinweis: Lieferung zu lang' ? 'clr_red w_25 pdl_10' : 'w_25 pdl_10'}>{item.deliveryTime}</div>
            <div className='w_20 pdl_10'>{item.UVP}</div>
            <div className='w_17 pdl_30'>{item.price}</div>
            <div className='w_17 txt_c'>{item.noOfParts}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PartsOverviewDescTab;
