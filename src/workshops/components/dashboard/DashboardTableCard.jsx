import React from 'react';
import '../../../stylesheets/dashboardDropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPaperclip, faBars } from '@fortawesome/free-solid-svg-icons';

function DashboardTableCard(props) {
  const { jobId, jobs, model, licencePlateId, completionDate, noOfParts } = props;
  return (
    <div className='row row_class'>
      <div className='w_5'>
      </div>
      <div className='w_7'>
        {jobId}
      </div>
      <div className='w_25'>
        {jobs}
      </div>
      <div className='w_17'>
        {model}
      </div>
      <div className='w_14'>
        {licencePlateId}
      </div>
      <div className='w_15'>
        {noOfParts}
      </div>
      <div className='w_15'>
        {completionDate}
      </div>
    </div>
  )
}

export default DashboardTableCard;
