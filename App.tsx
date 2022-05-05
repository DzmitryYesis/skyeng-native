import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const logoTeacher = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSk_ezlPG6XlRkE4s3mGcAov4_MnRDsvbWNg&usqp=CAU';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.findWords}  placeholder={'Поиск слов'}/>
      <View style={{backgroundColor: '#d2d1d1', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '90%', height: 120}}>
        <Image source={{uri:logoTeacher}} style={{height: '80%', width: 100, borderRadius: 50, marginTop: 10}}/>
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start', width: '60%'}}>
          <View>
            <Text style={{fontSize: 20}}>Английский, Котоморда</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Завтра, 14:00</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 20}}>...</Text>
        </View>
      </View>
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
    borderRadius: 10,
    backgroundColor: '#d2d1d1',
    padding: 10,
  }
});
