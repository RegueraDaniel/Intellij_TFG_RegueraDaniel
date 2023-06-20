export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
      {
        name: 'login',
        path: '/user/registro',
        component: './User/registro',
      },
    ],
  },
  {
    path: '/login',
    name: '',
    component: './Login',
  },
  {
    path: '/',
    name: '',
    component: './Welcome',
  },
  {
    path: '/registro',
    name: '',
    component: './registro',
  },

  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canUser',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
    access: 'canUser',

  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
