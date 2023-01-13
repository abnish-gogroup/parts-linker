import React from 'react';
import Timelines from '../timelines/Timelines';
import PartsOrderOverviewTab from './PartsOrderOverviewTab';

export default function Tab(props) {
  const { activeTabId } = props;
  return (
    <div>
      {activeTabId === 1 ? <Timelines /> : ''}
      {activeTabId === 2 ? <PartsOrderOverviewTab /> : ''}
    </div>
  );
}
