import {Image, Text, View} from 'react-native';
import {logoTeacher} from '../../constants/url';


export const NextLesson = () => (
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
                <Text style={{fontSize: 20, fontWeight: '500'}}>English, Elena</Text>
            </View>
            <View>
                <Text style={{fontSize: 20, fontWeight: '700'}}>Tomorrow,
                    14:00</Text>
            </View>
        </View>
        <View>
            <Text onPress={() => {
                alert('Страница с расписанием занятий находится в разработке. Приносим извинения за неудобства.')
            }} style={{fontSize: 40}}>...</Text>
        </View>
    </View>
)