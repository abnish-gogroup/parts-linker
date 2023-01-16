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
        <div className='w_14'>HERSTELLER</div>
        <div className='w_14'>Lieferant</div>
        <div className='w_10'>Lieferzeit</div>
        <div className='w_7'>Typ</div>
        <div className='w_10'>UVP</div>
        <div className='w_10'>Rabatt</div>
        <div className='w_12'>Angebot</div>
        <div className='w_14'>Lieferkosten</div>
        <div className='w_7'></div>
      </div>
      <div className='parts_bidding_desc'>
        <div className='w_14'>Hella</div>
        <div className='w_14'>Stahlgruber</div>
        <div className='w_10'>2 Tage</div>
        <div className='w_7'>OES</div>
        <div className='w_10'>€70.50</div>
        <div className='w_10'>37%</div>
        <div className='w_12'>€44.41</div>
        <div className='w_14'>€00.00</div>
        <div className='w_7 radio_content'><input name='parts_selection' type='radio' value='rd_1' defaultChecked /><label className='pdl_10 showChooseText1'>Auswählen</label></div>
      </div>
    
      <div className='parts_bidding_desc'>
        <div className='w_14'>Bosch</div>
        <div className='w_14'>Stahlgruber</div>
        <div className='w_10'>2 Tage</div>
        <div className='w_7'>OES</div>
        <div className='w_10'>€70.50</div>
        <div className='w_10'>37%</div>
        <div className='w_12'>€44.41</div>
        <div className='w_14'>€00.00</div>
        <div className='w_7 radio_content'><input name='parts_selection' type='radio'  value='rd_2' /><label className='pdl_10 showChooseText2'>Auswählen</label></div>
      </div>

      <div className='parts_bidding_desc'>
        <div className='w_14'>Skoda</div>
        <div className='w_14'>Nora Zentrum</div>
        <div className='w_10'>1 Tage</div>
        <div className='w_7'>OES</div>
        <div className='w_10'>€70.50</div>
        <div className='w_10'>37%</div>
        <div className='w_12'>€44.41</div>
        <div className='w_14'>€00.00</div>
        <div className='w_7 radio_content'><input name='parts_selection' type='radio'  value='rd_3' /><label className='pdl_10 showChooseText3'>Auswählen</label></div>
      </div>
    </div>
  )
}

export default PartsSelectionCardExpand;
