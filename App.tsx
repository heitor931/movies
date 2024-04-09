import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{width: 300, height: 5, backgroundColor: "#fff"}}></Text>
      <Text style={{ color: "#ff0000", fontSize: 36 }}>Heitor Ferraz Paulo</Text>
      <Text style={{ color: "#66ff00", fontSize: 36 }}>The purpose of existence is to experience Life!</Text>
      <Text style={{width: 300, height: 5, backgroundColor: "#fff"}}></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
