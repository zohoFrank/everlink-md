/**
 * Created by MattZo on 2018/3/7
 */
// @flow
import React from 'react';

import ModalContainer from 'components/MainPage/ModalContainer';
import ButtonTypes from 'utils/fontMap';

const AddLinkModal = () => {
  return (
    <ModalContainer typeName={ButtonTypes.InsertLinkButton}>
      <h1>Here to insert a link</h1>
    </ModalContainer>
  );
};

export default AddLinkModal;

