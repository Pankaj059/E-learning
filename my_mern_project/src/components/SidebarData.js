import React from 'react';
import { MdDashboard } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Course',
    path: '/Addcourse',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Students',
    path: '/students',
    icon: <MdPeopleAlt />,
    cName: 'nav-text'
  },

  {
    title: 'Lessons',
    path: '/lessons',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <BiLogOut />,
    cName: 'nav-text'
  }
];