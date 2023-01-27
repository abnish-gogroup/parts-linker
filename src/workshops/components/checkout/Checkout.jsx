import React, { useEffect } from 'react';
import '../../../stylesheets/checkout.scss';
import SupplierDetails1 from './SupplierDetails1';
import SupplierDetails2 from './SupplerDetails2';
import TopContainer from './TopContainer';
import { useNavigate } from 'react-router-dom';

function Checkout(props) {
  const { expanded } = props;
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  const goToThankYouPage = () => {
    navigate('/thank-you-order');
  }

  return (
    <div className={expanded ? 'main_container_checkout pd_240' : 'main_container_checkout pd_140'}>
      <TopContainer goToThankYouPage={goToThankYouPage} />
      <SupplierDetails1 supplierName='Nora Zentrum Wolfsburg' suppAddsName='NORA Zentrum Wolfsburg' supplierCity='38444 Wolfsburg' supplierPhoneNo='05361 204181-0' supplierEmail='lieferung@teileservice.de' radioBtnName='supp1_delivery' radioBtnTime='time1' />
      <SupplierDetails2 supplierName='Brass Teilevertriebs gmBh' suppAddsName='Brass Teilevertriebs GmbH & Co. KG' supplierCity='64293 Darmstadt' supplierPhoneNo='06151 108-6' supplierEmail='distrigo@brass-gruppe.de' radioBtnName='supp2_delivery' radioBtnTime='time2' />
    </div>
  )
}

export default Checkout;
