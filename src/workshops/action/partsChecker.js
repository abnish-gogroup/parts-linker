import * as actionTypes from "../constants/ActionTypes";
import * as partsCheckerData from "../constants/partsCheckerData";
import * as endpoints from '../constants/Endpoints';
import * as utils from '../helper/Utils';

export function updateInputInfo(data) {
  return { type: actionTypes.UPDATE_INPUT_INFO, data };
}

export function startFetchingParts(data) {
  return { type: actionTypes.START_FETCHING_FOR_PARTS, data };
}

export function updateRecentSearchHistory(data) {
  return { type: actionTypes.UPDATE_RECENT_SEARCH_HISTORY, data };
}

export function updateCheckerResult(data) {
  return { type: actionTypes.UPDATE_CHECKER_DATA, data };
}

const location = window.location.pathname;

let headers = utils.getPanelHeadersForPartsChecker();

if (window.panelConfig.headerAuth) {
  headers.Authorization = window.panelConfig.headerAuth || "";
}

export function startCheckingForParts(data) {
  return !location.includes("dashboard")
    ? function (dispatch) {
        let partNumbersArray = data.partNumber
          .split(",")
          .map((value) => value.trim());

        const vin = data.vin,
          partNumber = data.partNumber;

        dispatch(startFetchingParts());

        let oe_number = "";
        for (let i = 0; i < partNumbersArray.length; i++) {
          oe_number += "&oe_numbers[]=" + partNumbersArray[i];
        }

        let url = endpoints.GP_PARTS_CHECKER;
        let queryString = `?fin=${vin}${oe_number}`;

        fetch(url + queryString, {
          method: "POST",
          headers: headers,
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            let response = jsonResponse;

            if ((response && response.message == "unauthorized") ||
              (response &&
                response.status &&
                response.status.status === "ERROR") ||
              (response &&
                response.payload &&
                response.payload.data &&
                response.payload.data.vin_status == 1)
            ) {
              const checkedPartsData = {
                isVinIdentified: false,
                isPartNumberFound: false,
                isOENumberValid: false,
                brand: "",
                isResultFetched: true,
                partNumber: partNumbersArray,
                isError: true,
                errorMsg: response.message ||
                  response.status.message || response.payload.data.message,
                vin: vin,
                isSuperseded: false,
              };
              dispatch(updateCheckerResult(checkedPartsData));
            } else {
              let isVin =
                  response &&
                  response.payload &&
                  response.payload.data.vin_status == 0,
                isPartNumber = partNumbersArray && partNumbersArray.length > 0,
                isOeNumberValid =
                  response &&
                  response.payload &&
                  response.payload.data.oe_numbers.map(
                    (status) => status.part_info.oe_status
                  ),
                brandName =
                  response &&
                  response.payload &&
                  response.payload.data.vehicle_info.make +
                    "-" +
                    response.payload.data.vehicle_info.model,
                isOeNumber =
                  (isOeNumberValid && isOeNumberValid.includes(1)) ||
                  (isOeNumberValid && isOeNumberValid.includes(2)),
                isSuperseded =
                  response &&
                  response.payload &&
                  response.payload.data.oe_numbers.map((oeNumber) =>
                    oeNumber.part_info.hasOwnProperty("correct_oe_number")
                  ),
                countryCode = response && 
                  response.payload &&
                  response.payload.data.country_code;

              const checkedPartsData = {
                isVinIdentified: isVin,
                isPartNumberFound: isPartNumber || false,
                isOENumberValid: isOeNumberValid,
                brand: brandName || "",
                isResultFetched: true,
                isError: false,
                partNumber: partNumbersArray,
                vin: vin,
                isOeNumber: isOeNumber,
                vehicleInfo:
                  response && response.payload && response.payload.data,
                isSuperseded: isSuperseded[0],
                countryCode: countryCode
              };
              dispatch(updateCheckerResult(checkedPartsData));
            }
          })
          .catch((ex) => {
            console.log(ex);
          });
      }
    : function (dispatch) {
        const vin = data.vin,
          partNumber = data.partNumber;

        dispatch(startFetchingParts());

        const vinData = partsCheckerData
          .checkerDataGenerator()
          .filter((element) => {
            return element.vin == vin;
          });

        const isOENumberValid = partsCheckerData
          .oeNumberGenerator()
          .filter((element) => {
            return element == partNumber;
          });

        const checkedPartsData = {
          isVinIdentified: vinData && vinData.length > 0,
          isPartNumberFound:
            (vinData &&
              vinData[0] &&
              vinData[0].oeNumbers &&
              vinData[0].oeNumbers.includes(partNumber)) ||
            false,
          isOENumberValid: isOENumberValid && isOENumberValid.length > 0,
          brand: (vinData && vinData[0] && vinData[0].brand) || "",
          isResultFetched: true,
          partNumber: partNumber,
          vin: vin,
        };
        setTimeout(() => {
          dispatch(updateCheckerResult(checkedPartsData));
        }, utils.randomIntFromInterval(3000, 5000));
      };
}
