import React, { useState } from 'react';
import partsResultTableData from '../../constants/partsResultTableData';
import '../../../stylesheets/partsResultTable.scss';
import SearchModal from './SearchModal';
import { useNavigate } from 'react-router-dom';
import PartsResultLoader from '../../../common/PartsResultsLoader';

function PartsResultTable() {
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const handleModal = () => {
    setShowModal(!showModal);
  }

  const closeLoaderIn5Seconds = () =>
    setTimeout(() => {
      setShowLoader(false);
      navigate('/parts-selection');
    }, 5000);

  const goToPartsSelection = () => {
    handleModal();
    setShowLoader(true);
    closeLoaderIn5Seconds();
  }

  return (
    <div className='parts_result_table_cont'>
      <div className='table_text_cont'>
        <div className={showLoader ? 'parts_checker_heading mrb_16' : 'parts_checker_heading'}>PartsChecker Ergebnis</div>
        <button className='search_parts_btn' onClick={handleModal}>Teile suchen</button>
      </div>
      {showModal ?
        <SearchModal
          showModal={showModal}
          handleModal={handleModal}
          goToPartsSelection={goToPartsSelection} /> : ''}
      {showLoader ? <PartsResultLoader /> : <>
        <div className='result_table_head'>
          <div className='w_25'>Fahrzeug Details</div>
          <div className='w_10'>OE-NR.</div>
          <div className='w_20'>Beschreibung</div>
          <div className='w_7'>UVP</div>
          <div className='w_20'>Ergebnis</div>
          <div className='w_20'>Korrekte -TEILE-NR.</div>
        </div>
        <div className='result_table_body'>
          {partsResultTableData.map((tableData) => (
            <div className='result_table_row' key={tableData.UVP}>
              <div className='w_25 fw_600'>{tableData.Vehicle_details}</div>
              <div className='w_10'>{tableData.oe_number}</div>
              <div className='w_20'>{tableData.description}</div>
              <div className='w_7'>{tableData.UVP}</div>
              <div className='w_20 theme_clr'>{tableData.result}</div>
              <div className='w_20'>{tableData.correct_part_no}</div>
            </div>
          ))}
        </div>
      </>
      }
    </div>
  )
}

export default PartsResultTable;
