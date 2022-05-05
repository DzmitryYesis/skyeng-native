import {ListRenderItem, Text, View} from 'react-native';
import {DataWordsType} from '../state/wordsState';

export const blockWords: ListRenderItem<DataWordsType> = ({item}) => (
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