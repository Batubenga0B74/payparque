import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import HandleSeven from './src/screens/carteira';
import Search from './src/screens/home';
import TipoDeViatura from './src/screens/tidoDeViatura';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <TipoDeViatura/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
