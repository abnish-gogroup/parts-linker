import React, { useEffect } from 'react';
import '../../../stylesheets/dashboardDropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPaperclip, faBars } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

function PartsSelectionCardExpand(props) {
  const { jobId, jobs, model, licencePlateId, completionDate, noOfParts } = props;
  
  useEffect(()=>{
    $(function () {
      $('.showChooseText1').show();
      $('.showChooseText2').hide();
      $('.showChooseText3').hide();
  
      $("input[name=parts_selection]:radio").on('click', function (e) {
          if ($('input[name=parts_selection]:checked').val() === "rd_1") {
            e.stopPropagation();
            $('.showChooseText1').show();
            $('.showChooseText2').hide();
            $('.showChooseText3').hide();
  
          } else if ($('input[name=parts_selection]:checked').val() === "rd_2") {
            e.stopPropagation();
            $('.showChooseText1').hide();
            $('.showChooseText2').show();
            $('.showChooseText3').hide();
          }
          else if ($('input[name=parts_selection]:checked').val() === "rd_3") {
            e.stopPropagation();
            $('.showChooseText1').hide();
            $('.showChooseText2').hide();
            $('.showChooseText3').show();
          }
      });
  });
  },[])

  return (
    <div className='parts_expand_cont'>
      <div className='parts_expand_cont_head'>
      <div className='w_5'></div>
        <div className='w_25'>Lieferant</div>
        <div className='w_14'>Lieferzeit</div>
        <div className='w_7'>Typ</div>
        <div className='w_7'>UVP</div>
        <div className='w_10'>Rabatt</div>
        <div className='w_10'>Angebot</div>
        <div className='w_12'>Lieferkosten</div>
        <div className='w_7'></div>
      </div>
      <div className='parts_bidding_desc'>
        <div className='w_5'></div>
        <div className='w_25'>NORA Zentrum Wolfsburg</div>
        <div className='w_14'>2 Tage</div>
        <div className='w_7'>OEM</div>
        <div className='w_7'>€12.25</div>
        <div className='w_10'>9%</div>
        <div className='w_10'>€11.2</div>
        <div className='w_12'>€0</div>
        <div className='w_5 radio_content'><input name='parts_selection' type='radio' value='rd_1' defaultChecked /><label className='pdl_10 showChooseText1'>Auswählen</label></div>
      </div>
    
      <div className='parts_bidding_desc'>
        <div className='w_5'></div>
        <div className='w_25'>VW Mayr</div>
        <div className='w_14'>4 Tage</div>
        <div className='w_7'>OEM</div>
        <div className='w_7'>€12.25</div>
        <div className='w_10'>10%</div>
        <div className='w_10'>€12.25</div>
        <div className='w_12'>€5</div>
        <div className='w_5 radio_content'><input name='parts_selection' type='radio'  value='rd_2' /><label className='pdl_10 showChooseText2'>Auswählen</label></div>
      </div>

      <div className='parts_bidding_desc'>
        <div className='w_5'></div>
        <div className='w_25'>Brass Gruppe</div>
        <div className='w_14'>2 Tage</div>
        <div className='w_7'>OEM</div>
        <div className='w_7'>€12.25</div>
        <div className='w_10'>15%</div>
        <div className='w_10'>€10.41</div>
        <div className='w_12'>€0</div>
        <div className='w_5 radio_content'><input name='parts_selection' type='radio'  value='rd_3' /><label className='pdl_10 showChooseText3'>Auswählen</label></div>
      </div>
    </div>
  )
}

export default PartsSelectionCardExpand;
