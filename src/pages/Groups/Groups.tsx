import React from 'react';
import { Sidebar } from '../../components';
import './Groups.styles.scss';

export const Groups: React.FC<any> = ({}) => {
  return (
    <div className='page-header groups-page flex-row-fs-st'>
      <Sidebar />
      <div>
        <h1>This is the Groups Page Motherfucker</h1>
      </div>
    </div>
  )
}