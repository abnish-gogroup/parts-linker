import { Provider } from 'react-redux';
import MainContainer from './workshops/containers/MainContainer';
import RouterPath from './workshops/router/RouterPath';
import configurePanelStore from './workshops/store/configureDashboardStore';

function App() {
  const store = configurePanelStore();
  return (
    <div className="App">
      <Provider store={store}>
      <MainContainer />
      </Provider>
      <header className="App-header">
        <RouterPath />
      </header>
    </div>
  );
}

export default App;
