import React, { memo, cloneElement, Children } from 'react';
import GoChevronDown from 'react-icons/go';
import GoChevronUp from 'react-icons/go';
import { useMenuState, MenuStateReturn } from 'reakit/Menu';
import {
  Container,
  PrimaryAction,
  ToggleActionsList,
  ActionsList,
  SecondaryAction,
} from './elements';

interface IMultiActionProps {
  Icon?: any;
  primaryActionLabel: string;
  onPrimaryClick?: (event: React.MouseEvent, menu: MenuStateReturn) => void;
  disablePrimary?: boolean;
  small?: boolean;
  block?: boolean;
  disabled?: boolean;
  light?: boolean;
  secondary?: boolean;
  red?: boolean;
  danger?: boolean;
  className?: string;
  children: React.ReactElement | React.ReactElement[];
}

export const MultiAction: React.FC<IMultiActionProps> = memo(
  ({
    Icon,
    primaryActionLabel,
    onPrimaryClick,
    disablePrimary = false,
    small = false,
    block = false,
    disabled = false,
    secondary = false,
    red = false,
    danger = false,
    children,
    className,
  }) => {
    const menu = useMenuState();
    const buttonProps = { small, block, disabled, secondary, red, danger };

    return (
      <Container>
        {/*
        // @ts-ignore */}
        <PrimaryAction
          onClick={e => onPrimaryClick(e, menu)}
          className={className}
          {...buttonProps}
          disabled={disablePrimary || disabled}
        >
          {Icon && <Icon />}
          {primaryActionLabel}
        </PrimaryAction>
        <ToggleActionsList {...menu} {...buttonProps} className={className}>
          {menu.visible ? <GoChevronUp /> : <GoChevronDown />}
        </ToggleActionsList>
        <ActionsList {...menu} aria-label="Additional Options">
          {children && (children as React.ReactElement[]).length
            ? /* eslint-disable react/no-array-index-key */
              (children as React.ReactElement[]).map((child, i) => (
                <SecondaryAction
                  key={i}
                  {...menu}
                  {...(child.props || {})}
                  onClick={e => {
                    if (child.props.onClick) {
                      child.props.onClick(e, menu);
                    }
                  }}
                >
                  {itemProps => cloneElement(Children.only(child), itemProps)}
                </SecondaryAction>
              ))
            : !Array.isArray(children) && (
                <SecondaryAction
                  {...menu}
                  {...((children as React.ReactElement).props || {})}
                >
                  {itemProps =>
                    cloneElement(Children.only(children), itemProps)
                  }
                </SecondaryAction>
              )}
        </ActionsList>
      </Container>
    );
  }
);
