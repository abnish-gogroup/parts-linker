import React from 'react';
import '../../../stylesheets/thankYou.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function ThankYouOrder(props) {
  const {expanded} = props;
  const goToOrderOverview = () => {
    window.history.pushState({}, '', './order-overview');
    window.location.reload();
  }

  // const handleViewSpecificOrder = () => {
  //   console.log('specific order')
  // }

  return (
    <div className={expanded ? 'main_container_thank_you pd_240': 'main_container_thank_you pd_140'}>
      <div className="thank_you_card">
        <div className="thank_order_text">
          <FontAwesomeIcon icon={faCircleCheck} className='icon_check' />
          <div className="thank_you_text ts_18">VIELEN DANK FÜR IHRE BESTELLUNG</div>
          <div className="grey_txt fs_14 fw_600">BESTELLUNG # 1234</div>
        </div>
        <div className="order_delivery">
          <div className="display_flex">
            <div className="grey_txt fs_16">
              ANKUNFT
            </div>
            <div className="theme_color fs_12 fw_600">
              Dienstag, 21 Dez.
            </div>
          </div>

          <div className="display_flex">
            <div className="grey_txt fs_16 fw_600">Ihre Bestellung wird geliefert an:</div>
            <div className='fs_13 fw_600'>Güntzelstrasse 18, 54298 Gilzem</div>
          </div>
        </div>
        <div>
          <div className="thank_you_text fos_18 pd_bottom">Bestellübersicht</div>
          <div className='hz_line'></div>
          <div className='fs_14 pd_top'>5 Teile von 2 Lieferanten</div>
          <div className="supplier_details fs_14">
            <div className="supp_desc">
              <div className="w_300">NORA Zentrum Wolfsburg<span className='flr'>(3 Teile)</span></div>
              <div>€234.83</div>
            </div>
            <div className="supp_desc">
              <div className="w_300">Brass Gruppe<span className='flr'>(2 Teile)</span></div>
              <div>€35.11</div>
            </div>

            <div className='hz_line'></div>
            <div className="supp_desc">
              <div></div>
              <div className='w_161'>Lieferung<span className='pdl_68'><span>€0</span></span></div>
            </div>
            <div className="supp_desc">
              <div></div>
              <div className='fw_600'>Gesamt Preis<span className='pdl_40'>€269.94</span></div>
            </div>
          </div>
          <div className='hz_line'></div>
          <div className='disp_flex'>
            <div className="view_order_details pd_20 fs_14 mr_40 fw_600" onClick={goToOrderOverview}>
            Bestelldetails anzeigen
            </div>
            {/* <div className="view_order_details pd_20 fs_14" onClick={handleViewSpecificOrder}>
              View Specific Order
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYouOrder;
