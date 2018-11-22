export default {
  mustBeAuthorized: () => {
    const token = localStorage.getItem('token')
    return !!token
  },

  mustBeUnauthorized: () => {
    const token = localStorage.getItem('token')
    return !token
  }
}
