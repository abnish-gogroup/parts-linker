import React from 'react';
import '../../../stylesheets/checkout.scss';
import SelectedSupplier1 from './SelectedSupplier1';
import SelectedSupplier2 from './SelectedSupplier2';
import ReportAProblemBox from './ReportAProblemBox';

function OrderOverview(props) {
  const { expanded } = props;
  return (
    <div className={expanded ? 'main_container_checkout pd_240' : 'main_container_checkout pd_140'}>
      <ReportAProblemBox />
      <SelectedSupplier1 supplierId='(ID 1234 A)' supplierName='Nora Zentrum Wolfsburg' suppAddsName='NORA Zentrum Wolfsburg' suppCity='38444 Wolfsburg' suppMobNo='05361 204181-0' supplierEmail='lieferung@teileservice.de' />
      <SelectedSupplier2 supplierId='(ID 1234 B)' supplierName='Brass Teilevertriebs gmBh' suppAddsName='Brass Teilevertriebs GmbH & Co. KG' suppCity='64293 Darmstadt' suppMobNo='06151 108-6' supplierEmail='distrigo@brass-gruppe.de' />
    </div>
  )
}

export default OrderOverview;
