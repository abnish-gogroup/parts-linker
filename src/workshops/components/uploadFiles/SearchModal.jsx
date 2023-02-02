import React from 'react';
import '../../../stylesheets/searchModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function SearchModal(props) {
  const { showModal, handleModal, goToPartsSelection } = props;
  return showModal ? (
    <>
      <div className='prompt-add-reference-holder' 
        onClick={() => {
          handleModal();
        }}>
        <div className="prompt-confirmation" onClick={e => {
          e.stopPropagation();
        }}>
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
                <option value='premium'>Premium</option>
                <option value='original'>Original</option>
              </select>
            </div>

            <div className='parts_manuftr'>
              <div className='text_l'>Ergebnis basiert auf</div>
              <select disabled className='maufacture_dd'>
                <option value='cheapest_price'>Günstigste Preis</option>
                <option value='fastest_delivery'>Schnellste Lieferung</option>
                <option value='best_price'>Günstigste Preis zur Gewünschten Lieferung</option>
                <option value='invidual_specification'>Individuelle Vorgabe</option>
              </select>
            </div>
          </div>
          <div className='txt_c mrt_16'>
            <button className='suche' onClick={goToPartsSelection}>Suche</button>
          </div>
        </div>
      </div>
    </>
  ) : null
}

export default SearchModal;
