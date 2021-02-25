import React from 'react';
import { Sidebar } from '../../components';
import './About.styles.scss';

export const About: React.FC<any> = ({}) => {
  return (
    <div className='page-header about-page flex-row-fs-st'>
      <Sidebar />
      <div>
        <h1>This is the About Page Motherfucker</h1>
      </div>
    </div>
  )
}
