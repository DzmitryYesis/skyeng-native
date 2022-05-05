import {Image, ListRenderItem, Text, TouchableOpacity, View} from 'react-native';
import {DataSituationsType} from '../state/situationsState';

export const blockSituation: ListRenderItem<DataSituationsType> = ({item}) => (
    <TouchableOpacity onPress={() => {
        alert('В данный момент работа с ситуациями не возможно. Приносим свои извинения')
    }}>
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
    </TouchableOpacity>
)