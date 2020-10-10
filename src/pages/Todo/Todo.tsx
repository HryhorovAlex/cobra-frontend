import React from 'react';
import { Sidebar } from '../../components';
import './Todo.styles.scss';

export const Todo: React.FC<any> = ({}) => {
  return (
    <div className='page-header todo-page flex-row-fs-st'>
      <Sidebar />
      <div>
        <h1>This is the Todo Page Motherfucker</h1>
      </div>
    </div>
  )
}