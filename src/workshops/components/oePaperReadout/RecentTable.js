import React from "react";
// import * as siteConstants from "../../constants/SiteConstants"
// import classnames from "classnames";
import { getParameterByName, pushUrlToState } from '../../helper/Utils';

// import "../../../../assets/stylesheets/dashboard/partsChecker.scss";
function RecentTable(props) {
//   const { actions, tableData, tableHeading, vehicleInfo } = props;
//   const location = window.location.pathname;
//   console.log("vehicleInfo", vehicleInfo);

//   const translationsData = window.panelConfig.goPartsTranslations.partsChecker;

//   function removeItemFromRecentSearch(data) {
//     let index = tableData.findIndex(
//         (element) =>
//           element.vin === data.vin && element.partNumber === data.partNumber
//       ),
//       dataToUpdate = tableData;

//     if (index >= 0) {
//       dataToUpdate.splice(index, 1);
//       actions.partsCheckerActions.updateRecentSearchHistory(dataToUpdate);
//       localStorage.setItem("recentSearches", JSON.stringify(dataToUpdate));
//     }
//   }

//   function gotoPartsIdentifier(data) {
//     if (data.vin && data.vin.length == 17) {
//       let url = "parts-identifier?vin=" + data.vin;
//       actions.sideBarActions.showPartsIdentifier();
//       pushUrlToState(url);
//     }
//   }

//   function getFormattedTime(dateOfSearch) {
//     if (dateOfSearch) {
//       let date = new Date(dateOfSearch);
//       var hours = date.getHours();
//       var minutes = date.getMinutes();
//       var ampm = hours >= 12 ? "pm" : "am";
//       hours = hours % 12;
//       hours = hours ? hours : 12; // the hour '0' should be '12'
//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       var strTime = hours + ":" + minutes + " " + ampm;
//       return strTime;
//     }
//   }

  return (
    <>recent table</>
//     <div className="parts-checker-container">
//       {location.includes('dashboard') ? 
//       tableData && tableData.length > 0 &&
//         <div className="search-results-container">
//           { tableHeading && <div className="recent-search-heading gp-lh162 gp-f500 gp-text16 gp-mb20" >
//             {tableHeading}
//           </div> }
//           <div className="table-container">

//             <div className="gp-dfr gp-aic gp-jcsb search-results-list-row search-results-list-heading gp-text11 gp-mtext13 gp-c797979 gp-pb8 hidden-xs">
//               <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16 vehicle-cell">
//                 {translationsData.vehicleDetail}
//               </div>
//               <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16  part-cell">
//                 {translationsData.partsInfo}
//               </div>
//               <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16  date-cell">
//                 {translationsData.date}
//               </div>
//               <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16  result-cell">
//                 {translationsData.result}
//               </div>
//               <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16 gp-pr16  result-cell">
//                 {translationsData.other}
//               </div>
//             </div>
//             <div className="row-container">
//               {
//                 tableData.map((recentData, orderIndex) => (
//                   <div className="search-results-list-row-outer p-relative" key={orderIndex}>
//                     <div className="search-results-list-row search-results-list-item gp-dfr gp-jcsb  gp-text13 gp-mtext16 gp-c262626 gp-pb8 gp-pt8 gp-f400">

//                       <div className="column-cell gp-pl16 vehicle-cell" >
//                         <div className="search-result-column-item dfr gp-f600 gp-text12 gp-lh23 gp-1E8EA5">
//                           <span className="gp-f700">{recentData.brand}</span>
//                           {recentData.vin && <span classnames="gp-f600">, VIN: {recentData.vin}</span>}
//                         </div>
//                       </div>

//                       <div className="column-cell gp-pl16 part-cell gp-text12 gp-636363" >
//                         <div className="search-result-column-item dfr">{recentData.partName ? `${recentData.partInfo} - ${recentData.partName}` :
//                         `${recentData.partInfo}`}</div>
//                       </div>
//                       <div className="column-cell gp-pl16 date-cell">
//                         <div className="search-result-column-item dfr gp-636363 gp-text12">{new Date(recentData.date).toDateString()}</div>
//                         <div className="search-result-column-item dfr gp-636363 gp-mt4 gp-text12">{getFormattedTime(recentData.date)}</div>
//                       </div>
//                       <div className="column-cell gp-pl16 result-cell" >
//                         <div className="search-result-column-item dfr">
//                           <span className={classnames("icon-container fa gp-mr12 gp-p4", {
//                             'success-label ': recentData.isPartNumberFound,
//                             'error-label': !recentData.isPartNumberFound && !recentData.isOENumberValid,
//                             'inconclusive-label': recentData.isOENumberValid && !recentData.isPartNumberFound
//                           })}>
//                             {recentData.isPartNumberFound &&
//                               <span>{translationsData.fits}</span>}
//                             {!recentData.isPartNumberFound && !recentData.isOENumberValid &&
//                               <span>{translationsData.doesntFit}</span>}
//                             {!recentData.isPartNumberFound && recentData.isOENumberValid &&
//                               <span>{translationsData.inconclusive}</span>}
//                           </span>
//                           <span className="vin-decoding-text gp-f300 gp-202020 gp-text14 gp-lh22 gp-mtext12">
//                           </span>
//                         </div>
//                       </div>
//                       <div className="column-cell gp-pl16 result-cell">
//                         <div className="search-result-column-item dfr gp-pr32 header-section cp">
//                           <span className="fa fa-ellipsis-v"></span>
//                           <div className="header-section-dd">
//                             <div className="header-section-dd-psuedo">
//                               <div className="header-section-dd-section  actionable copy-2-l cp"
//                                 onClick={(e) => removeItemFromRecentSearch(recentData)}
//                               ><span className="fa fa-trash gp-FE696E gp-text16 gp-mr12"></span> {translationsData.delete}
//                               </div>
//                               <div className="header-section-dd-separator"></div>
//                               <div className="header-section-dd-section  actionable copy-2-l cp"
//                                 onClick={(e) => gotoPartsIdentifier(recentData)}
//                               ><span className="fa fa-external-link gp-1E8EA5 gp-text16 gp-mr12"></span> {translationsData.identifyInPartsIdentifier}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               }
//             </div>
//           </div>
//         </div>
      
//     :
    
//       tableData && tableData.length > 0 && (
//         <div className="search-results-container">
//           {tableHeading && (
//             <div className="recent-search-heading gp-lh162 gp-f500 gp-text16 gp-mb20">
//               {tableHeading}
//             </div>
//           )}
//           <div className="table-container">
//             <div className="gp-dfr gp-aic gp-jcsb search-results-list-row search-results-list-heading gp-text11 gp-mtext13 gp-c797979 gp-pb8 hidden-xs">
//               <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16 vehicle-cell">
//                 {translationsData.vehicleDetail}
//               </div>
//               <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16  part-cell">
//                 {translationsData.partsInfo}
//               </div>
//               <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16  part-cell">
//                 {translationsData.partsDescription}
//               </div>
//               { vehicleInfo.countryCode != siteConstants.ITALY_COUNTRY_CODE ? (
//                 <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16  price-cell">
//                   {translationsData.price}
//                 </div>
//                 ) : null
//               }  

//               <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16  result-cell tac">
//                 {translationsData.result}
//               </div>
//               {location.includes("dashboard") ? (
//                 <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16  date-cell">
//                   {translationsData.date}
//                 </div>
//               ) : (
//                 <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16  date-cell">
//                   {translationsData.correctPartNumber}
//                 </div>
//               )}
//               {location.includes("dashboard") ? (
//                 <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16 gp-pr16  action-cell">
//                   {translationsData.other}
//                 </div>
//               ) : (
//                 <div className="gp-c636363 gp-f600 gp-text12 column-cell gp-lh17 gp-pl16 gp-pr16  action-cell">
//                   {translationsData.action}
//                 </div>
//               )}
//             </div>
//             <div className="row-container">
//               {console.log("tabledata", tableData)}
//               {tableData.map((recentData, orderIndex) => (
//                 <div
//                   className="search-results-list-row-outer p-relative"
//                   key={`${orderIndex}${recentData.brand}`}
//                 >
//                   {console.log("recentdata", recentData)}

//                   {recentData &&
//                     recentData.partInfo.map((partsData, index) => (
//                       <div
//                         key={partsData.oe_number}
//                         className="search-results-list-row search-results-list-item gp-dfr gp-jcsb  gp-text13 gp-mtext16 gp-c262626 gp-pb8 gp-pt8 gp-f400"
//                       >
//                         <div className="column-cell gp-pl16 vehicle-cell">
//                           <div className="search-result-column-item dfr gp-f600 gp-text12 gp-lh23 gp-1E8EA5">
//                             <span className="gp-f700">{recentData.brand}</span>
//                             {recentData.vin && (
//                               <span classnames="gp-f600">
//                                 , VIN: {recentData.vin}
//                               </span>
//                             )}
//                           </div>
//                         </div>

//                         <div className="column-cell gp-pl16 part-cell gp-text12 gp-636363">
//                           <div className="search-result-column-item dfr">
//                             {partsData.hasOwnProperty("oe_number")
//                               ? partsData.oe_number
//                               : ""}
//                           </div>
//                         </div>

//                           <div className="column-cell gp-pl16 part-cell gp-text12 gp-636363">
//                             <div className="search-result-column-item dfr">
//                               {partsData.part_info &&
//                               partsData.part_info.hasOwnProperty(
//                                 "part_description"
//                               )
//                                 ? partsData.part_info.part_description
//                                 : ""}
//                             </div>
//                           </div>

//                           {
//                             vehicleInfo.countryCode != siteConstants.ITALY_COUNTRY_CODE ? (
//                             <div className="column-cell gp-pl16 price-cell gp-text12 gp-636363">
//                             <div className="search-result-column-item dfr">
//                               {partsData.part_info && partsData.part_info.price}
//                             </div>
//                           </div>
//                           ) : null
//                           }
                        
//                         <div className="column-cell gp-pl16 result-cell">
//                           <div className="search-result-column-item dfr">
//                             <span
//                               className={classnames(
//                                 "icon-container fa gp-mr12 gp-p4 resullt-message pt-14",
//                                 {
//                                   "success-label ":
//                                     partsData.part_info.oe_status == 0,
//                                   "error-label":
//                                     partsData.part_info.oe_status == 1,
//                                   "inconclusive-label":
//                                     partsData.part_info.oe_status == 2,
//                                 }
//                               )}
//                             >
//                               <span>
//                                 {partsData.part_info &&
//                                 partsData.part_info.message
//                                   ? partsData.part_info.message
//                                   : ""}
//                               </span>
//                             </span>
//                             <span className="vin-decoding-text gp-f300 gp-202020 gp-text14 gp-lh22 gp-mtext12"></span>
//                           </div>
//                         </div>
//                         {location.includes("dashboard") ? (
//                           <div className="column-cell gp-pl16 date-cell">
//                             <div className="search-result-column-item dfr gp-636363 gp-text12">
//                               {new Date(recentData.date).toDateString()}
//                             </div>
//                             <div className="search-result-column-item dfr gp-636363 gp-mt4 gp-text12">
//                               {getFormattedTime(recentData.date)}
//                             </div>
//                           </div>
//                         ) : (
//                           <div className="column-cell gp-pl16 date-cell">
//                             <div className="search-result-column-item dfr gp-636363 gp-text12">
//                               {partsData.part_info &&
//                               partsData.part_info.correct_oe_number
//                                 ? partsData.part_info.correct_oe_number
//                                 : ""}
//                             </div>
//                           </div>
//                         )}

//                         <div className="column-cell gp-pl16 action-cell">
//                           {location.includes("dashboard") ? (
//                             <div className="search-result-column-item dfr gp-pr32 header-section cp">
//                               <span className="fa fa-ellipsis-v"></span>
//                               <div className="header-section-dd">
//                                 <div className="header-section-dd-psuedo">
//                                   <div
//                                     className="header-section-dd-section  actionable copy-2-l cp"
//                                     onClick={(e) =>
//                                       removeItemFromRecentSearch(recentData)
//                                     }
//                                   >
//                                     <span className="fa fa-trash gp-FE696E gp-text16 gp-mr12"></span>{" "}
//                                     {translationsData.delete}
//                                   </div>
//                                   <div className="header-section-dd-separator"></div>
//                                   <div
//                                     className="header-section-dd-section  actionable copy-2-l cp"
//                                     onClick={(e) =>
//                                       gotoPartsIdentifier(recentData)
//                                     }
//                                   >
//                                     <span className="fa fa-external-link gp-1E8EA5 gp-text16 gp-mr12"></span>{" "}
//                                     {translationsData.identifyInPartsIdentifier}
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           ) : (
//                             <div className="search-result-column-item dfr gp-pr32 header-section cp">
//                               <div
//                                 className="header-section-dd-section  actionable copy-2-l cp"
//                                 onClick={(e) =>
//                                   removeItemFromRecentSearch(recentData)
//                                 }
//                               >
//                                 <span className="fa fa-trash gp-FE696E gp-text16 gp-mr12"></span>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
  );
}

export default RecentTable;
