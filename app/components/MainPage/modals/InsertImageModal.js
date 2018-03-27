/**
 * Created by MattZo on 2018/3/7
 */
import React from 'react';

import InputPrompt from 'components/common/text/InputPrompt';
import BasicInput from 'components/common/input/BasicInput';
import BasicButton from 'components/common/button/BasicButton';
import ModalContainer from 'components/MainPage/ModalContainer';

import ButtonTypes from 'utils/fontMap';
import styles from './InsertImageModal.scss';
import commonStyles from './common/common.scss';

import toModifyCode from 'containers/HOC/toModfyCode';

class InsertImageModal extends React.Component {
  props: {
    insertCode: string => void,
    toggleModal: string | boolean => void
  };

  static defaultProps = {
    insertCode: _ => null,
    toggleModal: _ => null
  };

  state = {
    cachedText: '',
    cachedUrl: '',
    cachedCode: ''
  };

  /******************** Helpers *******************/
  updateCache(event, prop) {
    const newState = {
      ...this.state,
      [prop]: event.target.value
    };
    const { cachedText, cachedUrl } = newState;
    const cachedCode = `![${cachedText}](${cachedUrl})`;
    // Update state
    this.setState({
      ...newState,
      cachedCode
    });
  }

  insertHandler(event) {
    const { toggleModal, insertCode } = this.props;
    toggleModal(false);
    insertCode(this.state.cachedCode);
  }

  /******************** React APIs *******************/
  render() {
    const { path } = this.state;

    const labelWidth = '110px';
    return (
      <ModalContainer typeName={ButtonTypes.InsertPictureButton} posStyles={{ height: '550px' }}>
        <div className={commonStyles.title}>Insert an image into context</div>
        <div className={styles.content}>
          <div className={styles.row}>
            <InputPrompt label={'Image Title'} width={labelWidth} />
            <BasicInput width={'200px'} onChange={event => this.updateCache(event, 'cachedText')} />
          </div>
          <div className={styles.row}>
            <InputPrompt label={'Image URL'} width={labelWidth} />
            <BasicInput width={'350px'} onChange={event => this.updateCache(event, 'cachedUrl')} />
          </div>
          <div className={styles.imageContainer}>
            <img src={path} />
          </div>
        </div>
        <div className={commonStyles.btnContainer}>
          <BasicButton text={'Insert'} width={'120px'} onClick={this.insertHandler.bind(this)} />
        </div>
      </ModalContainer>
    );
  }
}

export default toModifyCode(InsertImageModal);

