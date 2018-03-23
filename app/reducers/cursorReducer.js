import INITIAL_STATE from '../store/initial';
import { MOVE_CURSOR } from 'actions/editorActions';

export function cursorReducer(state = INITIAL_STATE.cursor, action) {
  const { type, payload } = action;
  switch (type) {
    case MOVE_CURSOR:
      return payload;
    default:
      return state;
  }
}

export default {};
