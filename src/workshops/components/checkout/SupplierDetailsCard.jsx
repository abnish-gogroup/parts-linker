import React from 'react';

export default function SupplierDetailsCard(props) {
  const { partNumber, manufacturer, description, partType, number, margin ,deliveryPrice, price } = props;
  return (
    <div className="table_data d_flex pad_10 fs_12">
      <div className="cell_part bg_tran">{partNumber}</div>
      <div className="cell_mfg bg_tran">{manufacturer}</div>
      <div className="cell_desc bg_tran">{description}</div>
      <div className="cell_10 bg_tran">{partType}</div>
      <div className="cell_8 bg_tran">{number}</div>
      <div className="cell_15 bg_tran">{margin}</div>
      <div className="cell_10 bg_tran">{deliveryPrice}</div>
      <div className="cell_del_price bg_tran">{price}</div>
    </div>
  )
}
