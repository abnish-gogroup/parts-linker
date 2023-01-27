import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../common/Sidebar';

function ProtectedRoute(props) {
  const { Component } = props;
  const [expanded, setExpanded] = useState(true);

  const location = window.location.pathname;
  const handleToggleSidebar = () => {
    setExpanded(!expanded);
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem('loginDetails')) {
      navigate('/');
    }
  }, []);

  return (
    <>
      {(location === '/') ? '' :
        <Sidebar expanded={expanded} handleToggleSidebar={handleToggleSidebar} />}
      <Component expanded={expanded} setExpanded={setExpanded} />
    </>
  )
}

export default ProtectedRoute;
