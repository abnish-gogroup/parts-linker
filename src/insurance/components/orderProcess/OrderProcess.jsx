import React from 'react';
import '../../../stylesheets/dashboard.scss';
import NavigationTabs from './NavigationTabs';
import insuranceOrderProcessData from '../../../workshops/constants/insuranceOrderProcessData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function OrderProcess(props) {
  const { expanded } = props;

  return (
    <div className={expanded ? "main_dashboard_container h_150 pd_240" : 'main_dashboard_container h_150 pd_140'}>
      <div className="dashboard_text_cont">
        <div className="dashboard_text fs_30">
          Bestellübersicht
        </div>
        <div className='search_bar_cont'>
          <input className='search_box pd_ins' placeholder='Suche' />
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search_icon top_10' />
        </div>
      </div>
      <small className='theme_clr float_r'>Erweiterte Suche</small>
      <div className='container'>
        <NavigationTabs tabs={insuranceOrderProcessData} />
      </div>
    </div>
  )
}

export default OrderProcess;
