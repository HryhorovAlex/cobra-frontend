import React from 'react';
import { Sidebar } from '../../components';
import './Music.styles.scss';

export const Music: React.FC<any> = ({}) => {
  return (
    <div className='page-header music-page flex-row-fs-st'>
      <Sidebar />
      <div>
        <h1>This is the Music Page Motherfucker</h1>
      </div>
    </div>
  )
}