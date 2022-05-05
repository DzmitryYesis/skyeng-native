import {StatusBar} from 'expo-status-bar';
import {
    Button,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput, TouchableOpacity,
    View
} from 'react-native';
import {DATA_SITUATIONS} from './src/state/situationsState';
import {blockSituation} from './src/flatListFunction/situation';
import {NextLesson} from './src/components/NextLesson/NextLesson';
import {Dictionary} from './src/components/Dictionary/Dictionary';


export default function App() {


    return (
        <View style={styles.container}>
            <TextInput style={styles.findWords} placeholder={'Поиск слов'}/>
            <NextLesson/>
            <Dictionary/>
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
