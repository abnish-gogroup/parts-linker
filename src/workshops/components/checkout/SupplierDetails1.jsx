import React, { useState } from 'react';
import '../../../stylesheets/checkout.scss';
import DatePicker from 'react-datepicker';
import { addDays, subDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import SupplierDetailsCard from './SupplierDetailsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function SupplierDetails1(props) {
  const { supplierName, suppAddsName, supplierCity, supplierPhoneNo, supplierEmail, radioBtnName, radioBtnTime } = props;
  const [startDate, setStartDate] = useState(null);
  return ( 
    <div className='supplier_cont'>
      <div className="supplier_card">
        <div className="supplier_txt">{supplierName}</div>
        <div className="address_details_cont">
          <div className="w_330 mrt_20">
            <div className="col_262626 fw_600">Kontakt:</div>
            <div className=" fb_1">
              {suppAddsName}
              <br></br>
              <div className="fb_1">
              {supplierCity}
              <br></br>
              </div>
              <div className="fb_1">
              {supplierPhoneNo}
              <br></br>
              </div>
              <span className='supp_email'>{supplierEmail}</span>
            </div>
          </div>
          <div className="w_350">
            <div className="col_262626">
              Lieferung
            </div>
            <div className="pt_10">
              <div className='fs_12 dfx_supp'>
                <input name={radioBtnName} type="radio" defaultChecked className='mr_5' />
                <label>Schnellstmöglich</label>
              </div>
              <div className="delivery_on fs_12">
                <input name={radioBtnName} type="radio" className='mr_5' />
                <label>Lieferung am</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className='date_class'
                  includeDateIntervals={[
                    { start: subDays(new Date(), 0), end: addDays(new Date(), 500) },
                  ]}
                />
                <FontAwesomeIcon icon={faCalendar} className='calendar_style' />
              </div>
              <input name={radioBtnName} type="radio" className='mr_5 fs_12' /><label className='fs_12'>Siehe Lieferanweisungen</label>
              <input type='text' className="delivery_inst pdl_10 mrg_left" />
            </div>
          </div>
          <div className="col_262626 p_left fs_14">
              Kommentar an den Lieferanten (optional)
            <input type='text' className="delivery_inst pdl_10 mt_5" />
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
            <div className="cell_8 bg_tran">Anzahl</div>
            <div className="cell_15 bg_tran">UVP</div>
            <div className="cell_10 bg_tran">Marge</div>
            <div className="cell_del_price bg_tran">Preis</div>
          </div>
          
          <SupplierDetailsCard 
            partNumber='6Y0807221E'
            manufacturer='Skoda'
            description='Stoßstange Vorne'
            partType='OEM'
            number= '1'
            margin='€167.50'
            deliveryPrice='18%'
            price='€137.35'
          />

          <SupplierDetailsCard 
            partNumber='6Y0853661 739'
            manufacturer='Skoda'
            description='Blende Gitter Motorhaube'
            partType='OEM'
            number= '1'
            margin='€89.60'
            deliveryPrice='18%'
            price='€73.47'
          />

          <SupplierDetailsCard 
            partNumber='6Y0853678GRU'
            manufacturer='Skoda'
            description='Rahmen Gitter Motorhaube'
            partType='OEM'
            number= '1'
            margin='€31.70'
            deliveryPrice='25%'
            price='€24.01'
          />
        </div>
      </div>
    </div>
  )
}

export default SupplierDetails1;
