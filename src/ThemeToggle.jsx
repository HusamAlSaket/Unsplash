import React from 'react';
import { useGlobalContext } from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useGlobalContext();

  const iconClass = isDarkTheme
    ? 'FontAwesomeIcon-dark'
    : 'FontAwesomeIcon-light';

  return (
    <button
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      className="theme-toggle-btn"
      aria-label="Toggle Theme"
    >
      <FontAwesomeIcon
        icon={isDarkTheme ? faSun : faMoon}
        className={iconClass}
      />
    </button>
  );
};

export default ThemeToggle;
