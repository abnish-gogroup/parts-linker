import React, { useEffect, useState } from 'react';
import '../../../stylesheets/partsSelection.scss';
import $ from 'jquery';
import PartsSelectionCard from './PartsSelectionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import PartsSelectionCardExpand from './PartsSelectionCardExpand';

function PartsSelection(props){
  const { expanded } = props; 
  const [showProfileDD, setShowProfileDD] = useState(false);
 
  useEffect(() => {
    $(".checkedBox").click(function(e){
      e.stopPropagation();
  })
    $(document).ready(function () {
      $('.accordion-list-parts-selection > li > .parts_answer').hide();
      $('.accordion-list-parts-selection > li').on('click', function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".parts_answer").slideUp();
        } else {
          $(".accordion-list-parts-selection > li.active .parts_answer").slideUp();
          $(".accordion-list-parts-selection > li.active").removeClass("active");
          $(this).addClass("active").find(".parts_answer").slideDown();
        }
        return false;
      });
    });
  }, [])

  // const handleChecked=(e)=>{
  //   // e.stopPropagation();
 
  // }

  const handleHideDD=()=>{
    setShowProfileDD(true);
  }

  const goToCheckoutPage =()=>{
    window.history.pushState({}, '', '/checkout');
    window.location.reload();
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
        <div className='fw_400'>Kunde:<span  className="cust_name">A. Gabco</span></div>
        <div className='fw_400'>Nummernschild:<span className="number_plate">F-TC 154</span></div>
      </div>
      <div className="parts_selection_date">
      <div className='fw_400'>Start Datum:<span className="start_date">19.12.2022</span></div>
      <div className='fw_400'>Fertigstellung:<span className="end_date">21.12.2022</span></div>
      <div className='fw_400'>Auftragsnummer:<span className="order_input_value">1234</span></div>
    </div>
    {/* <img src="http://static-assets-goparts.s3.amazonaws.com/static-images/Parts%20Selection/add-a-photo.png" className="placeholder_img" /> */}
    </div>
    <div className='pdb_10'><button className='parts_order_btn'>Teile hinzufügen</button></div>
    </div>
  </div>
  <div className="part_number_details">
    <div className="part_no_head">
      <div className='w_5'></div>
      <div className='w_20'>Teilenummer</div>
      <div className='w_20'>Beschreibung</div>
      <div className='w_17'>Hersteller</div>
      <div className='w_20'>Vorgeschlagen Durch: </div>
      <div className='dropdown w_17'>
          <div className='dropbtn cp' onClick={handleHideDD}>Günstigster Preis <FontAwesomeIcon icon={faAngleDown} /></div>
          <div className={showProfileDD ? 'dropdown-content' : 'dn'} >
              <div className='ddc cp'>
              <FontAwesomeIcon icon={faCheck} className='pdl_10' /><span className='pdl_5'> Günstigster Preis</span>
              </div>
              <div className='ddc cp pdl_35'>
              Schnellste Lieferung
              </div>
              <div className='ddc cp pdl_35'>
              Günstigster Preis zur gewünschten Lieferung
              </div>
              <div className='ddc cp pdl_35'>HUK Vorgabe</div>
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
              <div className='w_20'><div className='oe_align_cont'><div>6Y0807221E</div><input type="checkbox" name='oe_1' value='6Y0807221E' className='checkedBox pdr_35' defaultChecked /></div></div>
              <div className='w_20'>Stoßstange Vorne</div>
              <div className='w_17 pdl_10'>Skoda</div>
              <div className='w_20'></div>
              <div className='w_17'></div>
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
              <div className='w_20'><div className='oe_align_cont'><div>6Y0853661 739</div><input type="checkbox" className='checkedBox pdr_35' defaultChecked /></div></div>
              <div className='w_20'>Blende Gitter Motorhaube</div>
              <div className='w_17 pdl_10'>Skoda</div>
              <div className='w_20'></div>
              <div className='w_17'></div>
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
              <div className='w_20'><div className='oe_align_cont'><div>6Y0853668B</div><input type="checkbox" className='checkedBox pdr_35' defaultChecked /></div></div>
              <div className='w_20'>Gitter Motorhaube</div>
              <div className='w_17 pdl_10'>Skoda</div>
              <div className='w_20'></div>
              <div className='w_17'></div>
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
              <div className='w_20'><div className='oe_align_cont'><div>6Y0853678GRU</div><input type="checkbox" className='checkedBox pdr_35' defaultChecked /></div></div>
              <div className='w_20'>Rahmen Gitter Motorhaube</div>
              <div className='w_17 pdl_10'>Skoda</div>
              <div className='w_20'></div>
              <div className='w_17'></div>
            </div>
          </div>
          <div className="parts_answer">
            <PartsSelectionCard />
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
              <div className='w_20'><div className='oe_align_cont'><div>1U0853621C MEL</div> <input type="checkbox" className='checkedBox pdr_35' defaultChecked /></div></div>
              <div className='w_20'>Emblem</div>
              <div className='w_17 pdl_10'>Skoda</div>
              <div className='w_20'></div>
              <div className='w_17'></div>
            </div>
          </div>
          <div className="parts_answer">
            <PartsSelectionCardExpand />
          </div>
        </li>
      </ul>

  </div>
</div>
  )
}

export default PartsSelection;
