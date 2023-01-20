import React, { useEffect } from 'react';
import '../../../stylesheets/dashboardDropdown.scss';
import $ from 'jquery';

function PartsSelectionCard(props) {
  const { setIsAvailableForRahmen } = props;

  useEffect(() => {
    $(function () {
      $("input[name=parts_2_selection]:radio").on('click', function (e) {
        if ($('input[name=parts_2_selection]:checked').val() === "rd_4") {
          e.stopPropagation();
          setIsAvailableForRahmen({ isOEM: true, isOES: false })
        } else if ($('input[name=parts_2_selection]:checked').val() === "rd_5") {
          e.stopPropagation();
          setIsAvailableForRahmen({ isOEM: false, isOES: true })
        } else if ($('input[name=parts_2_selection]:checked').val() === "rd_6") {
          e.stopPropagation();
          setIsAvailableForRahmen({ isOEM: false, isOES: true })
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
        <div className='w_14'>Brass Gruppe</div>
        <div className='w_10'>2 Tage</div>
        <div className='w_7'>OEM</div>
        <div className='w_10'>€89.60</div>
        <div className='w_10'>18%</div>
        <div className='w_12'>€73.47</div>
        <div className='w_14'>€0</div>
        <div className='w_7 radio_content'><input name='parts_2_selection' type='radio' value='rd_4' /><label className='pdl_10 showChooseText4'>Auswählen</label></div>
      </div>

      <div className='parts_bidding_desc'>
        <div className='w_14'>Bosch</div>
        <div className='w_14'>Coler GmbH</div>
        <div className='w_10'>5 Tage</div>
        <div className='w_7'>OES</div>
        <div className='w_10'>€70.50</div>
        <div className='w_10'>37%</div>
        <div className='w_12'>€44.41</div>
        <div className='w_14'>€0</div>
        <div className='w_7 radio_content'><input name='parts_2_selection' type='radio' value='rd_5' /><label className='pdl_10 showChooseText5'>Auswählen</label></div>
      </div>

      <div className='parts_bidding_desc'>
        <div className='w_14'>Hella</div>
        <div className='w_14'>WM SE</div>
        <div className='w_10'>1 Tag</div>
        <div className='w_7'>OES</div>
        <div className='w_10'>€81.34</div>
        <div className='w_10'>28%</div>
        <div className='w_12'>€58.56</div>
        <div className='w_14'>€0</div>
        <div className='w_7 radio_content'><input name='parts_2_selection' type='radio' value='rd_6' /><label className='pdl_10 showChooseText6'>Auswählen</label></div>
      </div>
    </div>
  )
}

export default PartsSelectionCard;
