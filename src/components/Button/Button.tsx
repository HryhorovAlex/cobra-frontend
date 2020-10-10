import React from 'react';
import './Button.styles.scss';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label?: string;
  variant?: 'primary'
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick = () => console.log('Clock Cobras Button'),
  label = 'Cobra Click',
  variant = 'primary',
  className = ''
}) => {
  return (
    <button className={`button button--${variant} ${className} clicked-anime no-outline`} onClick={onClick}>
      {label}
    </button>
  )
}