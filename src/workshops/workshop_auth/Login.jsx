import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../stylesheets/commonStyles.scss';
import '../../stylesheets/login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [userCred, setUserCred] = useState({ userName: '', password: '' });
  const [isEye, setIsEye] = useState(false);
  const [isError, setIsError] = useState({ userName: false, password: false });
  const userLoginDetails = { userName: 'goparts', password: 'goparts@543&' };
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('loginDetails')) {
      navigate('/dashboard');
    }
  }, []);

  // window.onbeforeunload = closingCode;
  // function closingCode(){
  //   window.localStorage.removeItem('loginDetails');
  //   return null;
  // }

  const handleSignin = (e) => {
    e.preventDefault();
    if (userLoginDetails.userName === userCred.userName && userLoginDetails.password === userCred.password) {
      window.localStorage.setItem('loginDetails', true);
      navigate('/dashboard');
    }
    else if (userLoginDetails.userName === userCred.userName && userLoginDetails.password !== userCred.password) {
      setIsError({ ...isError, password: true })
    }
    else if (userLoginDetails.userName !== userCred.userName && userLoginDetails.password === userCred.password) {
      setIsError({ ...isError, userName: true })
    }
    else {
      setIsError({ userName: true, password: true });
    }
  };

  const handleChange = (e) => {
    setIsError(false);
    setUserCred({ ...userCred, [e.target.name]: e.target.value })
  }

  const handleTogglePassword = () => {
    setIsEye(!isEye);
  }

  return (
    <div className='main_container_login'>
      <div className='txt_c padt_85 dfx'>
        <img
          src='https://d3brnpc5nhvc9v.cloudfront.net/site/static-images/goparts-logo.png'
          className='logo_size mr_10'
        />
        <span className='theme_clr fs_30 ls_1'>Werkstatt</span>
      </div>
      <div className='sign_in_cont fs_30 mart_50'>
        <div className='signin_txt cb_262626'>Anmelden</div>
        <small className='signin_desc'>Für die Bestellung von Autoteilen werden Ihre Log-in Daten benötigt</small>
      </div>
      <div className='login_cont'>
        <form className='registration_form cb_262626 fs_14'>
          <div className='dreg_flex'>
            <label className='form_label fs_16 fw_500'>Email-Adresse</label>
            <input className={isError.userName ? 'border_red input_box' : 'input_box'}
              name='userName'
              value={userCred.userName}
              onChange={handleChange}
            />
          </div>
          <div className='dreg_flex fs_16 fw_500'>
            <label className='form_label'>Passwort</label>
            <div className='dfx'>
              <input className={isError.password ? 'border_red input_box prl' : 'input_box prl'}
                type={isEye ? 'text' : 'password'}
                name='password'
                value={userCred.password}
                onChange={handleChange}
              />
              {isEye ? <FontAwesomeIcon icon={faEye} onClick={handleTogglePassword} className='eye_style' /> : <FontAwesomeIcon icon={faEyeSlash} onClick={handleTogglePassword} className='eye_style' />}
            </div>
          </div>
          <small
            className='forgot_password cp fs_12 theme_clr'>
            Passwort vergessen?
          </small>
          <div className='mt-1'>
            <button
              className='btn btn-primary cp'
              onClick={(e) => handleSignin(e)}
            >
              Anmelden
            </button>
          </div>
        </form>
        <div className='l_line'>
          <small className='orr'>Oder</small>
        </div>
        <button className='google_btn'>
          <img
            src='https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg'
            className='google_logo'
            alt='google_logo'
          />
          <span>Melde dich an mit Google</span>
        </button>
        <div className='new_user pdb_50'>
          <span className='mr_3'>Neu bei Goparts? Registriere deinen</span>
          <span className='cp theme_clr'>Account</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
