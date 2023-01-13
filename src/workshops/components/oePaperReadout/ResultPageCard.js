// import React from 'react';

// import '../../../stylesheets/resultPageCard.scss';

// // import { openCalendlyView } from '../../helper/Utils';

// function ResultPageCard(props) {

//   let {currentPartData, partsData, cartData, multiCartData, partsSearchData, actions, partIndex, profileData, searchHistory } = props;


//   const translationsData = window.panelConfig.goPartsTranslations.resultPageCard



//   function getPartNumberToDisplay() {
//     let returnText = currentPartData.part_number;

//     returnText = returnText.slice(0, -4) + "****";

//     returnText += " - " + currentPartData.description;

//     return returnText;
//   }

//   return (
//     <div className="part-card-main-container cblk2">
//       <div className="top-section-container">
//         <div className="top-section">
//           <div className="name-tag-container">
//             <div className="part-number-tag-row">
//               <div className="copy-1-m order-code ibt">{ getPartNumberToDisplay( ) }</div>

//               { currentPartData.total_quantity > 0 ? (
//                   <div className="copy-3-m ibt tag-container in-stock"> 
//                     {translationsData.partStatusAvailable}
//                   </div>
//                 ):(
//                   <div className="copy-3-m ibt tag-container later-days gp-mt12 gp-mb8">
//                     {translationsData.partStatusLaterDays}
//                   </div>
//                 )
//               }
//             </div>
//             <div className="copy-4-l-nr part-name">{currentPartData.brand}</div>
//           </div>
//           <div className="price-container">
//             <div>
//               { currentPartData.list_price && (
//                   <div className="copy-3-m gp-c262626 gp-pb4">
//                     {translationsData.sellingPriceText + ' : ' + (currentPartData.list_price)}
//                   </div>
//                 )
//               }
//               <div className="copy-4-m-nr buy-price gp-c0574E4 gp-mt12">
//                 {translationsData.partPriceText + ' : ' + (currentPartData.price)}
//               </div>
//             </div>
//           </div>
//         </div> 
//         <div className="delivery-options gp-pt12">
//           { currentPartData.total_quantity > 0 ? (
//               <span className="db gp-text11 gp-c262626 gp-fsi gp-ls03" >{ translationsData.fastDeliveryText}</span>
//             ) : (
//               <span className="db gp-text11 gp-c262626 gp-fsi gp-ls03" >{ translationsData.lateDeliveryText}</span>
//             )
//           }

//           { !currentPartData.total_quantity && ( 
//               <div className="request-fast-delivery gp-pt12 cp">
//                 <span className="ibm gp-text11 fast-track-text">{ translationsData.fastReqText}</span>
//                 {/* <span className="gp-text11 cp delivery-fast-btn gp-f300" onClick={openCalendlyView}>{translationsData.fastReqBtn}</span>   */}
//               </div>
//             )
//           }
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ResultPageCard;