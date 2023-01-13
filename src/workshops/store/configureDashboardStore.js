import { legacy_createStore as createStore, applyMiddleware }  from 'redux';
import thunkMiddleware from 'redux-thunk';
import primaryReducer from '../reducers/dashboard';

export default function configurePanelStore(initialState) {
  const store = createStore(
                  primaryReducer, 
                  applyMiddleware( thunkMiddleware ),
                  initialState
                );
  return store;
}
