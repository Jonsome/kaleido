import React from 'react';

import ChevronRight from 'react-icons/md';
import ChevronLeft from 'react-icons/fa';
import WarningIcon from 'react-icons/md';
import ErrorIcon from 'react-icons/md';

export function MessageIcon({ type, logType }) {
  if (type === 'command') {
    return <ChevronRight />;
  }

  if (type === 'return') {
    return <ChevronLeft />;
  }

  switch (logType) {
    case 'warning':
    case 'warn':
      return <WarningIcon />;
    case 'error':
      return <ErrorIcon />;
    default:
      return false;
  }
}
