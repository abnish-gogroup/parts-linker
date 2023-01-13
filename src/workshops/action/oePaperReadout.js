import * as actionTypes from '../constants/ActionTypes';
import * as endpoints from '../constants/Endpoints';
import * as partsCheckerData from '../constants/partsCheckerData';
import {randomIntFromInterval} from '../helper/Utils'; 

function getAdvancedData(fileName) {
  switch( fileName ) {
    case 'estimate.pdf' :
      return {
        VIN: 'TMBJY16Y264555064',
        brand: 'SKODA',
        oeNumbers: ['6Y0807221E','6Y0853661 739','6Y0853668B','6Y0853678GRU','1U0853621C MEL'],
        partNames: [ 'Front Bumper Cover','Radiator Grille','Decorative grille M','Frame Radiator Grille','Emblem Front']
      }
    default : 
      return {}

  }
}

export function decodingInProgress(data) {
  return { type: actionTypes.DECODING_IN_PROGRESS, data };
}

export function resetOEData(data) {
  return { type: actionTypes.RESET_OE_READOUT_DATA, data };
}

export function updateFileData(data) {
  return { type: actionTypes.UPDATE_FILE_DATA, data };
}

export function fetchingPartsInProgress(data) {
  return { type: actionTypes.FETCHING_PARTS_IN_PROGRESS, data };
}

export function fetchingPartsCompleted(data) {
  return { type: actionTypes.FETCHING_PART_COMPLETED, data };
}

export function onDecodingCallCompleted(data) {
  return { type: actionTypes.IMAGE_DECODING_COMPLETED, data };
}

export function tryDecodingData(data) {
  return function (dispatch) {

    const loginToken          = localStorage.getItem( "loginAppToken");

    dispatch(decodingInProgress())

    let headers = {
      'X-CUSTOMER-TOKEN': loginToken
    };
    let file = data.file;

    let fd = new FormData();

    fd.append('file', file);

    data && data.file && fetch(endpoints.OCR_DECODER_API, {
      method: 'post',
      headers: headers,
      body: fd
    })
      .then(response => response.json())
      .then(jsonResponse => {

        dispatch(onDecodingCallCompleted(jsonResponse));

      })
      .catch(ex => dispatch(onDecodingCallCompleted({ ex })));
  }
}

export function startFetchingPartNumbers(fileName) {
  return function (dispatch) {

    dispatch(fetchingPartsInProgress())

    let data = partsCheckerData.partsList(fileName);

    setTimeout(() => {
      dispatch(fetchingPartsCompleted(data));
    }, randomIntFromInterval(3000,5000));
  }
}

export function tryAdvanceDecoding(data) {
  return function (dispatch) {

    dispatch(decodingInProgress())

    let file = data.file;

    let decodedData = getAdvancedData(file.name);

    let jsonResponse = {
      payload : decodedData,
      status: {
        code: "001",
        message: "",
        status: "SUCCESS"
      }
    }
    setTimeout(() => {
      dispatch(onDecodingCallCompleted(jsonResponse));
    }, randomIntFromInterval(3000,5000));
  }
}