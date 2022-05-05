import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.findWords} placeholder={'Поиск слов'}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  findWords:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
