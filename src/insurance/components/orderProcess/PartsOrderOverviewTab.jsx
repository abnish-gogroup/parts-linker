import React, { useEffect } from 'react';
import '../../../stylesheets/partsSelection.scss';
import '../../../stylesheets/partsOverviewTab.scss';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import PartsOverviewTabCard1 from './PartsOverviewTabCard1';
import PartsOverviewTabCard2 from './PartsOverviewTabCard2';
import { offerDetailsDataForMotorhaube, offerDetailsDataForScheinwerfer } from '../../../workshops/constants/insuranceOrderProcessData';

function PartsOrderOverviewTab(props) {
  const { expanded } = props;

  useEffect(() => {
    $(document).ready(function () {
      $('.accordion-list-parts-tab > li > .parts_ans_tab').hide();
      $('.accordion-list-parts-tab > li').on('click', function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".parts_ans_tab").slideUp();
        } else {
          $(".accordion-list-parts-tab > li.active .parts_ans_tab").slideUp();
          $(".accordion-list-parts-tab > li.active").removeClass("active");
          $(this).addClass("active").find(".parts_ans_tab").slideDown();
        }
        return false;
      });
    });
  }, [])

  return (
    <div className={expanded ? "main_parts_selection_cont pd_240" : "main_parts_selection_cont pdt_20"}>
      <div className="part_number_details">
        <div className="part_no_head theme_bg">
          <div className='w_5'></div>
          <div className='w_5'>#</div>
          <div className='w_20'>TEILE</div>
          <div className='w_20'>DATUM</div>
          <div className='w_25'>LIEFERUNG</div>
          <div className='w_20'>UVP</div>
          <div className='w_17'>PREIS</div>
          <div className='w_17'>ANZAHL</div>
        </div>

        <ul className="accordion-list-parts-tab">
          <li>
            <div className='job_row_cont h_60 pdt_20'>
              <div className='job_row_class'>
                <div className='w_5'>
                  <div className="circle" id='angleDown'>
                    <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                  </div>
                </div>
                <div className='w_5'>
                  <img src='http://static-assets-goparts.s3.amazonaws.com/static-images/green_flag.png' />
                </div>
                <div className='w_20'>Stoßstange vorne</div>
                <div className='w_20'>12/06/22 12:15 </div>
                <div className='w_25 pdl_20'>2 Tage</div>
                <div className='w_20'></div>
                <div className='w_17 pdl_20'>€500,20</div>
                <div className='w_17'></div>
              </div>
            </div>
          </li>

          <li>
            <div className='job_row_cont h_60 pdt_20'>
              <div className='job_row_class'>
                <div className='w_5'>
                  <div className="circle" id='angleDown'>
                    <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                  </div>
                </div>
                <div className='w_5'>
                  <img src='http://static-assets-goparts.s3.amazonaws.com/static-images/green_flag.png' />
                </div>
                <div className='w_20'>Batterie</div>
                <div className='w_20'>12/06/22 12:15 </div>
                <div className='w_25 pdl_20'>2 Tage</div>
                <div className='w_20'></div>
                <div className='w_17 pdl_20'>€492,25</div>
                <div className='w_17'></div>
              </div>
            </div>
          </li>

          <li>
            <div className='job_row_cont h_60 pdt_20 bb_none'>
              <div className='job_row_class'>
                <div className='w_5'>
                  <div className="circle" id='angleDown'>
                    <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                  </div>
                </div>
                <div className='w_5'>
                  <img src='http://static-assets-goparts.s3.amazonaws.com/static-images/red_flag.png' />
                </div>
                <div className='w_20'>Motorhaube</div>
                <div className='w_20'>10/06/22 12:15</div>
                <div className='w_25 pdl_20 clr_red'>Hinweis: Lieferung zu lang</div>
                <div className='w_20'></div>
                <div className='w_17 pdl_20'>€510</div>
                <div className='w_17'></div>
              </div>
            </div>
            <div className="parts_ans_tab bg_fafaff">
              <PartsOverviewTabCard1
                offer='Angebote'
                date='10/06/22 12:30'
                offerDetailsDataForMotorhauba={offerDetailsDataForMotorhaube}
              />
            </div>
          </li>

          <li>
            <div className='job_row_cont bdr_1 h_60 pdt_20'>
              <div className='job_row_class'>
                <div className='w_5'>
                  <div className="circle" id='angleDown'>
                    <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                  </div>
                </div>
                <div className='w_5'>
                  <img src='http://static-assets-goparts.s3.amazonaws.com/static-images/green_flag.png' />
                </div>
                <div className='w_20'>LED-Scheinwerfer</div>
                <div className='w_20'>12/06/22 12:15</div>
                <div className='w_25 pdl_20'>2 Tage</div>
                <div className='w_20'></div>
                <div className='w_17 pdl_20'>€492.25</div>
                <div className='w_17'></div>
              </div>
            </div>
            <div className="parts_ans_tab bg_fafaff">
              <PartsOverviewTabCard2
                offer='Angebote'
                date='10/06/22 12:30'
                offerDetailsDataForScheinwerfer={offerDetailsDataForScheinwerfer}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PartsOrderOverviewTab;
