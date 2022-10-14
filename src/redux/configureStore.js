import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer, { fetchRockets } from './rockets/rockets';
import dragonsReducer, { fetchDragons } from './dragons/dragons';
import missionsReducer, { fetchMissions } from './missions/missions';
// Logger with default options

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  dragons: dragonsReducer,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: applyMiddleware(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { fetchRockets, fetchDragons, fetchMissions };

export default store;
