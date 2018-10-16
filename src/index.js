import Reactotron from 'reactotron-react-native'

const PrettierLog = {
  log: (message: String, value: Object) => {
    if (__DEV__) {
      Reactotron.display({
        name: `🔴 Prettier Log 🔴`,
        preview: message,
        value
      })
    }
  }
}

export default PrettierLog

