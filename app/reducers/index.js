// @flow
import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { compileMarkdownReducer } from './compileMarkdownReducer';
import { toggleModal } from './toggleModal';

const rootReducer = combineReducers({
  router: routerReducer,
  editor: compileMarkdownReducer,
  modalVisible: toggleModal,
});

export default rootReducer;
