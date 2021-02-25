import React from 'react';
import './Header.styles.scss';
import Cobras from '../../assets/images/cobra-main.png';
import { Link } from 'react-router-dom';

interface HeaderProps {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className='header flex-row-sb-fc'>
      <Link to='/main/home' className='header__logo no-outline flex-row-fc-fc'>
        <img className='clicked-anime' src={Cobras} width='80px' height='80px' alt="snake cobra"/>
        <span className='clicked-anime'>Cobras</span>
      </Link>
      <div className='header__logo picture-construct flex-row-fc-fc'>
      </div>
      <div className='header__logo flex-row-fc-fc'>
        <Link to='/' className='no-outline'>Go to Login</Link>
      </div>
    </div>
  )
}