import React from 'react';
import { Sidebar } from '../../components';
import './Contacts.styles.scss';

export const Contacts: React.FC<any> = ({}) => {
  return (
    <div className='page-header contacts-page flex-row-fs-st'>
      <Sidebar />
      <div>
        <h1>This is the Contacts Page Motherfucker</h1>
      </div>
    </div>
  )
}