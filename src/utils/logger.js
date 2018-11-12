const { REACT_APP_BUILD_MODE } = process.env

class Logger {
  static log(...args) {
    if (REACT_APP_BUILD_MODE !== 'production') {
      console.log(...args)
    }
  }

  static info(...args) {
    if (REACT_APP_BUILD_MODE !== 'production') {
      console.info(...args)
    }
  }

  static warn(...args) {
    if (REACT_APP_BUILD_MODE !== 'production') {
      console.warn(...args)
    }
  }

  static error(...args) {
    if (REACT_APP_BUILD_MODE !== 'production') {
      console.error(...args)
    }
  }
}

export default Logger
