import React from 'react';
import '../../../stylesheets/dashboardDropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPaperclip, faBars } from '@fortawesome/free-solid-svg-icons';

function DropdownCard(props) {
  const { jobId, partName, model, numberPlate, noOfParts, completionDate} = props;
  return (
    <div className='row row_class'>
      <div className='col-1'>
        {jobId}
      </div>
      <div className='col-4'>
        {partName}
      </div>
      <div className='col-2'>
        {model}
      </div>
      <div className='col-2'>
        {numberPlate}
      </div>
      <div className='col-1'>
        {noOfParts}
      </div>
      <div className='col-2'>
        {completionDate}
      </div>
    </div>
  )
}

export default DropdownCard;
