import React from 'react';
import '../../../stylesheets/commonStyles.scss';
import '../../../stylesheets/login.scss';

function InsuranceLogin() {
  let url = '/insurance-dashboard';
  const handleSignin = (e) => {
    e.preventDefault();
    window.history && window.history.pushState({}, '', url);
    window.location.reload();
  };

  // const goToRegistrationPage = () => {
  //   window.history && window.history.pushState({}, '', '/registration');
  //   window.location.reload();
  // };

  // const goToForgotPassword = () => {
  //   window.history.pushState({}, '', '/forgot-password');
  //   window.location.reload();
  // };

  return (
    <div className='main_container_login'>
      <div className='txt_c padt_85 dfx'>
        <img
          src='https://d3brnpc5nhvc9v.cloudfront.net/site/static-images/goparts-logo.png'
          className='logo_size mr_10'
        />
        <span className='theme_clr fs_30 ls_1'>Versicherung</span>
      </div>
      <div className='sign_in_cont fs_30 mart_50'>
        <div className='signin_txt cb_262626'>Anmelden</div>
        <small className='signin_desc'>Für die Bestellung von Autoteilen werden Ihre Log-in Daten benötigt</small>
      </div>
      <div className='login_cont'>
        <form className='registration_form cb_262626 fs_14'>
          <div className='dreg_flex'>
            <label className='form_label fs_16 fw_500'>Email-Adresse</label>
            <input className='input_box' />
          </div>
          <div className='dreg_flex fs_16 fw_500'>
            <label className='form_label'>Passwort</label>
            <input className='input_box' />
          </div>
          <small
            className='forgot_password cp fs_12 theme_clr'
          // onClick={goToForgotPassword}
          >
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

export default InsuranceLogin;
