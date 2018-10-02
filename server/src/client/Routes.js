import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
  {
    ...App,
    //no path for app, it will always be displayed
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];