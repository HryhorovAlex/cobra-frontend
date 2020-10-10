import React from 'react';
import './Sidebar.styles.scss';
import { useLocation, Link } from 'react-router-dom';

interface NavElementProps {
  rout: {
    label: string;
    rout: string;
  };
};

export const NavElement: React.FC<NavElementProps> = ({rout}) => {
  const { pathname } = useLocation()
console.log(rout)
  return (
    <div className='sidebar__nav-el flex-row-fc-fc'>
      <Link to={rout.rout} className={`
        sidebar__nav-text
        sidebar__nav-text${pathname === rout.rout ? '--active' : ''}
        clicked-anime
        no-outline`}>
        {rout.label}
      </Link>
    </div>
  )
}