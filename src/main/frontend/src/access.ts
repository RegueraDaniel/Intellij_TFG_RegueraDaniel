
export default function access(initialState: { UserLogin?: API.UserLogin | undefined }) {
  const { UserLogin } = initialState || {};

  // Usuarios Ini
  let usuario = false
  let administrador = false

  // Usuarios
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
