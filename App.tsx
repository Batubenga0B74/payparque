import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import HandleSeven from './src/screens/HandleSeven';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HandleSeven/>
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
