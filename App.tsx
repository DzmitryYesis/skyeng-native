import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Button,
  FlatList,
  Image,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const logoTeacher = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSk_ezlPG6XlRkE4s3mGcAov4_MnRDsvbWNg&usqp=CAU';

type DataType = {
  id: number,
  text: string
}

const DATA: DataType[] = [
  {
    id: 1,
    text: 'Слова для следующего урока'
  },
  {
    id: 2,
    text: 'Слова, добавленые из браузера'
  },
  {
    id: 3,
    text:'Слова, которые необходимо повторить'
  },
  {
    id: 4,
    text: 'Слова из последнего урока'
  }
]



export default function App() {

  const block: ListRenderItem<DataType> = ({item})=>(
      <View style={{backgroundColor: '#e50fa8', width: 200, height: 200, borderRadius: 20, margin: 5, padding:10}}>
        <Text>{item.text}</Text>
      </View>
  )

  return (
    <View style={styles.container}>
      <TextInput style={styles.findWords}  placeholder={'Поиск слов'}/>
      <View style={{backgroundColor: '#d2d1d1', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '90%', height: 120}}>
        <Image source={{uri:logoTeacher}} style={{height: '80%', width: 100, borderRadius: 50, marginTop: 10}}/>
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start', width: '60%'}}>
          <View>
            <Text style={{fontSize: 20}}>Английский, Кот</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Завтра, 14:00</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 20}}>...</Text>
        </View>
      </View>
      <View style={{marginTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%', height: 80}}>
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', width: '80%'}}>
          <View>
            <Text style={{fontSize: 30, fontWeight: '900'}}>Изучение слов</Text>
          </View>
          <View>
            <Text style={{fontSize: 20}}>0 из 6 упражнений</Text>
          </View>
        </View>
        <View>
          <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa8VqE2seqnflcLxpVJe87_tNDI6h8_Olpg&usqp=CAU'}} style={{width: 20, height: 20, marginTop: 15}}/>
        </View>
      </View>
      <FlatList data={DATA} renderItem={block} horizontal={true}/>
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
