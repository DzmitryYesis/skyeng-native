import {StatusBar} from 'expo-status-bar';
import {
    ScrollView,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import {NextLesson} from './src/components/NextLesson/NextLesson';
import {Dictionary} from './src/components/Dictionary/Dictionary';
import {Situation} from './src/components/Situation/Situation';
import {Menu} from './src/components/Menu/Menu';


export default function App() {

    return (
        <View style={styles.container}>
            <TextInput style={styles.findWords} placeholder={'Поиск слов'}/>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <NextLesson/>
                <Dictionary/>
                <Situation/>
            </ScrollView>
            <Menu/>
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
    },
    scroll:{
        width: '90%'
    }
});
