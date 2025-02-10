import { useState, useRef, useEffect } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null); // ✅ 모달 내부 요소를 참조하는 ref

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // ✅ 모달 바깥을 클릭하면 닫히도록 설정
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return { isOpen, openModal, closeModal, modalRef };
}
