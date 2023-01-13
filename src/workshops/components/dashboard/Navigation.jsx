import React from 'react';

export default function Navigation(props) {

  return (
    <ul className={`tabs__nav`}>
      {props.tabs.map((item) => (
        <li key={item.jobId} className={`tabs__item`}>
          <button className={`tabs__button ${(props.activeTabId === item.jobId) ? 'active' : ''}`}
            onClick={() => props.onNavClick(item.jobId)}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
