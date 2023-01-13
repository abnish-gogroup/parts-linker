import React from 'react';
import Navigation from './Navigation';
import Tab from './Tab';

export default function NavigationTabs(props) {
  const [activeTabId, setActiveTab] = React.useState(props.tabs[0].id);

  const activeTab = React.useMemo(() => (
    props.tabs.find((tab) => (
      tab.id === activeTabId
    ))
  ), [activeTabId, props.tabs]);

  return (
    <div className={`tabs`}>
      <Navigation tabs={props.tabs} onNavClick={setActiveTab}
        activeTabId={activeTabId} />
      <Tab tab={activeTab} activeTabId={activeTabId} />
    </div>
  );
}
