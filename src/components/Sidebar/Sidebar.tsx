import React from 'react';
import { NavElement } from './NavElement';
import './Sidebar.styles.scss';

interface SidebarProps {};

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <div className='sidebar flex-col-fs-fc'>
      <span className='sidebar__title'>Cobras Navigation</span>
      <nav className='flex-col-fs-st'>
        {routes.map((rout, index) => <NavElement rout={rout} key={index} />)}
      </nav>
    </div>
  )
}

const routes = [
  {
    label: 'Home',
    rout: '/main/home',
  },
  {
    label: 'Contacts',
    rout: '/main/contacts',
  },
  {
    label: 'Groups',
    rout: '/main/groups',
  },
  {
    label: 'Todo',
    rout: '/main/todo',
  },
  {
    label: 'Music',
    rout: '/main/music',
  },
  {
    label: 'About',
    rout: '/main/About'
  }
]