import {ListRenderItem, Text, TouchableOpacity, View} from 'react-native';
import {DataWordsType} from '../state/wordsState';

export const blockWords: ListRenderItem<DataWordsType> = ({item}) => (
    <TouchableOpacity onPress={()=>{alert('Функция изучения слов на данный момент не доступна. Приносим свои извинения')}}>
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
    </TouchableOpacity>
)