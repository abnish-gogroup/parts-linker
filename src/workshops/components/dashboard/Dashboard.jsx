import React, { useEffect } from 'react';
import '../../../stylesheets/dashboard.scss';
import Tabs from './Tabs';
import { tabContent } from '../../constants/tabContent';

function Dashboard(props) {
  const { expanded, setExpanded } = props;
  const handleCreateANewOrder = () => {
    window.history.pushState({}, '', '/create-a-job');
    window.location.reload();
  }

  return ( 
    <div className={expanded ? "main_dashboard_container pd_240" : 'main_dashboard_container pd_140'}>
      <div className="dashboard_text_cont">
        <div className="dashboard_text fs_30">
          Dashboard
        </div>
        <button className="create_new_order_btn_cont" onClick={handleCreateANewOrder}>Neuen Auftrag erstellen</button>
      </div>
      <div className="dashboard_order_status_cont fs_12">
        <div className="order_in_delivery_cont">
          <div>Aufträge in Lieferung</div>
          <div className="order_in_del_count pdt_10">4</div>
        </div>
        <div className="parts_order_received_cont">
          <div>Teilebestellung geliefert</div>
          <div className="parts_order_rec_count pdt_10">2</div>
        </div>
        <div className="repair_complete_cont">
          <div>Reparatur abgeschlossen</div>
          <div className="repair_compt_count pdt_10">6</div>
        </div>
        <div className="complaints_cont">
          <div>Reklamationen</div>
          <div className="complain_count pdt_10">1</div>
        </div>
      </div>
      {/* navbar container  */}
      <div className='container'>
        <Tabs tabs={tabContent} />
      </div>
    </div>
  )
}

export default Dashboard;
