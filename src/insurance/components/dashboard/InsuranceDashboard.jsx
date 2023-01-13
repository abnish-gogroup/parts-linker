import React, { useEffect } from 'react';
import '../../../stylesheets/dashboard.scss';
import NavigationTabs from '../orderProcess/NavigationTabs';
import insuranceData from '../../../workshops/constants/insuranceTabData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import InvoiceDashboardTable from './InvoiceDashboardTable';


function InsuranceDashboard(props) {
  const { expanded } = props;

  return (
    <div className={expanded ? "main_dashboard_container h_150 pd_240" : 'main_dashboard_container h_150 pd_140'}>
      <div className="dashboard_text_cont">
        <div className="dashboard_text fs_30">
          Dashboard
        </div>
        <div className='search_bar_cont'>
          <input className='search_box pd_ins' placeholder='Auftragssuche' />
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search_icon top_10' />
        </div>
      </div>
      <small className='theme_clr float_r'>Erweiterte Suche</small>
      <div className='container'>
        <div className='overview'>Übersicht</div>
        <InvoiceDashboardTable insuranceData={insuranceData} />
      </div>
    </div>
  )
}

export default InsuranceDashboard;
