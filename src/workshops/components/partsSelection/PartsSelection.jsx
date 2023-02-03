import React, { useEffect, useState } from 'react';
import '../../../stylesheets/partsSelection.scss';
import $ from 'jquery';
import PartsSelectionCard from './PartsSelectionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import PartsSelectionCardExpand from './PartsSelectionCardExpand';
import { useNavigate } from 'react-router-dom';

function PartsSelection(props) {
  const { expanded } = props;
  const [isAvailableForRahmen, setIsAvailableForRahmen] = useState({ isOEM: false, isOES: false });
  const [isAvailableForBlende, setIsAvailableForBlende] = useState({ isOEM: false, isOES: false });
  const [showDD, setShowDD] = useState(false);
  const [ddSelectContent, setDDSelectContent] = useState('Günstigster Preis');
  const navigate = useNavigate();

  useEffect(() => {
    $(".parts_answer").click(function (e) {
      e.stopPropagation();
    })
    $(document).ready(function (e) {
      $('.accordion-list-parts-selection > li > .parts_answer').hide();
      $('.accordion-list-parts-selection > li').on('click', function (e) {
        e.stopPropagation();
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".parts_answer").slideUp();
          $(this).find('.descript').removeClass('fw_600');
        } else {
          $(".accordion-list-parts-selection > li.active .parts_answer").slideUp();
          $('.accordion-list-parts-selection > li').find('.descript').removeClass("fw_600");  
          $(".accordion-list-parts-selection > li.active").removeClass("active"); 
          $(this).addClass("active").find(".parts_answer").slideDown();           
          $(this).find('.descript').addClass('fw_600');  
        }
        return false;
      });
    });
  }, [])

  const checkingForRhmenAvailable = () => {
    if (isAvailableForRahmen.isOEM || isAvailableForRahmen.isOES) {
      return '';
    }
    else
      return 'verfügbar';
  }

  const checkingForRhmenNotAvailable = () => {
    if (isAvailableForRahmen.isOEM || isAvailableForRahmen.isOES) {
      return '';
    }
    else
      return 'nicht verfügbar';
  }

  const checkingForBlendeAvailable = () => {
    if (isAvailableForBlende.isOEM || isAvailableForBlende.isOES) {
      return '';
    }
    else
      return 'verfügbar';
  }

  const checkingForBlendeNotAvailable = () => {
    if (isAvailableForBlende.isOEM || isAvailableForBlende.isOES) {
      return '';
    }
    else
      return 'nicht verfügbar';
  }

  const textAlignment=(available)=>{
    if(available){
      return 'w_10'
    }
    else {
      return 'w_10 pdl_15'
    }
  }

  const handleHideDD = () => {
    setShowDD(!showDD);
  }

  const handleSetSelectDD=(options)=>{
    setDDSelectContent(options);
    handleHideDD();
  }

  const goToCheckoutPage = () => {
    navigate('/checkout')
  }

  return (
    <div className={expanded ? "main_parts_selection_cont pd_240" : "main_parts_selection_cont pd_140"}>
      <div className="parts_selection_text_cont">
        <div className="parts_selection_text fs_30">Angebotsauswahl</div>
        <button className="parts_order_btn" onClick={goToCheckoutPage}>Bestellen</button>
      </div>
      <div className="parts_selection_desc">
        <div className="parts_selection_desc_text">Frontschaden - Stoßfänger vorne</div>
        <div className='parts_selection_desc_cont'>
          <div className="selected_parts_desc">
            <div className="selected_parts_model">
              <div className='fw_400'>Model:<span className="model_name">Skoda Fabia</span></div>
              <div className='fw_400'>Kunde:<span className="cust_name">A. Gabco</span></div>
              <div className='fw_400'>Nummernschild:<span className="number_plate">F-TC 154</span></div>
            </div>
            <div className="parts_selection_date">
              <div className='fw_400'>Start Datum:<span className="start_date">19.12.2022</span></div>
              <div className='fw_400'>Fertigstellung:<span className="end_date">21.12.2022</span></div>
              <div className='fw_400'>Auftragsnummer:<span className="order_input_value">1234</span></div>
            </div>
          </div>
          <div className='pdb_10'><button className='parts_order_btn'>Teile hinzufügen</button></div>
        </div>
      </div>
      <div className="part_number_details">
        <div className="part_no_head">
          <div className='w_5'></div>
          <div className='w_20'>Beschreibung</div>
          <div className='w_10'>OEM</div>
          <div className='w_10'>OES</div>
          <div className='w_10'>IAM</div>
          <div className='w_20'>Vorgeschlagen Durch: </div>
          <div className='dropdown w_25'>
            <div className='dropbtn cp flx_dd' onClick={handleHideDD}>{ddSelectContent} <FontAwesomeIcon icon={faAngleDown} className='pdl_10' /></div>
            <div className={showDD ? 'dropdown-content' : 'dn'}>
              <div className='ddc cp flx_dd' onClick={()=>handleSetSelectDD('Günstigster Preis')}>
                <div><FontAwesomeIcon icon={faCheck} className={ddSelectContent === 'Günstigster Preis' ? 'pdl_10 vs' : 'pdl_10 vsh'} /></div><div className='pdl_5'>Günstigster Preis</div>
              </div>
              <div className='ddc cp flx_dd' onClick={()=>handleSetSelectDD('Schnellste Lieferung')}>
              <div><FontAwesomeIcon icon={faCheck} className={ddSelectContent === 'Schnellste Lieferung' ? 'pdl_10 vs' : 'pdl_10 vsh'} /></div><div className='pdl_5'>Schnellste Lieferung</div>
              </div>
              <div className='ddc cp flx_dd' onClick={()=>handleSetSelectDD('Günstigster Preis zur gewünschten Lieferung')}>
              <div><FontAwesomeIcon icon={faCheck} className={ ddSelectContent === 'Günstigster Preis zur gewünschten Lieferung' ? 'pdl_10 vs' : 'pdl_10 vsh'} /></div><div className='pdl_5'>Günstigster Preis zur gewünschten Lieferung</div>
              </div>
            </div>
          </div>
        </div>

        <ul className="accordion-list-parts-selection">
          <li>
            <div className='job_row_cont'>
              <div className='job_row_class'>
                <div className='w_5'>
                  <div className="circle" id='angleDown'>
                    <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                  </div>
                </div>
                <div className='w_20'>Stoßstange Vorne</div>
                <div className='w_10'><span className='theme_clr'><FontAwesomeIcon icon={faCheck} /> ausgewählt</span></div>
                <div className='w_10'></div>
                <div className='w_10'></div>
                <div className='w_20'></div>
                <div className='w_25'></div>
              </div>
            </div>
          </li>

          <li>
            <div className='job_row_cont'>
              <div className='job_row_class'>
                <div className='w_5'>
                  <div className="circle" id='angleDown'>
                    <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                  </div>
                </div>
                <div className='w_20'>Emblem</div>
                <div className='w_10'><span className='theme_clr'><FontAwesomeIcon icon={faCheck} /> ausgewählt</span></div>
                <div className='w_10'></div>
                <div className='w_10'></div>
                <div className='w_20'></div>
                <div className='w_25'></div>
              </div>
            </div>
          </li>

          <li>
            <div className='job_row_cont'>
              <div className='job_row_class'>
                <div className='w_5'>
                  <div className="circle" id='angleDown'>
                    <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                  </div>
                </div>
                <div className='w_20'>Gitter Motorhaube</div>
                <div className='w_10'><span className='theme_clr'><FontAwesomeIcon icon={faCheck} /> ausgewählt</span></div>
                <div className='w_10'></div>
                <div className='w_10'></div>
                <div className='w_20'></div>
                <div className='w_25'></div>
              </div>
            </div>
          </li>

          <li>
            <div className='job_row_cont'>
              <div className='job_row_class'>
                <div className='w_5'>
                  <div className="circle" id='angleDown'>
                    <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                  </div>
                </div>
                <div className={'descript w_20'}>Rahmen Gitter Motorhaube</div>
                <div className={textAlignment(isAvailableForRahmen.isOEM)}>{(isAvailableForRahmen.isOEM) ? <span className='theme_clr'><FontAwesomeIcon icon={faCheck} /> ausgewählt</span> : checkingForRhmenAvailable()}</div>
                <div className={textAlignment(isAvailableForRahmen.isOES)}>{(isAvailableForRahmen.isOES) ? <span className='theme_clr'><FontAwesomeIcon icon={faCheck} /> ausgewählt</span> : checkingForRhmenAvailable()}</div>
                <div className={textAlignment(isAvailableForRahmen.isOEM || isAvailableForRahmen.isOES)}>{(isAvailableForRahmen.isOEM || isAvailableForRahmen.isOES) ? '' : checkingForRhmenNotAvailable()}</div>
                <div className='w_20'></div>
                <div className='w_25'></div>
              </div>
            </div>
            <div className="parts_answer">
              <PartsSelectionCard
                setIsAvailableForRahmen={setIsAvailableForRahmen}
              />
            </div>
          </li>

          <li>
            <div className='job_row_cont'>
              <div className='job_row_class'>
                <div className='w_5'>
                  <div className="circle" id='angleDown'>
                    <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                  </div>
                </div>
                <div className={'descript w_20'}>Blende Gitter Motorhaube</div>
                <div className={textAlignment(isAvailableForBlende.isOEM)}>{(isAvailableForBlende.isOEM) ? <span className='theme_clr'><FontAwesomeIcon icon={faCheck} /> ausgewählt</span> : checkingForBlendeAvailable()}</div>
                <div className={textAlignment(isAvailableForBlende.isOES)}>{(isAvailableForBlende.isOES) ? <span className='theme_clr'><FontAwesomeIcon icon={faCheck} /> ausgewählt</span> : checkingForBlendeAvailable()}</div>
                <div className={textAlignment(isAvailableForBlende.isOEM || isAvailableForBlende.isOES)}>{(isAvailableForBlende.isOEM || isAvailableForBlende.isOES) ? '' : checkingForBlendeNotAvailable()}</div>
                <div className='w_20'></div>
                <div className='w_25'></div>
              </div>
            </div>
            <div className="parts_answer">
              <PartsSelectionCardExpand
                setIsAvailableForBlende={setIsAvailableForBlende}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PartsSelection;
