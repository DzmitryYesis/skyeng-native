import {StatusBar} from 'expo-status-bar';
import {
    FlatList,
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    TextInput, TouchableOpacity,
    View
} from 'react-native';

const logoTeacher = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSk_ezlPG6XlRkE4s3mGcAov4_MnRDsvbWNg&usqp=CAU';

type DataWordsType = {
    id: number,
    text: string
}

const DATA_WORDS: DataWordsType[] = [
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
        text: 'Слова, которые необходимо повторить'
    },
    {
        id: 4,
        text: 'Слова из последнего урока'
    }
]

type DataSituationsType = {
    logo: string,
    title: string,
    numberOfLessons: number
}

const DATA_SITUATIONS: DataSituationsType[] = [
    {
        logo: 'https://cdn-user12724.skyeng.ru//image/course/f3486ed9d445c87052fd06085835f5a5.png?width=500&height=500',
        title: 'Colloquial language',
        numberOfLessons: 18
    },
    {
        logo: 'https://cdn-user12724.skyeng.ru//image/course/17440f1c66922346dac3941d0ec76849.png?width=500&height=500',
        title: 'Job interview',
        numberOfLessons: 14
    },
    {
        logo: 'https://cdn-user12724.skyeng.ru//image/course/166e4d3f1f8ad21b2cb52e9d0271744e.png?width=500&height=500',
        title: 'Sport or not',
        numberOfLessons: 9
    },
    {
        logo: 'https://cdn-user12724.skyeng.ru//image/course/67647c36f8ec9a580749adc82992ae66.png?width=500&height=500',
        title: 'Travel',
        numberOfLessons: 12
    },
    {
        logo: 'https://cdn-user12724.skyeng.ru//image/course/e04f4d80b6dbfe2879670ac61546ed1b.png?width=500&height=500',
        title: 'Go shopping',
        numberOfLessons: 9
    },
    {
        logo: 'https://cdn-user12724.skyeng.ru//image/course/970915c2d09b0b3259cc24fba0e3acb3.png?width=500&height=500',
        title: 'Talk about love',
        numberOfLessons: 9
    },
    {
        logo: 'https://cdn-user12724.skyeng.ru//image/course/65eba6d55f85632613ce554bcefd0713.png?width=500&height=500',
        title: 'Phone me',
        numberOfLessons: 7
    },
    {
        logo: 'https://cdn-user12724.skyeng.ru//image/course/76adac8b506c58628be6fff97bdfbc0d.png?width=500&height=500',
        title: 'Great presentation',
        numberOfLessons: 9
    },
    {
        logo: 'https://cdn-user12724.skyeng.ru//image/course/65fc38b8f1c26e57fc245cb4d79e7825.png?width=500&height=500',
        title: 'Airport',
        numberOfLessons: 15
    }
]


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
            margin: 10,
            padding: 15
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
                <FlatList data={DATA_WORDS} renderItem={blockWords} horizontal={true}/>
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
                marginTop: 25,
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
                <FlatList data={DATA_SITUATIONS} renderItem={blockSituation} horizontal={true}/>
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
