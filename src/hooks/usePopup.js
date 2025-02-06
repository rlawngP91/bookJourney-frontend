// usePopup.js
import { useState } from 'react';

export default function usePopup(initialPopup = null) {
  const [popupType, setPopupType] = useState(initialPopup);

  /**
   * 팝업 열기 함수
   * @param {string} type - 열고자 하는 팝업의 종류 (예: 'xbox', 'pen', 'exit')
   */
  const openPopup = (type) => {
    setPopupType(type);
  };

  const closePopup = () => {
    setPopupType(null);
  };

  return { popupType, openPopup, closePopup };
}
