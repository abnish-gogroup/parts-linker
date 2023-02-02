import React, { useState, useEffect } from 'react';
import '../../../stylesheets/dashboardDropdown.scss';
import $ from 'jquery';

function PartsSelectionCardExpand(props) {
  const { setIsAvailableForBlende } = props;

  useEffect(() => {
    $(function () {
      $("input[name=parts_selection]:radio").on('click', function (e) {
        if ($('input[name=parts_selection]:checked').val() === "rd_1") {
          e.stopPropagation();
          console.log('e.target1', e.target.value);
          setIsAvailableForBlende({ isOEM: true, isOES: false })
        } else if ($('input[name=parts_selection]:checked').val() === "rd_2") {
          e.stopPropagation();
          console.log('e.target2', e.target.value);
          setIsAvailableForBlende({ isOEM: false, isOES: true })
        }
        else if ($('input[name=parts_selection]:checked').val() === "rd_3") {
          e.stopPropagation();
          console.log('e.target3', e.target.value);
          setIsAvailableForBlende({ isOEM: false, isOES: true })
        }
      });
    });
  }, [])

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
        <div className='w_14'>Skoda</div>
        <div className='w_14'>Nora Zentrum Wolfsburg</div>
        <div className='w_10'>2 Tage</div>
        <div className='w_7'>OEM</div>
        <div className='w_10'>€31.70</div>
        <div className='w_10'>25%</div>
        <div className='w_12'>€24.01</div>
        <div className='w_14'>€0</div>
        <div className='w_7 radio_content'><input name='parts_selection' type='radio' value='rd_1' /><label className='pdl_10 showChooseText1'>Auswählen</label></div>
      </div>

      <div className='parts_bidding_desc'>
        <div className='w_14'>Bosch</div>
        <div className='w_14'>Stahlgruber</div>
        <div className='w_10'>2 Tage</div>
        <div className='w_7'>OES</div>
        <div className='w_10'>€26.70</div>
        <div className='w_10'>35%</div>
        <div className='w_12'>€17.35</div>
        <div className='w_14'>€0</div>
        <div className='w_7 radio_content'><input name='parts_selection' type='radio' value='rd_2' /><label className='pdl_10 showChooseText2'>Auswählen</label></div>
      </div>

      <div className='parts_bidding_desc'>
        <div className='w_14'>Hella</div>
        <div className='w_14'>WM SE</div>
        <div className='w_10'>2 Tage</div>
        <div className='w_7'>OES</div>
        <div className='w_10'>€28.50</div>
        <div className='w_10'>40%</div>
        <div className='w_12'>€17.10</div>
        <div className='w_14'>€0</div>
        <div className='w_7 radio_content'><input name='parts_selection' type='radio' value='rd_3' /><label className='pdl_10 showChooseText3'>Auswählen</label></div>
      </div>
    </div>
  )
}

export default PartsSelectionCardExpand;
