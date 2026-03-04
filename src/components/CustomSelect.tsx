'use client';

import { useState, useRef, useEffect, FC } from 'react';
import styles from './CustomSelect.module.css';

interface Props {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

const CustomSelect: FC<Props> = ({
  options,
  value,
  onChange,
  label,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const displayValue =
    value === 'all' ? 'All' : value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <div
      ref={dropdownRef}
      className={`${styles.customSelect} ${className || ''}`}
    >
      {label && <label className={styles.label}>{label}</label>}
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={styles.selectButton}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {displayValue}
        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className={styles.dropdown} role="listbox">
          {options.map((option) => (
            <li
              key={option}
              aria-selected={option === value}
              className={`${styles.option} ${
                option === value ? styles.selected : ''
              }`}
              role="option"
              onClick={() => handleSelect(option)}
            >
              {option === 'all'
                ? 'All'
                : option.charAt(0).toUpperCase() + option.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
