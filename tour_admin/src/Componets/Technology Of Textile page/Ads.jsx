import React, { useState } from 'react';
import Modal from './ModalAdsTable.jsx';
import './Ads.css';

const Ads = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHomeClick = () => {
    setIsModalOpen(true);
  };

  const handleFeedsClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='myBtnAdss'>
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={handleFeedsClick}>Feeds</button>

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default Ads;
