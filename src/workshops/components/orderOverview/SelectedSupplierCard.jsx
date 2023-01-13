import React from 'react';

export default function SelectedSupplierCard(props) {
  const { partNo, manufacturer, description, partType, delivery, qty, w_margin, margin, deliveryPrice, totalPrice } = props;
  return (
    <div className="table_data d_flex pad_10 fs_12 cb_262626">
      <div className="cell_part bg_tran">{partNo}</div>
      <div className="cell_mfg bg_tran">{manufacturer}</div>
      <div className="cell_desc bg_tran">{description}</div>
      <div className="cell_10 bg_tran">{partType}</div>
      <div className="cell_10 bg_tran">{delivery}</div>
      <div className="cell_8 bg_tran">{qty}</div>
      <div className="cell_15 bg_tran">{w_margin}</div>
      <div className="cell_10 bg_tran">{margin}</div>
      <div className="cell_15 bg_tran">{deliveryPrice}</div>
    </div>
  )
}
