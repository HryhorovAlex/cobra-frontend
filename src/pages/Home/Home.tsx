import React from 'react';
import { Sidebar } from '../../components';
import './Home.styles.scss';

export const Home: React.FC<any> = ({}) => {
  return (
    <div className='page-header home-page flex-row-fs-st'>
      <Sidebar />
      <div>
        <h1>This is the Home Page Motherfucker</h1>
      </div>
    </div>
  )
}