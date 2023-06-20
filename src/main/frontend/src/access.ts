
/* /**export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    
  };
}

 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * 
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
 */

export default function access(initialState: { UserLogin?: API.UserLogin | undefined }) {
  const { UserLogin } = initialState || {};

  // Departamentos
  let usuario = false
  let administrador = false

  // Departamento Informática
  if (UserLogin && UserLogin.type === 'usuario') {
    usuario = true
  } else if (UserLogin && UserLogin.type === 'admin') {
    administrador = true;
  }

  return {
    canAdmin: administrador,
    canUser: usuario,
  };
  
}
