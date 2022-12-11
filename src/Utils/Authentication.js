export function authHeader() {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      return { authorization: 'Bearer ' + token };
    } else {
      return {};
    }
  }

export const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user.role === 'admin'
}
export const isHr = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user.role === 'hr'
}
export const isUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user.role === 'jobseeker'
}

export const getUser= () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user
}