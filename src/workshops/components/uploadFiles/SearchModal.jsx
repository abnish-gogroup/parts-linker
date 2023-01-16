import React from 'react';
import '../../../stylesheets/searchModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function SearchModal(props) {
  const { handleModal, goToPartsSelection } = props;
  return (
    <>
      <div className='prompt-add-reference-holder'>
        <div className="prompt-confirmation">
          <button onClick={handleModal} className='close_icon'><FontAwesomeIcon icon={faClose} /></button>
          <div className='modal_text'>Suchkriterien</div>
          <div className='manu_cont'>
          <div className='parts_manuftr'>
            <div className='text_l'>Teilehersteller</div>
            <select className='maufacture_dd'>
              <option value='oem/oes'>OEM / OES / IAM </option>
              <option>OEM </option>
              <option>OEM & OES</option>
              <option>OES & IAM</option>
            </select>
          </div>

          <div className='parts_manuftr'>
            <div className='text_l'>Teilelieferant</div>
            <select disabled className='maufacture_dd'>
              <option value='oem/oes'>OEM / OES / IAM </option>
              <option>OEM </option>
              <option>OEM & OES</option>
              <option>OES & IAM</option>
            </select>
          </div>

          <div className='parts_manuftr'>
            <div className='text_l'>Ergebnis basiert auf</div>
            <select disabled className='maufacture_dd'>
              <option value='oem/oes'>OEM / OES / IAM </option>
              <option value='oem'>OEM </option>
              <option value='oes'>OEM & OES</option>
              <option value='ima'>OES & IAM</option>
            </select>
            </div>
          </div>
          <div className='txt_c mrt_16'>
            <button className='suche' onClick={goToPartsSelection}>Suche</button>
          </div>
          </div>
      </div>
    </>
  )
}

export default SearchModal;
