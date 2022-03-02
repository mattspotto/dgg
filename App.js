import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigation/MainTabNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

function App() {
  // state = {
  //   isLoadingComplete: false,
  // };

  //  _loadResourcesAsync = async () => {
  //   return Promise.all([
  //     Asset.loadAsync([
  //       require('./assets/images/TextLogoWhite.png'),
  //     ]),
  //     Font.loadAsync({
  //       // This is the font that we are using for our tab bar
  //       ...Icon.Ionicons.font,
  //       // We include SpaceMono because we use it in HomeScreen.js. Feel free
  //       // to remove this if you are not using it in your app
  //       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  //       'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
  //       'inter-italic': require('./assets/fonts/Inter-Italic.ttf'),
  //       'inter-bold': require('./assets/fonts/Inter-Bold.ttf')
  //     }),
  //   ]);
  // };

  //  _handleLoadingError = error => {
  //   // In this case, you might want to report the error to your error
  //   // reporting service, for example Sentry
  //   console.warn(error);
  // };

  // _handleFinishLoading = () => {
  //   this.setState({ isLoadingComplete: true });
  // };

  // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
  //   return (
  //     <AppLoading
  //       startAsync={this._loadResourcesAsync}
  //       onError={this._handleLoadingError}
  //       onFinish={this._handleFinishLoading}
  //     />
  //   );
  // } else {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </View>
  );
}

export default App;

