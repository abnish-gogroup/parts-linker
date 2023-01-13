import React from 'react';
import PartsComplainCard from './PartsComplainCard';
import '../../../stylesheets/partsComplaints.scss';

function PartsComplain(props) {
  const { expanded } = props;

  return (
    <div className={expanded ? 'main_container_parts_complaints pd_240' : 'main_container_parts_complaints pd_140'}>
      <div className='fs_30'>Reklamation von Teilen</div>
      <div className='complaint_cont'>
        <div className='complaint_supplier'>EFA Autoteilewelt Gmbh</div>
        <div className='address_delivery_cont'>
          <div className='address_cont'>
            <div className='col_262626 fw_600'>Kontakt</div>
            <div className='address_name'>Liebstädter Str. 5,</div>
            <div className='city_name'>Dresden, Sachsen, 01277</div>
            <div className='mobile_no'>0351 4201333</div>
            <div className='theme_clr'>bestellung@efa-dresden.de</div>
          </div>
          <div className='delivery_date'>
            <div className='col_262626 fw_600'>Lieferdatum</div>
            <div>03.10.2022</div>
          </div>
        </div>
        <div className='complain_desc_cont'>
          <div className='complain_table_head'>
            <div className='w_13'>Teilenummer</div>
            <div className='w_15'>Hersteller</div>
            <div className='w_20'>Beschreibung</div>
            <div className='w_10'>Anzahl</div>
            <div className='w_13'>Werkstatt marge</div>
            <div className='w_13'>LieferPreis</div>
            <div className='w_7'>Preis</div>
            <div className='w_20'>Grund Reklamation</div>
            <div className='w_20 txt_c'>Aktion</div>
          </div>
          <PartsComplainCard
            partNumber='04L100038K'
            manufacturer='Mercedes'
            description='Scheinwerfer Re'
            number='1'
            workshopMargin='€19'
            deliveryPrice='€0'
            price='€300'
          />
          <PartsComplainCard
            partNumber='6F0867211G'
            manufacturer='Mercedes'
            description='Stoßstange Vorne'
            number='1'
            workshopMargin='€10'
            deliveryPrice='€0'
            price='€130'
          />
          <PartsComplainCard
            partNumber='2Q0601890'
            manufacturer='Mercedes'
            description='Leiste Stioßfänger'
            number='1'
            workshopMargin='€34'
            deliveryPrice='€5'
            price='€356'
          />
          <PartsComplainCard
            partNumber='2Q0698590'
            manufacturer='Mercedes'
            description='Gitter Stoßfänger vo'
            number='1'
            workshopMargin='€9'
            deliveryPrice='€0'
            price='€110'
          />
          <PartsComplainCard
            partNumber='622545490'
            manufacturer='Mercedes'
            description='Kanalleitung Stoßfänger'
            number='1'
            workshopMargin='€0.4'
            deliveryPrice='€0'
            price='€9'
          />
          <PartsComplainCard
            partNumber='623127847R'
            manufacturer='Mercedes'
            description='Verstärkung Stoßfänger'
            number='1'
            workshopMargin='€1.4'
            deliveryPrice='€0'
            price='€20'
          />
          <PartsComplainCard
            partNumber='628170767R'
            manufacturer='Mercedes'
            description='Spoiler Stoßfänger vor'
            number='1'
            workshopMargin='€7'
            deliveryPrice='€0'
            price='€120'
          />
        </div>
      </div>
    </div>
  )
}

export default PartsComplain;
