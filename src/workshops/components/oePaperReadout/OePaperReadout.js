import React, { useState, useEffect } from 'react';

import PartsResultLoader from '../../../common/PartsResultsLoader';

import '../../../stylesheets/oePaparReadout.scss';
import { getParameterByName, pushUrlToState, randomIntFromInterval } from '../../helper/Utils';
import classnames from "classnames";

// import ResultPageCard from "./ResultPageCard";
import RecentTable from './RecentTable';

import * as partsCheckerData from '../../constants/partsCheckerData';


function OePaperReadout(props) {

  const { actions, oeReadOutData } = props;

  useEffect(() => {

    // checkForDataFromParams()

  }, []);

  useEffect(() => {
    if (oeReadOutData.partsList && oeReadOutData.partsList.length > 0) {
      updateLoader(false);
    }
  }, [oeReadOutData.partsList]);

  const [normalreadoutType, updateNormalReadoutType] = useState(true);

  const [checkedPartsData, updateCheckedPartsData] = useState([]);

  const [showLoader, updateLoader] = useState(false);

  const translationsData = window.panelConfig.goPartsTranslations.oePaperReadOut;

  function handleInputChange(event) {
    if (event && event.target && event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      actions.oeReadOutAction.updateFileData(file);
    }
  }

  function startDecodingData() {
    if (oeReadOutData && oeReadOutData.file) {
      if (normalreadoutType) {
        actions.oeReadOutAction.tryDecodingData({ file: oeReadOutData.file })
      } else {
        actions.oeReadOutAction.tryAdvanceDecoding({ file: oeReadOutData.file })
      }
    }
  }

  function updateReadoutType(event) {

    actions.oeReadOutAction.resetOEData();

    if (event && event.target && event.target.value === 'normal') {
      updateNormalReadoutType(true)
    } else {
      updateNormalReadoutType(false)
    }
  }

  // function checkForDataFromParams() {
  //   let isRedirectFromPartsChecker = getParameterByName('is_redirect');
  //   if (isRedirectFromPartsChecker) {
  //     updateNormalReadoutType(false);
  //     document.getElementById('oe-readout-type').value = 'advanced';
  //   } else {
  //     actions.oeReadOutAction.resetOEData();
  //   }
  // }

  function startFetchingPartNumbers() {
    updateCheckedPartsData([]);
    updateLoader(true);
    actions.oeReadOutAction.startFetchingPartNumbers(oeReadOutData.file.name);
  }

  function getFormattedData(vin, partNumber, partName) {
    const vinData = partsCheckerData.checkerDataGenerator().filter(element => {
      return element.vin == vin
    });

    const isOENumberValid = partsCheckerData.oeNumberGenerator().filter(element => {
      return element == partNumber
    });

    const checkedPartsData = {
      isVinIdentified: vinData && vinData.length > 0,
      isPartNumberFound: vinData && vinData[0] && vinData[0].oeNumbers && vinData[0].oeNumbers.includes(partNumber) || false,
      isOENumberValid: isOENumberValid && isOENumberValid.length > 0,
      brand: vinData && vinData[0] && vinData[0].brand || '',
      isResultFetched: true,
      partInfo: partNumber,
      vin: vin,
      date: new Date(),
      partName: partName
    }

    return checkedPartsData;

  }

  function checkPartsFit(decodedData) {

    updateLoader(true);
    let finalCheckedData = [];
    actions.oeReadOutAction.fetchingPartsCompleted([])

    setTimeout(() => {
      if (decodedData && decodedData.oeNumbers && decodedData.oeNumbers.length > 0) {
        decodedData.oeNumbers.forEach((oe,index) => {
          let checkedData = getFormattedData(decodedData.VIN, oe, decodedData.partNames[index]);
          finalCheckedData.push(checkedData)
        });
        updateLoader(false);
        updateCheckedPartsData(finalCheckedData)
      }
    }, randomIntFromInterval(4000,7000));

  }

  function showEstimateReadoutData() {
    if(!normalreadoutType && oeReadOutData.decodedData.VIN && oeReadOutData.decodedData.oeNumbers
      && oeReadOutData.decodedData.oeNumbers.length > 0 ) {
        return true;
      }
    return false;
  }

  return (
    <div className="oe-readout-container gp-pt40">
      <div className="oe-reader-heading gp-text28 gp202020 gp-ls02 gp-f300 gp-pb24">
        <span className="gp-lh30">{translationsData.moduleDesc}</span>
        <select className="oe-readout-select gp-ml16 cp" onChange={(e) => updateReadoutType(e)} id="oe-readout-type">
          <option value="normal">Document Readout</option>
          <option value="advanced">Estimate Readout</option>
        </select>
      </div>
      <div className="reader-main-container" >
        <div className="file-upload">
          <div className="p-relative">
            <div className="outer-container">
              <div className={classnames("btn btn-success fileinput-button file-input ibm", {
                  'increse-width': showEstimateReadoutData()
                })}>
                {
                  oeReadOutData.file ? (
                    <span className="gp-text14 gp-f400 gp-202020">{oeReadOutData.file.name}</span>
                  ) : (
                    <span className="gp-text14 gp-f400 gp-202020">{translationsData.uploadText}</span>
                  )
                }
                <input type="file" name="file" onChange={(e) => handleInputChange(e)}
                  autoComplete="off"
                  accept={normalreadoutType ? 'image/*' : 'application/pdf'}
                ></input>
              </div>
              <button className="pi-search-container cp " onClick={(e) => startDecodingData()}>
                {
                  oeReadOutData.isDecodeingInProgress ? (
                    <span className="panel-sprite  white-loader"></span>
                  ) : (
                    <span><i className="fa fa-unlock-alt gp-mr8"></i>{translationsData.decode}</span>
                  )
                }
              </button>
              { showEstimateReadoutData() &&
                <button className={classnames("pi-search-container cp gp-ml20 ", {
                  'wiggle': checkedPartsData && checkedPartsData.length == 0 && !showLoader && !oeReadOutData.partsList.length
                })} onClick={(e) => checkPartsFit(oeReadOutData.decodedData)}>
                  {
                    showLoader ? (
                      <span className="panel-sprite  white-loader"></span>
                    ) : (
                      <span className="gp-text12"><i className="fa fa-cog" aria-hidden="true"></i>   Check all parts fit </span>
                    )
                  }
                </button>
              }
            </div>
            {oeReadOutData.isDecodeingInProgress && (
              <PartsResultLoader />
            )
            }
          </div>
        </div>
        {normalreadoutType && oeReadOutData.file && oeReadOutData.decodingFlowCompleted &&
          <div className="preview-container gp-mt40 d-flex">
            <div className="image-preview w-50">
              {oeReadOutData.decodedData.image_url && <div className="image-wrapper">
                <img className="uploaded-image" src={oeReadOutData.decodedData.image_url} />
              </div>
              }
            </div>
            <div className="decoded-data-preview gp-ml24 tl">
              {oeReadOutData.decodingFlowCompleted && <div className="decoded-data-container gp-p4">
                <div className="decoded-data-heading gp-f500 gp-text16 gp-1E8EA5 gp-lh30 gp-mb20">
                  {translationsData.decodedData}
                </div>
                <div className="decoded-vin">
                  <span className="decoded-key gp-202020 gp-text14">{translationsData.decodedVins}</span>
                  {
                    oeReadOutData.decodedData && oeReadOutData.decodedData.vin_candidates
                    && oeReadOutData.decodedData.vin_candidates.length > 0 &&
                    oeReadOutData.decodedData.vin_candidates.map((vin, index) => (
                      <span className="gp-636363 gp-text12 gp-mr8 gp-mt8" key={index}>
                        {vin}
                      </span>
                    ))
                  }
                </div>
                <div className="decoded-date gp-mt32">
                  <span className="decoded-key gp-202020 gp-text14">{translationsData.decodedDates}</span>
                  {
                    oeReadOutData.decodedData && oeReadOutData.decodedData.date_candidates
                    && oeReadOutData.decodedData.date_candidates.length > 0 &&
                    oeReadOutData.decodedData.date_candidates.map((date, index) => (
                      <span className="gp-636363 gp-text12 gp-mr8 gp-mt8" key={index}>
                        {date}
                      </span>
                    ))
                  }
                </div>
              </div>
              }
            </div>
          </div>
        }
        {!normalreadoutType && oeReadOutData.file && oeReadOutData.decodingFlowCompleted &&
          <div className="preview-outer-container gp-mt40 d-flex">
            {oeReadOutData.decodedData && oeReadOutData.decodedData.VIN && <div className="decoded-data">
              <div className="vin-heading gp-f500 gp-text16">
                <span className="decoded-key gp-202020 gp-text14"> Identified Vin : </span>
                <span className="gp-636363 gp-text12 gp-mr8 gp-mt8"> {oeReadOutData.decodedData.VIN} </span>
              </div>
              <div className="vin-heading gp-f500 gp-text16 gp-mt20">
                <span className="decoded-key gp-202020 gp-text14">Identified Brand : </span>
                <span className="gp-636363 gp-text12 gp-mr8 gp-mt8"> {oeReadOutData.decodedData.brand} </span>
              </div>
              <div className="vin-heading gp-f500 gp-text16 gp-mt20">
                <span className="decoded-key gp-202020 gp-text14"> OE Numbers :  </span>
                <span className="gp-636363 gp-text12 gp-mr8 gp-mt8">
                  {
                    oeReadOutData.decodedData && oeReadOutData.decodedData.oeNumbers
                    && oeReadOutData.decodedData.oeNumbers.length > 0 &&
                    oeReadOutData.decodedData.oeNumbers.map((oeNumber, index) => (
                      <span className="gp-636363 gp-text12 gp-mr8 gp-mt8 oe-chip" key={index}>
                        {oeNumber}
                      </span>
                    ))
                  }
                </span>
              </div>
            </div>
            }
            {!(oeReadOutData.decodedData && oeReadOutData.decodedData.VIN) && <div className="decoding-failed-container tc w-100">
                <div className="image-container">
                  <img height="400px" src="https://d3brnpc5nhvc9v.cloudfront.net/site/static-images/404-error.gif"/> 
                </div>
                <div className="error-message">
                  Some error occured. Please try again after some time !!
                </div>
              </div>
            }
          </div>
        }
      </div>
      <div className="checked-data-container w-92">
        {showEstimateReadoutData() && <div className="table-heading-container p-relative gp-mt40 d-flex justify-space-between">
          {checkedPartsData && checkedPartsData.length > 0 &&
            <>
              <span className="gp-f500 gp-text16 gp-lh22 border-bottom">Parts Checker Data</span>
              <button className="gp-mr8 gp-mt8 pi-search-container cp m-w-140 search-parts-cta wiggle" onClick={(e) => startFetchingPartNumbers()}>
                <span className="gp-text12">
                  <i className="fa fa-search" aria-hidden="true"></i>   Search Parts
                </span>
              </button>
            </>
          }
          {checkedPartsData.length == 0 && oeReadOutData.partsList.length > 0 &&
            <span className="gp-f500 gp-text16 gp-lh22 gp-mb40">
              <i className="gp-mr8 ibm tick-green-circle panel-sprite w-25"></i>Search Results
            </span>}
        </div>
        }
        {!normalreadoutType && checkedPartsData && checkedPartsData.length > 0 &&
          <RecentTable
            actions={actions}
            tableData={checkedPartsData}
          ></RecentTable>
        }
      </div>
      <div className="result-page-container">
        {!normalreadoutType && oeReadOutData.partsList && oeReadOutData.partsList.length > 0 &&
          oeReadOutData.partsList.map((part, partIndex) => {
            return (
              <div className="result-card-outer" key={"fg__part_" + partIndex}>
                {/* <ResultPageCard
                  currentPartData={part}
                  actions={actions}
                  partIndex={partIndex}
                /> */}
              </div>
            )
          })}
      </div>
      { showLoader && <div className="reader-main-container">
        <PartsResultLoader />
      </div>
      }
    </div>
  );
}

export default OePaperReadout;
