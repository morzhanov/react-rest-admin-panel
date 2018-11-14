import logger from './logger'

export default {
  checkUrl: url =>
    // eslint-disable-next-line
    /https?:\/\/(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&\/\/=]*)/.test(
      url
    ),

  getFormattedDate: timestamp => {
    let date
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]

    try {
      if (timestamp.toString().length < 13) {
        date = new Date(timestamp * 1000)
      } else {
        date = new Date(timestamp)
      }
    } catch (error) {
      const { statusText } = error
      if (statusText) logger.error(statusText)
      else logger.error(error)
      date = new Date()
    }
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  },
  isNumber: n => !Number.isNaN(parseFloat(n)) && Number.isFinite(n)
}

export const saveTokens = ({ accessToken, refreshToken }) => {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}

export const logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}
