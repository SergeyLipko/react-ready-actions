import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import rootReducer from './reducers';
import rootReducer from './modules/rootReducer';

const handleMiddlewares = withLogger => (...middleware) => {
  let middlewares = [...middleware];

  if (withLogger && process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  }
  return middlewares;
};

const withLogger = handleMiddlewares(true);
const withOutLogger = handleMiddlewares(false);

const store = createStore(
  rootReducer,
  applyMiddleware(...withOutLogger(thunk))
);

export default store;



