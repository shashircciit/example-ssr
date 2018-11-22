import React from 'react';
import App from './App';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
import GouthamMoka from '../client/pages/GouthamMoka';
import HomePage from './pages/HomePage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...GouthamMoka,
        path: '/moka'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
