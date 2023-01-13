import React, { useState, useRef } from 'react';
import '../../../stylesheets/partsChecker.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faUpload, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import PartsResultTable from './PartsResultTable';
import Loader from '../Loader';
import PartsResultLoader from '../../../common/PartsResultsLoader';

function PartsChecker(props) { 
  const { expanded } = props;
  const [showResultTable, setShowResultTable] = useState(false);
  const hiddenFileInput = useRef(null);
  const [showImage, setShowImage] = useState(false);
  const [imageFile, setImageFile] = useState('');
  const [orderValue, setOrderValue] = useState('');
  const [showTableLoader, setShowTableLoader] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleCheckAllParts=async()=>{
    setSpinner(true);
    setShowTableLoader(true);
    closeLoaderIn5Seconds();
    // window.history.pushState({}, '', '/parts-checker');
    // window.location.reload();
  }

const closeLoaderIn5Seconds = () => 
    setTimeout(() => {
      setSpinner(false);
      setShowTableLoader(false);
      setShowResultTable(true);
      // window.history.pushState({}, '', '/parts-checker');
      // window.location.reload();
    }, 5000);

  // const handleClick = (e) => {
	// 	hiddenFileInput.current.click();
	// }

  const handleChange = (event) => {
    console.log('upload file')
		const fileUploaded = event.target.files[0];
		setImageFile('http://static-assets-goparts.s3.amazonaws.com/static-images/damage_car.jpeg');
		setShowImage(true);
		// setValueInSessionStorage('imageFile', 'http://static-assets-goparts.s3.amazonaws.com/static-images/damage_car.jpeg');
	}

  const handleInputChange=(e)=>{
   setOrderValue(e.target.value);
   console.log('e.target', e.target.value);
   window.localStorage.setItem('orderValue', e.target.value);
  }

  return (
    <div className={ expanded ? "parts_checker_result_cont pd_240" : "parts_checker_result_cont pd_140" }>
      <div className="parts_checker_text fs_30">PartsChecker</div>
      <div className="parts_checker_card">
        <div className="parts_name fw_600 ls_7">Frontschaden - Stossfänger vorne</div>
        <div className="parts_c_desc">
          <div className="parts_c_model">
            <div className='fs_12'>Model: <span className="model_name">Skoda Fabia</span></div>
            <div className='fs_12'>Kunde: <span className="cust_name">A. Gabco</span></div>
            <div className='fs_12'>Nummernschild:<span className="number_plate_c">F-TC 154</span></div>
          </div>
          <div className="parts_c_date">
            <div className='fs_12'>Start Datum: <span className="start_date_c">19.12.2022</span></div>
            <div className='fs_12'>Fertigstellung: <span className="end_date_c">21.12.2022</span></div>
            <div className='fs_12'>Auftragsnummer: <input className='order_input' onChange={handleInputChange} value={orderValue} /></div>
          </div>
          <div className='mrgl_30'>
          {showImage ? <img src={imageFile} className='placeholder_img ml_10' /> :
          <div className="box-fileupload mr_10 cp">
                <input type="file" id="fileId" className="file-upload-input cp" name="files" ref={hiddenFileInput} onChange={handleChange} />
                <label htmlFor="fileId" className="file-upload-btn cp"><FontAwesomeIcon icon={faCloudArrowUp}  /></label>
            </div> }
          </div>
          {showImage ? '' :<div className='fs_12'>Bilder hochladen</div>}

        </div>
        <div className="file_readable_data">
          <div className="file_name fs_14"><FontAwesomeIcon icon={faFile} className='pdr_10' />estimate.pdf</div>
          <div className="cb_262626 fw_600 fs_14 fcapt">Identifizierte FIN: <span className="clr_8692A6 pdl_10 fw_400">TMBJY16Y264555064</span></div>
          <div className="cb_262626 fw_600 fs_14 fcapt">Identifizierte Marke: <span className="clr_8692A6 pdl_10 fw_400 fs_14">SKODA</span></div>
          <div className="oe_numbers_cont"><span className='cb_262626 fw_600 pdr_10 fs_14 fcapt'>OE Nummern:</span>
            <div>6Y0807221E</div>
            <div>6Y0853661 739</div>
            <div>6Y0853668B</div>
            <div>6Y0853678GRU</div>
            <div>1U0853621C MEL</div>
          </div>
        </div>
      </div>
      { showResultTable ?
      <PartsResultTable /> : 
      <div className='tar mrt_40'>
        <button className='check_all_parts' onClick={handleCheckAllParts}>Alle Teile überprüfen</button>
        </div> }
        <div className='mt_40'>{showTableLoader ? <PartsResultLoader /> : ''}</div>
    </div>
  )
}

export default PartsChecker;
