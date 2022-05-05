import {Image, StyleSheet, Text, View} from 'react-native';
import {logoTeacher} from '../../constants/url';


export const NextLesson = () => (
    <View style={styles.wrapper}>
        <Image source={{uri: logoTeacher}} style={styles.image}/>
        <View style={styles.body}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>English, Elena</Text>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Tomorrow, 14:00</Text>
        </View>
        <View>
            <Text onPress={() => {
                alert('Страница с расписанием занятий находится в разработке. Приносим извинения за неудобства.')
            }} style={{fontSize: 40}}>...</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#d2d1d1',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        height: 120
    },
    image: {
        height: '80%',
        width: 100,
        borderRadius: 50,
        marginTop: 10
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        width: '60%'
    }
})