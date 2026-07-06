import React from 'react';

const bulmaClasses = {
  isCentered: 'is-centered',
  isActive: 'is-active',
  isBlack: 'is-black',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white'
};

function CoolButton(props) {
  let classes = 'button';

  
  for (let propName in props) {
    if (bulmaClasses[propName] && props[propName] === true) {
      classes += ` ${bulmaClasses[propName]}`;
    }
  }

 
  if (props.className) {
    classes += ` ${props.className}`;
  }

  return (
    <button className={classes}>
      {props.children}
    </button>
  );
}

export default CoolButton;