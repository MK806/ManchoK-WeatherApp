import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './modal.css'

const MyModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="modal-cont">
      <button onClick={onOpenModal}>Hourly Forecast</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h3>Hourly Forecast</h3>
        <p>
         აქ საათობრივი პროგნოზი უნდა ყოფილიყო :(
        </p>
      </Modal>
    </div>
  );
};

export default MyModal;