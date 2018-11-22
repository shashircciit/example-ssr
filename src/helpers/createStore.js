import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default req => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });

  if (typeof window === 'undefined') {
    global.window = {}
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    {},composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  );

  return store;
};
