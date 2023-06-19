import React from 'react';
import { useModal } from '../../context/Modal';

function OpenModalImage({
  modalComponent, // component to render inside the modal
 
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  review
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

    if(!review) return null

  return (
    <img onClick={onClick} className = 'onFeetPictureTag' src = {review.picture_aws_link} >
    </img>
  );
}

export default OpenModalImage;
