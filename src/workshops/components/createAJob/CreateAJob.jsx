import React, { useState, useEffect } from 'react';
import '../../../stylesheets/createAJob.scss';
import Sidebar from '../../../common/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


function CreateAJob(props) {
  const { expanded, setExpanded } = props;
  const [isAltAddress, setIsAltAddress] = useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const goToJobSearchPage = () => {
    window.history.pushState({}, '', '/checkout');
    window.location.reload();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const goToUploadPartsChecker=()=>{
    window.history.pushState({}, '', '/upload-files');
    window.location.reload();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleDeliveryChange = () => {
    setIsAltAddress(!isAltAddress);
  }

  return (
    <div className={ expanded ? 'create_a_job_cont pd_240' : 'create_a_job_cont pd_140'}>
      <div className="job_title">
        <div className='title_text'>Neuen Auftrag erstellen</div>
        <button className='upload_btn' onClick={goToUploadPartsChecker}>Teileliste hochladen</button>
      </div>
      <div className="create_job_section">
        <form className='row g-3 mb-5 customer_form'>
          <div className='col-12'>
            <label className='form-label'>Auftragsnummer</label>
            <input className='form-control' placeholder='46820492' />
          </div>
          <div className='col-12'>
            <label className='form-label'>Kundenname</label>
            <input className='form-control' placeholder='Max Mustermann' />
          </div>
          <div className='col-6'>
            <label className='form-label'>Marke</label>
            <input className='form-control' placeholder='VW' />
          </div>
          <div className='col-6'>
            <label className='form-label'>Model</label>
            <input className='form-control' placeholder='Golf' />
          </div>
          <div className='col-6'>
            <label className='form-label'>FIN</label>
            <input className='form-control' placeholder='WDX03194G4921' />
          </div>
          <div className='col-6'>
            <label className='form-label'>Nummernschild</label>
            <input type='email' className='form-control' placeholder='A-BC 1234' />
          </div>

          <div>
            <span>Versicherungsfall</span><br></br>
            {/* <div className='radio_item'> */}
            <input type='radio' value='Yes' name='insurance' className='radio_class_i' defaultChecked />
            <label className='radio_label_class'>Ja</label>
            <input type='radio' value='No' name='insurance' className='radio_class_i' />
            <label className='radio_label_class'>Nein</label>
            {/* </div> */}
          </div>

          <div className='col-6'>
            <label className='form-label'>Versicherungsnummer</label>
            <input className='form-control' placeholder='4829412' />
          </div>
          <div className='col-6'>
            <label className='form-label'>Name der Versicherung</label>
            <input className='form-control' placeholder='HUK-COBURG' />
          </div>

          <div>
            <span>Flotten Fall</span><br></br>
            <input type='radio' value='Yes' name='fleet' className='radio_class_i' />
            <label className='radio_label_class'>Ja</label>
            <input type='radio' value='No' name='fleet' className='radio_class_i' defaultChecked />
            <label className='radio_label_class'>Nein</label>
          </div>

          <div className='col-6'>
            <label className='form-label'>Name der Flotte</label>
            <input className='form-control' placeholder='Name' />
          </div><br></br>
          <div className='col-6'>

          </div>
          <div className='col-6'>
            <label className='form-label'><FontAwesomeIcon icon={faCalendar} /> Start Datum</label>
            <input className='form-control' type='text' placeholder='March, 3' /></div>
          <div className='col-6'>
            <label className='form-label'><FontAwesomeIcon icon={faCalendar} />Geplante Fertigstellung</label>
            <input className='form-control' type='text' placeholder='March, 25' />
          </div>
          <span>Lieferadresse</span><br></br>
          <div onChange={handleDeliveryChange}>
            <input type='radio' value='default' name='address' className='radio_class_i' defaultChecked />
            <label className='radio_label_class'>Standard</label>
            <input type='radio' value='alternative_addr' name='address' className='radio_class_i' />
            <label className='radio_label_class'>Alternative Lieferadresse</label>
          </div>
          {isAltAddress ? <textarea /> : ''}
        </form>
      </div>
      <button className='save_btn' onClick={goToJobSearchPage}>Speichern</button>
    </div>
  )
}

export default CreateAJob;
