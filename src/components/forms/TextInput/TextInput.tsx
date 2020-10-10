import React, { useState } from 'react';
import './TextInput.styles.scss';

interface TextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  className?: string;
  variant?: "primary"
};

export const TextInput: React.FC<TextInputProps> = ({label = '', className = '', variant ='primary', ...props}) => {

  return (
    <label className={`text-input flex-col-fs-fs  ${className}`}>
      {label ? <span className='text-input__label'>{label}</span> : null}
      <input {...props} className={`text-input__input text-input__input--${variant} no-outline`} type='text' />
    </label>
  )
}