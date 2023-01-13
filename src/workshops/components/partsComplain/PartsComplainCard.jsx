import React from 'react';

function PartsComplainCard(props) {
  const { partNumber, manufacturer, description, number, workshopMargin, deliveryPrice, price } = props;
  return (
    <div className='complain_table_body'>
      <div className='w_13'>{partNumber}</div>
      <div className='w_15'>{manufacturer}</div>
      <div className='w_20'>{description}</div>
      <div className='w_10'>{number}</div>
      <div className='w_13'>{workshopMargin}</div>
      <div className='w_13'>{deliveryPrice}</div>
      <div className='w_7'>{price}</div>
      <div className='w_20'>
        <select>
          <option value=''></option>
          <option value=''>Beschädigtes Teil</option>
          <option value=''>Garantiefall</option>
          <option value=''>Teil passt nicht</option>
        </select>
      </div>
      <div className='action_cont w_20'>
        <button className='view_btn'>Chat</button>
        <button className='complain_btn'>Zurück senden</button>
      </div>
    </div>
  )
}

export default PartsComplainCard;
