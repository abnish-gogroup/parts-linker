import React, { useEffect } from 'react';
import '../../../stylesheets/timelines.scss';

function Timelines() {

  useEffect(()=>{
  const list = document.querySelector('ol');
  const items = list.querySelectorAll('li');
  console.log('items', items);

  list.addEventListener('click', click)
  function click(e) {
    let target = e.target;
    console.log('event', e);
    console.log('event child nodes', e.target.childNodes[1])
    console.log('target', target);
    if (target.nodeName === 'SPAN'){
      target = e.target.parentNode;
    }
    
    if (target.nodeName !== 'LI'){
      return 
    } 
    items.forEach(item =>(
      item.classList.remove('active'),
      item.childNodes[1].classList.remove('visible')
    ))
    target.classList.add('active')
    e.target.childNodes[1].classList.add('visible')
  }
  },[])

  return (
    <ol className='timeline_cont'>
      <li className='tml_list active'><span className='tml_txt'>Kalkulation Erstellt</span><span className='hidden fs_12 visible'>Kalkulation einsehen</span></li>
      <li className='tml_list'><span className='tml_txt'>Teile Angefragt</span><span className='hidden fs_12'>Kalkulation einsehen</span></li>
      <li className="tml_list"><span className='tml_txt'>Teile Bestellt</span><span className='hidden fs_12'>Kalkulation einsehen</span></li>
      <li className='tml_list'><span className='tml_txt'>Teile Geliefert</span><span className='hidden fs_12'>Kalkulation einsehen</span></li>
      <li className='tml_list'><span className='tml_txt'>Teile Retouren</span><span className='hidden fs_12'>Kalkulation einsehen</span></li>
      <li className='tml_list'><span className='tml_txt'>Reparatur Abgeschlossen</span><span className='hidden fs_12'>Kalkulation einsehen</span></li>
    </ol>
  )
}

export default Timelines;
