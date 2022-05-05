import {
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {DataWordsType} from '../state/wordsState';

export const blockWords: ListRenderItem<DataWordsType> = ({item}) => (
    <TouchableOpacity onPress={() => {
        alert('Функция изучения слов на данный момент не доступна. Приносим свои извинения')
    }}>
        <View style={[styles.wrapper, {backgroundColor: item.color}]}>
            <Text style={{fontSize: 25, fontWeight: '500'}}>{item.text}</Text>
            <View style={styles.wrapperImg}>
                <Text style={{fontSize: 22}}>{item.numberOfWords} слов</Text>
                <Image source={{uri: item.picture}}
                       style={styles.image}/>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 200,
        height: 200,
        borderRadius: 20,
        margin: 5,
        padding: 10
    },
    wrapperImg: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    }

})