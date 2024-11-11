"use client"
import { useState } from 'react';

import styles from './ToggleSwitch.module.css';

interface ToggleSwitchProps {
  onToggle: (isChecked: boolean) => void;
}

const ToggleSwitch = ({ onToggle }:ToggleSwitchProps) => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setChecked(newCheckedState);
    onToggle(newCheckedState);
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
};

export default ToggleSwitch;
