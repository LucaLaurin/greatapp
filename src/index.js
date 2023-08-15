import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import { init } from './db';
import RootNavigator from './navigations';
import { store } from './store';
import { FONTS, COLORS } from './themes';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch((err) => {
    console.log('Initializing db failed');
    console.log(err);
  });


export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Nunito-Black.ttf'),
    [FONTS.bold]: require('../assets/fonts/Nunito-Light.ttf'),
    [FONTS.medium]: require('../assets/fonts/Nunito-Medium.ttf'),
    [FONTS.light]: require('../assets/fonts/Nunito-Regular.ttf'),
  });


  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});