import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  isModalActive?: boolean;
  isDarkMode?: boolean;
  click?: any;
};

function Modal({
  children, isModalActive, click, isDarkMode,
}: ModalProps) {
  return (
    <div className={`${styles.Modal} ${isDarkMode ? styles.Dark : ''} ${isModalActive ? styles.ModalActive : ''}`}>
      <div className={styles.Content}>
        <FontAwesomeIcon icon={faClose} role="button" tabIndex={0} onClick={click} className={`${styles.CloseBtn} w-3`} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
