import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  request: null,
  success: ['metadata'],
  failure: null,
});

export const MetadataTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  videoBackground: null,
  fetching: null,
  error: null,
});

/* ------------- Selectors ------------- */

export const MetadataSelectors = {
  getMetadata: state => state,
};

/* ------------- Reducers ------------- */

export const request = state => state.merge({ fetching: true });

export const success = (state, action) => {
  const { videoBackground } = action.metadata;
  return state.merge({ fetching: false, error: null, videoBackground });
};

export const failure = state => state.merge({ fetching: false, error: true, metadata: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST]: request,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
});
