import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Medicamentos from './src/pages/medicamentos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}>Meu Remediar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34A855',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextStyle: {
    color: '#fff',
    fontWeight: 'bold',
  }
});