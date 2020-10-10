import React from 'react';
import './Header.styles.scss';
import Cobras from '../../assets/images/cobra-main.png';

interface HeaderProps {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className='header flex-row-sb-fc'>
      <div className='header__logo flex-row-fc-fc'>
        <img className='clicked-anime' src={Cobras} width='80px' height='80px' alt="snake cobra"/>
        <span className='clicked-anime'>Cobras</span>
      </div>
      <div className='header__logo flex-row-fc-fc'>
        <span>Under construction</span>
      </div>
      <div className='header__logo flex-row-fc-fc'>
        <span>Under construction</span>
      </div>
    </div>
  )
}