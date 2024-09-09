import { useState } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = ({listView = false}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption] = useState("Edições anteriores");
  const options = ["2023"]; // Opções no dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <span className={styles["dropdown-container"]}>
      <span className={styles["dropdown-header"]} onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        <span className={styles["dropdown-icon"]}>
          {isOpen ? (
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3065 8.37997C8.74307 6.52816 7.17963 4.67634 5.61617 2.82452L7.50242 2.56747C6.27596 4.82829 4.63423 6.8072 2.59513 8.38543C1.47397 9.25319 0.116586 7.52119 1.23856 6.65281C2.96278 5.31828 4.42443 3.64739 5.46536 1.72859C5.85946 1.00212 6.77917 0.793519 7.35161 1.47154C8.91506 3.32336 10.4785 5.17518 12.042 7.027C12.9576 8.11149 11.2197 9.46153 10.3065 8.37997Z"
                fill="#333333"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3065 1.62003C8.74307 3.47184 7.17963 5.32366 5.61617 7.17548L7.50242 7.43253C6.27596 5.17171 4.63423 3.1928 2.59513 1.61457C1.47397 0.746812 0.116586 2.47881 1.23856 3.34719C2.96278 4.68172 4.42443 6.35261 5.46536 8.27141C5.85946 8.99788 6.77917 9.20648 7.35161 8.52846C8.91506 6.67664 10.4785 4.82482 12.042 2.973C12.9576 1.88851 11.2197 0.538469 10.3065 1.62003Z"
                fill="#333333"
              />
            </svg>
          )}
        </span>
      </span>

      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {options.map((option, index) => (
            <li key={index} className={`${styles["dropdown-item"]}`}>
              <a href="https://sescomp.com.br/2023/" target="_blank">
                {option}
              </a>
            </li>
          ))}
        </ul>
      )}

      {listView && (
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <a href="https://sescomp.com.br/2023/" target="_blank">
                {option}
              </a>
            </li>
          ))}
        </ul>
      )}
    </span>
  );
};

export default Dropdown;
