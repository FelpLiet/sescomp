import React from "react";
import styles from "./styles.module.scss";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ show, onClose, children }: ModalProps) {
  if (!show) return null; // Se o modal não for para ser exibido, retorna null

  return (
    <>
      {/* Overlay escurecido */}
      <div className={styles.overlay} onClick={onClose}></div>

      {/* Conteúdo do Modal */}
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          {/* Botão de Fechar */}
          <button className={styles.closeButton} onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1144_1593)">
                <path
                  d="M2.35115 4.55758L18.342 22.4055C20.2449 24.5294 23.5558 21.5694 21.6497 19.4419L5.65886 1.59404C3.75591 -0.529911 0.445046 2.43012 2.35115 4.55758Z"
                  fill="white"
                />
                <path
                  d="M4.55783 21.6491L22.4057 5.65826C24.5297 3.75531 21.5696 0.444444 19.4422 2.35055L1.59428 18.3414C-0.529667 20.2443 2.43036 23.5552 4.55783 21.6491Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1144_1593">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          {/* Renderizando o conteúdo passado para o modal */}
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
