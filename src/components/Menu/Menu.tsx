import {Button, View} from 'react-native';

export const Menu = () => (
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
)