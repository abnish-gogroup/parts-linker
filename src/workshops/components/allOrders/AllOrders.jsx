import React, { useEffect } from 'react';
import '../../../stylesheets/allOrders.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import AllOrdersCard from './AllOrdersCard';

function AllOrders(props) {
  const { expanded } = props;

  useEffect(() => {
    $(".complain_btn").click(function(e){
      goToComplaintsPage();
  })

    $(document).ready(function () {
      $('.accordion-list-all-orders > li > .all_order_answer').hide();
      $('.accordion-list-all-orders > li').on('click', function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".all_order_answer").slideUp();
        } else {
          $(".accordion-list-all-orders > li.active .all_order_answer").slideUp();
          $(".accordion-list-all-orders > li.active").removeClass("active");
          $(this).addClass("active").find(".all_order_answer").slideDown();
        }
        return false;
      });
    });
  }, [])
 
  const goToComplaintsPage = () => {
    window.history.pushState({}, '', '/parts-complaints');
    window.location.reload();
  }

  return (
    <div className={expanded ? 'main_container_all_orders pd_240' : 'main_container_all_orders pd_140'}>
      <div className='heading_cont'>
        <div className='fs_30'>Bestellungen</div>
        <div className='search_bar_cont'>
          <input className='search_box' placeholder='suche' />
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search_icon' /></div>
      </div>

      <div className='table_cont'>
        <div className='order_table_head_cont'>
          <div className='w_15'>Bestell-ID</div>
          <div className='w_10'>Anzahl</div>
          <div className='w_17'>STATUS</div>
          <div className='w_10'>Lieferung</div>
          <div className='w_10'>Marge%</div>
          <div className='w_10'>Marge</div>
          <div className='w_10'>Gesamt</div>
          <div className='w_10'></div>
          <div className='w_10'></div>
        </div>
        <ul className="accordion-list-all-orders">
          <li>
            <AllOrdersCard
              orderID='12402'
              noOfOrders='4'
              status='Geliefert'
              classname='deliver'
              deliveryTime='14 Tage'
              marginPercent='€0'
              margin='€80'
              total='€1240'
              goToComplaintsPage={goToComplaintsPage}
            />
          </li>

          <li>
            <AllOrdersCard
              orderID='12929'
              noOfOrders='4'
              status='Geliefert'
              classname='deliver'
              deliveryTime='2 Tage'
              marginPercent='€0'
              margin='€249'
              total='€1451'
              goToComplaintsPage={goToComplaintsPage}
            />
          </li>

          <li>
            <AllOrdersCard
              orderID='13091'
              noOfOrders='4'
              status='Beanstandet'
              classname='complained'
              deliveryTime='4 Tage'
              marginPercent='€80'
              margin='€94'
              total='€786'
              goToComplaintsPage={goToComplaintsPage}
            />
          </li>

          <li>
            <AllOrdersCard
              orderID='14010'
              noOfOrders='4'
              status='ordered'
              classname='Bestellt'
              deliveryTime=''
              marginPercent='€20'
              margin='€30'
              total='€211'
              goToComplaintsPage={goToComplaintsPage}
            />
          </li>

          <li>
            <AllOrdersCard
              orderID='13100'
              noOfOrders='4'
              status='ordered'
              classname='Bestellt'
              deliveryTime=''
              marginPercent='€5'
              margin='€24'
              total='€120'
              goToComplaintsPage={goToComplaintsPage}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AllOrders;
