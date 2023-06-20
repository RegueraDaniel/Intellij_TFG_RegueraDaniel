export default [

  {
    path: '/',
    name: '',
    component: './Welcome',
  },

  {
    path: '/login',
    name: '',
    component: './Login',
  },
  {
    path: '/registro',
    name: '',
    component: './Registro',
  },




  {
    path: '/dashboard',
    name: '',
    component: './Dashboard',
  },
  {
    path: '/movimientos',
    name: '',
    component: './Movimientos',
  },
  {
    path: '/categorias',
    name: '',
    component: './Categorias',
  },
  {
    path: '/Presupuestos',
    name: '',
    component: './Presupuestos',
  },
  {
    path: '/avisos',
    name: '',
    component: './Avisos',
  },
  {
    path: '/informes',
    name: '',
    component: './Informes',
  },


  {
    path: '*',
    layout: false,
    component: './404',
  },
];
