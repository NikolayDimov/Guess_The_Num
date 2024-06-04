import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <StartGameScreen />
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({

});
