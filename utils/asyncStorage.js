import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      return e
    }
}

export const storeDataString = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      return e
    }
}

export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      return e
    }
}

export const getDataString = async () => {
    try {
      return await AsyncStorage.getItem('@storage_Key')
    } catch(e) {
      return e
    }
  }
  