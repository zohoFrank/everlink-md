/**
 * Created by MattZo on 2018/3/7
 */
// @flow
import React, { Component } from 'react';

import ModalContainer from 'components/MainPage/ModalContainer';
import BasicInput from 'components/common/input/BasicInput';
import BasicButton from 'components/common/button/BasicButton';
import InputPrompt from 'components/common/text/InputPrompt';
import toModifyCode from 'containers/HOC/toModfyCode';

import ButtonTypes from 'utils/fontMap';
import styles from './AddLinkModal.scss';
import commonStyles from './common/common.scss';

type Props = {
  insertCode: string => void,
  toggleModal: (string | boolean) => void
};

type State = {
  cachedText?: string,
  cachedUrl?: string,
  cachedCode?: string
};

class AddLinkModal extends Component<Props, State> {

  static defaultProps = {
    insertCode: () => null,
    toggleModal: () => null
  };

  state = {
    cachedText: '',
    cachedUrl: '',
    cachedCode: ''
  };

  /******************** LifeCycle *******************/
  componentWillUnmount() {
    this.setState({
      cachedText: '',
      cachedUrl: '',
      cachedCode: ''
    });
  }

  /******************** Methods *******************/
  updateCache(event, prop) {
    const newState = {
      ...this.state,
      [prop]: event.target.value
    };
    const { cachedText, cachedUrl } = newState;
    const cachedCode = `[${cachedText}](${cachedUrl})`;
    // Update state
    this.setState({
      ...newState,
      cachedCode
    });
  }

  insertHandler() {
    const { toggleModal, insertCode } = this.props;
    toggleModal(false);
    insertCode(this.state.cachedCode);
  }

  render() {
    const labelWidth = '100px';
    return (
      <ModalContainer typeName={ButtonTypes.InsertLinkButton} posStyles={{ height: '350px' }} >
        <div className={commonStyles.title}>Insert a link into context</div>
        <div className={styles.content}>
          <div className={styles.row}>
            <InputPrompt label={'Description'} width={labelWidth} />
            <BasicInput width={'200px'} onChange={event => this.updateCache(event, 'cachedText')} />
          </div>
          <div className={styles.row}>
            <InputPrompt label={'Link URL'} width={labelWidth} />
            <BasicInput width={'350px'} onChange={event => this.updateCache(event, 'cachedUrl')} />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <BasicButton text={'Insert'} width={'120px'} onClick={this.insertHandler.bind(this)} />
        </div>
      </ModalContainer>
    );
  }
}

export default toModifyCode(AddLinkModal);

