import React from 'react';
import '../../../stylesheets/dashboard.scss';

function OrderSummaryBox() {

  return (
    <div className="dashboard_order_status_cont fs_12">
    <div className="order_in_delivery_cont">
      <div>Abweichungen vom Prozess</div>
      <div className="order_in_del_count pdt_10">235</div>
    </div>
    <div className="parts_order_received_cont">
      <div>Retouren im Monat</div>
      <div className="parts_order_rec_count pdt_10">354</div>
    </div>
    <div className="repair_complete_cont">
      <div>Lieferzeit der Teile</div>
      <div className="repair_compt_count pdt_10">ø 5,34 Tage</div>
    </div>
    <div className="complaints_cont">
      <div>OES Einsparungen im Monat</div>
      <div className="complain_count pdt_10">89.002 €</div>
    </div>
  </div>
  )
}

export default OrderSummaryBox;
