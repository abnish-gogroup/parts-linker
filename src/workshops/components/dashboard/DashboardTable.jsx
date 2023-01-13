import React from 'react';
import $ from 'jquery';
import '../../../stylesheets/dashboardDropdown.scss';
import '../../../stylesheets/dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import DashboardTableCard from './DashboardTableCard';

export default function DashboardTable(props) {
  const { jobId, partName, model, numberPlate, numberOfParts, completion, name, title } = props;

  return ( 
    <>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_10'>{jobId} <FontAwesomeIcon icon={faPaperclip} className='pdl_10' /></div>
              <div className='w_25'>{partName} </div>
              <div className='w_17'>{model}</div>
              <div className='w_14 clr_8692A6'>{numberPlate}</div>
              <div className='w_15 clr_8692A6'>{numberOfParts}</div>
              <div className='w_15'>{completion}</div>
            </div>
          </div>
      </>
  )
}
