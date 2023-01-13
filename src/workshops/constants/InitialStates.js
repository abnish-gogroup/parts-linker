import * as siteConstants from './SiteConstants';
import { SIDEBAR_SERVICE_OVERVIEW } from "../constants/SiteConstants";

export const REGISTER_INITIAL_STATE = {
  email: "",
  password: "",
  name: "",
  phone: "",
  comp_name: "",
  address:"",
  plz: "",
  city: "",
  country: "",
  validationError: [],
  showRegisterPage: false,
  istncCheckboxError: false,
  isTncChecked: false,
  showLoginPage: false,
  showForgetPasswordPage: false,
  registrationInProgress: false,
  registrationFlowComplete: false,
  registrationAttemptFailed: false,
  showResetPasswordPage: false
};

export const LOGIN_INITIAL_STATE = {
  email: "",
  password: "",
  confirm_password: "",
  validationError: [],
  loginInProgress: false,
  loginAttemptFailed: false,
  loginFlowComplete: false,
  forgotPasswordInProgress: false,
  forgotPWDAttemptFailed: false,
  forgotPWDFlowComplete: false,
  resetPwdInProgress: false,
  resetFlowComplete: false,
  resetAttemptFailed: false
};

export const SIDEBAR_INITIAL_STATE = {
  activeSection: siteConstants.SIDEBAR_SERVICE_OVERVIEW
}

export const PARTS_CHECKER_INITIAL_STATE = {
  isFetchingParts: false,
  resultantData: {},
  recentSearchHistory: [],
  vin: '',
  partNumber: '' || [],
  isError: false
}

export const OE_READOUT_INITIAL_STATE = {
  isDecodeingInProgress: false,
  decodingFlowCompleted: false,
  decodingttemptFailed: false,
  decodedData: {},
  file: '',
  fetchingPartsInProgress: false,
  partsList: []
}

export const PARTS_INITIAL_STATE = {
  showLoader: false,
  showHomePage: true,
  showResultsPage: false,
  identifiedVehicleInfo: {},
  gtVehicleInfo: {},
  verifyingFin: false,
  finValidated: false,
  apiError: [],
  finError: [],
  serviceListToBeParsed:[],
  showPartsDropdown: false,
  fetchingParts: false,
  searchInput: "",
  partsListMap : {},
  service: [],
  selectedBrand: "",
  showBrandSelection: false,
  searchOEObject: null,
  searchOEObjectMap: {},  
  licencePlateIdentified: false,
  licenseDecodedData: {},
  partsList: [],
  enablePartsResultsListing: false,
  graphicSearchConfig: {},
  showGraphicSearch: false

};

export const PARTS_SEARCH_INITIAL_STATE = {
  licencePlateIdentified: false,
  licenseDecodedData: {},
  gtMotiveEstimateId: "",
  identifiedVehicleInfo: {},
  gtVehicleInfo: {},
  showInputLoader: false,
  verifyingFin: false,
  finValidated: false,
  serviceList: [],
  finError: '',
  engineCodes: [],
  searchObj: {
                finNumber: "",
                selectedBrand: "",
                searchedText: "",
                operationalList: [],
                oeNumber: ""
             },
  graphicSearchConfig: {},
  showPartsSelector: false,
  selectedPartsArray: [],
  selectedPartsMap: {}
};

export const PART_ORDERS_INITIAL_STATE = {
  showList: true,
  showOverview: false,
  orderList: [],
  fetchingPartOrderList: true,
  currentOrder: null,
  filters: {
    
  }
}

export const WATCHER = {
  subscriptions: {},
};
