import React, { useState } from 'react';
import '../stylesheets/header.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { getHeaderName } from '../workshops/helper/Utils';
// import NotificationsCart from '../common/NotificationsCart';


function Header(props) {
  const { expanded } = props;
  const [showNotifications, setShowNotifications] = useState(false);

  const handleShow = () => {
    setShowNotifications(true);
  }

  const handleGoToIndexPage=()=>{
    window.history.pushState({}, '', '/');
    window.location.reload();
  }

  return (
    <div>
      <nav className={expanded ? 'navbar navbar-fixed-top' : 'navbar navbar-fixed-top-collapse'}>
        <div className='top_navbar'>
          <img src='https://d3brnpc5nhvc9v.cloudfront.net/site/static-images/goparts-logo.png' className='logo' onClick={handleGoToIndexPage} />
         <span className='theme_clr fs_18 ls_1 pdl_10'>  { getHeaderName(window.location.pathname) }</span>
        </div>
        <div className='right_navbar'> 
        <div className="position-relative">
        <FontAwesomeIcon icon={faBell} />
          <span className="position-absolute translate-middle pd_3 bg-danger border-light rounded-circle">
          </span>
        </div>
          <span className='profile_class'>Wilkommen <span className='fw_600'>Tom</span></span>
          <select className='logout'>
            <option value='welcome'>Ausloggen</option>
            <option value='profile'>profile</option>
            <option value='setting'>setting</option>
          </select>
        </div>
      </nav>
    </div>
  )
}

export default Header;