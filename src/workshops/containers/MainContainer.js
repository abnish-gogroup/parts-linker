import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import classnames from 'classnames';

// import * as siteConstants from '../constants/SiteConstants'

// import * as sideBarActions from '../actions/sidebar';
// import * as loginActions from '../actions/login';
// import * as partsCheckerAction from '../actions/partsChecker';
import * as oeReadOutAction from '../action/oePaperReadout';

// import SideBar from '../components/sidebar/Sidebar';
// import PartsChecker from '../components/partsChecker/PartsChecker';
// import PartsIdentifier from '../components/partsIdentifier/PartsIdentifier';
// import ServiceOverview from '../components/serviceOverview/ServiceOverview';
import OePaperReadout from '../components/oePaperReadout/OePaperReadout';

// import "../../../assets/stylesheets/style_guide/colors.scss";
// import "../../../assets/stylesheets/style_guide/animation.scss";
// import "../../../assets/stylesheets/style_guide/panelMargins.scss";
// import "../../../assets/stylesheets/style_guide/panelPaddings.scss";
// import "../../../assets/stylesheets/style_guide/panelTypography.scss";
// import "../../../assets/stylesheets/style_guide/utility.scss";
// import "../../../assets/stylesheets/home/containers/dashboard/dashboard.scss";
// import "../../../assets/stylesheets/sprites/panel_sprite.scss";
// import "../../../assets/stylesheets/style_guide/animation.scss";

function MainContainer( props ){
  const {actions, sideBarData,  partsCheckerData, oeReadOutData} = props;     
  const location = window.location.pathname;
  // useEffect(() => {
  //   location.includes('dashboard') ? actions.sideBarActions.showServiceOverView() : actions.sideBarActions.showPartsChecker()
  // }, [])

  // function toggleSidebarOnMobile() {
  //   actions.sideBarActions.toggleSidebarSectionOnMobile();
  // }
  
  // function isOnMobile(){
  //   return window.innerWidth < 768;
  // }

  return (
    <div className="dashboard-container gp-f500 gp-lh14" >
      {/* {location.includes('dashboard')? (!isOnMobile() || (isOnMobile && sideBarData.showSidebarOnMobile) )&& 
      <div className={
        classnames(
          "collapsible-sidebar expanded",
          {
            "show-sidebar": sideBarData.showSidebarOnMobile
          }      
        )
      }>
        <SideBar
          actions={actions}
          sideBarData={sideBarData}
          toggleSidebarOnMobile={toggleSidebarOnMobile}
        /></div> : <div className={
          classnames(
            "collapsible-sidebar sidebar-200 expanded",
            {
              "show-sidebar": sideBarData.showSidebarOnMobile
            }      
          )
        }></div> }
      
      <div className="dashboard-section"> 
      <div className="mobile-menu justify-space-between ">
        <span className="go-parts-logo"> 
          <a href="https://goparts.tech/"><img height="38px" src="https://d3brnpc5nhvc9v.cloudfront.net/site/static-images/goparts-logo.png" alt="Logo" border="0" /></a>
        </span>
        <span className="fa fa-bars gp-1E8EA5" onClick = {toggleSidebarOnMobile}></span>
      </div>

      {sideBarData.activeSection ===
          siteConstants.SIDEBAR_PARTS_CHECKER && (<PartsChecker     
          actions          = { actions }
          sideBarData      = { sideBarData }
          partsCheckerData = {partsCheckerData}
        />)} 

        {sideBarData.activeSection ===
          siteConstants.SIDEBAR_PARTS_IDENTIFIER && (<PartsIdentifier
            actions={actions}
            sideBarData={sideBarData}
            partsCheckerData={partsCheckerData}
          />)}

        { location.includes('dashboard')? sideBarData.activeSection ===
          siteConstants.SIDEBAR_SERVICE_OVERVIEW && (<ServiceOverview 
            actions={actions}
            sideBarData={sideBarData}
          />): ''}

        { sideBarData.activeSection ===
          siteConstants.OE_PAPER_READOUT && (<OePaperReadout
            actions={actions}
            oeReadOutData={oeReadOutData}
          />)}

      </div> */}
    </div>
  );
};

// Dashboard.propTypes = {
//   actions: PropTypes.object.isRequired,
//   sideBarData: PropTypes.object.isRequired,
// };


function mapStateToProps(state) {
  return {
    // sideBarData: state.sideBar,
    // partsCheckerData: state.partsChecker,
    oeReadOutData: state.OePaperReadout
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      // sideBarActions: bindActionCreators(sideBarActions, dispatch),
      // loginActions: bindActionCreators(loginActions, dispatch),
      // partsCheckerActions: bindActionCreators(partsCheckerAction, dispatch),
      oeReadOutAction: bindActionCreators(oeReadOutAction, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
