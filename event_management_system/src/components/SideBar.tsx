// src/components/SideBar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import db from './icons/dashboard.svg';
import profile from '../assets/Ellipse.png';
import create from './icons/create.svg';
import cal from './icons/callender.svg';
import database from './icons/database.svg';
import settings from './icons/settings-icon.svg';
import logout from './icons/logot-icon.svg';

const menuItems = [
  { icon: db, label: 'Dashboard', path: '/dashboard' },
  { icon: create, label: 'Create Events', path: '/dashboard/event' },
  { icon: cal, label: 'Events', path: '/dashboard/events' },
  { icon: database, label: 'Database', path: '/dashboard/database' },
  { icon: settings, label: 'Settings', path: '/dashboard/settings' },
];

const SideBar: React.FC = () => {
  return (
    <div className="max-w-60">
      {/* Profile Section */}
      <div className="flex text-white pl-4">
        <img src={profile} alt="Profile" className="size-12 mr-2" />
        <div>
          <h3>Bona Eba</h3>
          <p>Owner</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="text-white my-20">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="flex p-4 hover:bg-[#21212196]">
                <img src={item.icon} alt={item.label} />
                <span className="pl-2 font-[500]">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Link */}
      <Link to="/logout" className="flex text-white pl-4">
        <img src={logout} alt="Logout" />
        <span className="pl-2 font-[500]">Log out</span>
      </Link>
    </div>
  );
};

export default SideBar;
