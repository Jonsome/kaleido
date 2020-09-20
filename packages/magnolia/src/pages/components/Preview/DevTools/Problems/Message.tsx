import React from 'react';

import { dispatch, actions } from '../../../../../api';

import NoticeIcon from 'react-icons';
import ErrorIcon from 'react-icons';
import WarningIcon from 'react-icons';

import theme from '../../../../../theme';
import {
  MessageContainer,
  MessageIconContainer,
  MessageSource,
} from './elements';
import { MessageType } from '.';

export interface Props {
  message: MessageType;
}

function getIcon(type: 'notice' | 'warning' | 'error') {
  if (type === 'error') {
    return { Icon: ErrorIcon, color: theme.red() };
  }
  if (type === 'warning') {
    return { Icon: WarningIcon, color: theme.primary() };
  }

  return { Icon: NoticeIcon, color: theme.secondary() };
}

export function ProblemMessage({ message }: Props) {
  const { Icon, color } = getIcon(message.severity);

  return (
    <MessageContainer
      onClick={() => {
        dispatch(
          actions.editor.openModule(message.path, message.line, message.column)
        );
      }}
    >
      <MessageIconContainer style={{ color }}>
        <Icon />
      </MessageIconContainer>
      <div>{message.message}</div>
      {message.source && <MessageSource>{message.source}</MessageSource>}
    </MessageContainer>
  );
}