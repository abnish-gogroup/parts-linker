import React from 'react';
import '../../../stylesheets/partsOverviewTab.scss';
import PartsOverviewDescTab from './PartsOverviewDescTab';

function PartsOverviewTabCard1(props) {
  const { offer, date, offerDetailsDataForMotorhauba } = props;

  return (
    <div>
      <div className='job_row_cont bdr_1'>
        <div className='job_row_class'>
          <div className='w_5'></div>
          {/* <div className='w_5'></div> */}
          <div className='w_20 fw_600'>{offer}</div>
          <div className='w_5'></div>
          <div className='w_20'>{date}</div>
          <div className='w_25 pdl_10'></div>
          <div className='w_20'></div>
          <div className='w_17'></div>
          <div className='w_17'></div>
        </div>
      </div>
      <div className="parts_ovr_answer">
        <PartsOverviewDescTab
          descriptionData={offerDetailsDataForMotorhauba}
        />
      </div>
    </div>
  )
}

export default PartsOverviewTabCard1;
