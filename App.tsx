import {StatusBar} from 'expo-status-bar';
import {
    Button,
    FlatList,
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    TextInput, TouchableOpacity,
    View
} from 'react-native';
import {DATA_WORDS, DataWordsType} from './src/state/wordsState';
import {DATA_SITUATIONS, DataSituationsType} from './src/state/situationsState';

const logoTeacher = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSk_ezlPG6XlRkE4s3mGcAov4_MnRDsvbWNg&usqp=CAU';


export default function App() {

    const blockWords: ListRenderItem<DataWordsType> = ({item}) => (
        <View style={{
            backgroundColor: '#e50fa8',
            width: 200,
            height: 200,
            borderRadius: 20,
            margin: 5,
            padding: 10
        }}>
            <Text>{item.text}</Text>
        </View>
    )

    const blockSituation: ListRenderItem<DataSituationsType> = ({item}) => (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: 150,
            height: 150,
            marginTop: 10,
            padding: 10
        }}>
            <Image source={{uri: item.logo}}
                   style={{height: '70%', width: '100%', borderRadius: 10}}/>
            <Text>{item.title}</Text>
            <Text>{item.numberOfLessons} lessons</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <TextInput style={styles.findWords} placeholder={'Поиск слов'}/>
            <View style={{
                backgroundColor: '#d2d1d1',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '90%',
                height: 120
            }}>
                <Image source={{uri: logoTeacher}} style={{
                    height: '80%',
                    width: 100,
                    borderRadius: 50,
                    marginTop: 10
                }}/>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'flex-start',
                    width: '60%'
                }}>
                    <View>
                        <Text style={{fontSize: 20}}>Английский, Кот</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 20, fontWeight: '700'}}>Завтра,
                            14:00</Text>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 20}}>...</Text>
                </View>
            </View>
            <View style={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                height: 80
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    width: '80%'
                }}>
                    <View>
                        <Text style={{fontSize: 30, fontWeight: '900'}}>Изучение
                            слов</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 20}}>0 из 6 упражнений</Text>
                    </View>
                </View>
                <View>
                    <Image
                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa8VqE2seqnflcLxpVJe87_tNDI6h8_Olpg&usqp=CAU'}}
                        style={{width: 20, height: 20, marginTop: 15}}/>
                </View>
            </View>
            <View style={{height: 210, width: '100%'}}>
                <FlatList data={DATA_WORDS} renderItem={blockWords}
                          horizontal={true}/>
            </View>
            <TouchableOpacity style={{
                backgroundColor: '#d2d1d1',
                marginTop: 15,
                height: 50,
                width: '90%',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }} onPress={() => {
                alert('Словарь находится в разработке')
            }}>
                <Text style={{fontSize: 20, fontWeight: '600'}}>Словарь</Text>
            </TouchableOpacity>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
                width: '90%'
            }}>
                <Text style={{fontSize: 25, fontWeight: '700'}}>
                    Ситуации
                </Text>
                <TouchableOpacity onPress={() => {
                    alert('Страница в разработке')
                }}>
                    <Text style={{fontSize: 25, fontWeight: '500', color: '#598fdb'}}>
                        Показать все
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 200, width: '100%'}}>
                <FlatList data={DATA_SITUATIONS} renderItem={blockSituation}
                          horizontal={true}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
                <Button title={'Home'} onPress={() => {
                    alert('Страница в разработке')
                }}/>/
                <Button title={'Homeworks'} onPress={() => {
                    alert('Страница в разработке')
                }}/>/
                <Button title={'Messages'} onPress={() => {
                    alert('Страница в разработке')
                }}/>/
                <Button title={'Profile'} onPress={() => {
                    alert('Страница в разработке')
                }}/>/
            </View>
            <StatusBar style="auto"/>
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
    findWords: {
        height: 40,
        width: '90%',
        margin: 12,
        borderRadius: 10,
        backgroundColor: '#d2d1d1',
        padding: 10,
    }
});
