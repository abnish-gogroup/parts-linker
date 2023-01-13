import React, { useState } from 'react';
import '../../../stylesheets/checkout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import SelectedSupplierCard from './SelectedSupplierCard';

function SelectedSupplier2(props) {
  const {supplierId, supplierName, suppAddsName, suppCity, suppMobNo, supplierEmail, radioBtnName, radioBtnTime } = props;
  const [startDate, setStartDate] = useState(null);
  return (
    <div className='supplier_cont'>
      <div className="supplier_card">
      <div className='supp_align'>
          <div className="supplier_txt">
          {supplierName}
          </div>
          <div>{supplierId}</div>
        </div>
        <div className="address_details_cont_selected">
          <div className="w_330">
            <div className="col_262626 fw_600">Kontakt</div>
            <div className="pt_10 fb_1">
              {suppAddsName}
              <br></br>
            </div>
            <div className="fb_1">
              {suppCity}
              <br></br>
            </div>
            <div className="fb_1">
              {suppMobNo}
              <br></br>
            </div>
            <div className="fb_1">
              <span className='supp_email'>{supplierEmail}</span>
            </div>
          </div>
          <div className="w_30">
            <div className="col_262626 fw_600">
              Lieferung
            </div>
            <div className="pt_5">
              <div className='clr_8692A6'>21 Dez..</div>
              <div><FontAwesomeIcon icon={faCheckDouble} className='theme_clr pdr_10' />Bestellung vom Lieferanten bestätigt</div>
            </div>
          </div>
          <div className="col_262626 p_left fs_14 w_30 fw_600">
            Kommentar an den Lieferante (Optional)
            <div className='clr_6e7178 fs_14 fw_400 fsi'>Vielen Dank im Voraus!</div>
          </div>
        </div>
      </div>
      <div className="supplier_card">
        <div className="table_card">
          <div className="supp_table_head d_flex pad_10">
            <div className="cell_part bg_tran">Teilenummer</div>
            <div className="cell_mfg bg_tran">Hersteller</div>
            <div className="cell_desc bg_tran">Beschreibung</div>
            <div className="cell_10 bg_tran">Teile-TYP</div>
            <div className="cell_10 bg_tran">Lieferung</div>
            <div className="cell_8 bg_tran">Anzahl</div>
            <div className="cell_15 bg_tran">UVP</div>
            <div className="cell_10 bg_tran">Marge</div>
            <div className="cell_15 bg_tran">Preis</div>
          </div>

          <SelectedSupplierCard
            partNo='6Y0853668B'
            manufacturer='Skoda'
            description='Gitter Motorhaube'
            partType='OEM'
            delivery='2 Tage'
            qty='1'
            w_margin='€32.50'
            margin='24%'
            deliveryPrice='€24.70' />

          <SelectedSupplierCard
            partNo='1U0853621CMEL'
            manufacturer='Skoda'
            description='Emblem'
            partType='OEM'
            delivery='2 Tage'
            qty='1'
            w_margin='€12.25'
            margin='15%'
            deliveryPrice='€10.41' />
        </div>
      </div>
    </div>
  )
}

export default SelectedSupplier2;
