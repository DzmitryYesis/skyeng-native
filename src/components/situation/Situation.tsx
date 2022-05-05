import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {DATA_SITUATIONS} from '../../state/situationsState';
import {blockSituation} from '../../flatListFunction/situation';

export const Situation = () => (
    <View style={{width: '90%'}}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            width: '100%'
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
    </View>
)