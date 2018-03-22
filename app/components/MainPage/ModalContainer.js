/**
 * Created by MattZo on 2018/3/7
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './ModalContainer.scss';

import { toggleModal } from 'actions/actionTypes';

const ModalContainer = ({ visibleType, children, toggleModal, typeName, posStyles }) => {
  return visibleType === typeName ?
    (
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer} style={posStyles}>
          <div className={styles.closeBtn} onClick={() => toggleModal(false)}>
            <svg className={styles.icon} viewBox="0 0 16 16">
              <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
            </svg>
          </div>
          { children }
        </div>
      </div>
    )
    : null;
};

export default connect(
  state => ({ visibleType: state.modalType }),
  dispatch => bindActionCreators({ toggleModal }, dispatch)
)(ModalContainer);