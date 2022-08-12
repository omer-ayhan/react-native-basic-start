import {SET_TITLE} from './types';

export default function reducer(state, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_TITLE:
      return {
        ...state,
        title: payload,
      };

    default:
      return state;
  }
}
