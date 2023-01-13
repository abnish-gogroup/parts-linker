
import * as initialStates from '../constants/InitialStates';
import * as actionTypes from "../constants/ActionTypes";

export default function oePaperReadout(state = initialStates.OE_READOUT_INITIAL_STATE, action) {

  switch (action.type) {

    case actionTypes.RESET_OE_READOUT_DATA:
      return initialStates.OE_READOUT_INITIAL_STATE;

    case actionTypes.DECODING_IN_PROGRESS:
      return {
        ...state,
        isDecodeingInProgress: true,
        decodedData: {},
        decodingFlowCompleted: false,
        partsList: []
      };

    case actionTypes.UPDATE_FILE_DATA:
      return {
        ...state,
        file: action.data
      };

    case actionTypes.FETCHING_PARTS_IN_PROGRESS:
      return {
        ...state,
        fetchingPartsInProgress: true
      };

    case actionTypes.FETCHING_PART_COMPLETED:
      return {
        ...state,
        fetchingPartsInProgress: false,
        partsList: action.data
      };

    case actionTypes.IMAGE_DECODING_COMPLETED:
      let response = action.data,
        isSuccess = response && response.status && response.status.status == "SUCCESS" ? true : false,
        isError = response && response.status && response.status.status == "ERROR" ? true : false;
      if (isSuccess) {
        return Object.assign({}, state, {
          decodingFlowCompleted: true,
          isDecodeingInProgress: false,
          decodingttemptFailed: false,
          decodedData: response.payload
        });
      }
      else if (isError) {
        return Object.assign({}, state, {
          decodingFlowCompleted: false,
          isDecodeingInProgress: false,
          decodingttemptFailed: true,
          decodedData: {}
        });
      }
      return Object.assign({}, state, {
        decodingFlowCompleted: false,
        isDecodeingInProgress: false,
        decodingttemptFailed: true,
        decodedData: {}
      });

    default:
      return state;
  }
}