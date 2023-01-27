import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateAJob from '../components/createAJob/CreateAJob';
import Login from '../workshop_auth/Login';
import Dashboard from '../components/dashboard/Dashboard';
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
import ProtectedRoute from './ProtectedRoute';
import PageNotFound from './PageNotFound';

export default function RouterPath() {

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path='/dashboard' element={<ProtectedRoute Component={Dashboard} />} />
      <Route path='/create-a-job' element={<ProtectedRoute Component={CreateAJob} />} />
      <Route path='/upload-files' element={<ProtectedRoute Component={UploadPartsFile} />} />
      <Route path='/parts-checker' element={<ProtectedRoute Component={PartsChecker} />} />
      <Route path='/parts-selection' element={<ProtectedRoute Component={PartsSelection} />} />
      <Route path='/checkout' element={<ProtectedRoute Component={Checkout} />} />
      <Route path='/thank-you-order' element={<ProtectedRoute Component={ThankYouOrder} />} />
      <Route path='/order-overview' element={<ProtectedRoute Component={OrderOverview} />} />
      <Route path='/all-orders' element={<ProtectedRoute Component={AllOrders} />} />
      <Route path='/parts-complaints' element={<ProtectedRoute Component={PartsComplain} />} />
      <Route path='/insurance-login' element={<ProtectedRoute Component={InsuranceLogin} />} />
      <Route path='/insurance-dashboard' element={<ProtectedRoute Component={InsuranceDashboard} />} />
      <Route path='/insurance-order-process' element={<ProtectedRoute Component={OrderProcess} />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
