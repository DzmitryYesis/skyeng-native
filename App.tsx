import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.findWords}  placeholder={'Поиск слов'}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  findWords:{
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#d2d1d1',
    padding: 10,
  }
});
