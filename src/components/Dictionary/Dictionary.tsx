import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DATA_WORDS} from '../../state/wordsState';
import {blockWords} from '../../flatListFunction/word';

export const Dictionary = () => (
    <View style={{width: '90%'}}>
        <View style={styles.wrapper}>
            <View style={styles.head}>
                <View>
                    <Text style={{fontSize: 30, fontWeight: '900'}}>Изучение слов</Text>
                </View>
                <View>
                    <Text style={{fontSize: 20}}>1 из 4 упражнений</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    alert('Настройки параметров изучения слов временно недоступны.')
                }}>
                    <Image
                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa8VqE2seqnflcLxpVJe87_tNDI6h8_Olpg&usqp=CAU'}}
                        style={{width: 20, height: 20, marginTop: 15}}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{height: 210, width: '100%'}}>
            <FlatList data={DATA_WORDS} renderItem={blockWords}
                      keyExtractor={(item) => item.id} horizontal={true}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
            alert('Словарь находится в разработке')
        }}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>Словарь</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        height: 80
    },
    head: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%'
    },
    button: {
        backgroundColor: '#d2d1d1',
        marginTop: 15,
        height: 50,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})