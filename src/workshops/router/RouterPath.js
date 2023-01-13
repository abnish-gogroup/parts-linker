import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateAJob from '../components/createAJob/CreateAJob';
// import OePaperReadout from '../oePaperReadout/OePaperReadout';
import Login from '../workshop_auth/Login';
import { Provider } from 'react-redux';
import Dashboard from '../components/dashboard/Dashboard';
import Sidebar from '../../common/Sidebar';
import ThankYouOrder from '../components/thankYou/ThankYouOrder';
import Checkout from '../components/checkout/Checkout';
import OrderOverview from '../components/orderOverview/OrderOverview';
import PartsSelection from '../components/partsSelection/PartsSelection';
import UploadPartsFile from '../components/uploadFiles/UploadPartsFile';
import PartsChecker from '../components/uploadFiles/PartsChecker';
import AllOrders from '../components/allOrders/AllOrders';
import PartsComplain from '../components/partsComplain/PartsComplain';
import InsuranceLogin from '../../insurance/components/login/InsuranceLogin';
import InsuranceDashboard from '../../insurance/components/dashboard/InsuranceDashboard';
import OrderProcess from '../../insurance/components/orderProcess/OrderProcess';

export default function RouterPath() { 
  const [expanded, setExpanded] = useState(true);
  
  const location = window.location.pathname;
  const handleToggleSidebar=()=>{
    setExpanded(!expanded);
  }


  return (
    <BrowserRouter>
      {(location === '/' || location === '/signin') ? '' : <Sidebar expanded={ expanded } handleToggleSidebar={handleToggleSidebar} />}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path='/dashboard'>
          <Dashboard expanded ={expanded} setExpanded={setExpanded} />
        </Route>
        <Route path='/create-a-job'>
          <CreateAJob expanded ={expanded} setExpanded={setExpanded} />
        </Route>
        <Route path='/upload-files'>
          <UploadPartsFile expanded ={expanded} />
        </Route>
        <Route path='/parts-checker'>
          <PartsChecker expanded ={expanded} />
        </Route>
        <Route path='/parts-selection'>
          <PartsSelection expanded ={expanded} />
        </Route>
        <Route path='/checkout'>
          <Checkout expanded ={expanded} />
        </Route>
        <Route path='/thank-you-order'>
          <ThankYouOrder expanded ={expanded} />
        </Route>
        <Route path='/order-overview'>
          <OrderOverview expanded ={expanded} />
        </Route>
        <Route path='/all-orders'>
          <AllOrders expanded ={expanded} />
        </Route>
        <Route path='/parts-complaints'>
          <PartsComplain expanded ={expanded} />
        </Route>
        <Route path='/insurance-login'>
          <InsuranceLogin expanded ={expanded} />
        </Route>
        <Route path='/insurance-dashboard'>
          <InsuranceDashboard expanded={expanded} />
        </Route>
        <Route path='/insurance-order-process'>
          <OrderProcess expanded={expanded} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
