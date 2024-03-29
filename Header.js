
import { StyleSheet, Text, View } from 'react-native';
const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>To Do List</Text>
            <Text style={styles.note}>Made by me</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#ADD7FC",
        padding: '10%',
        alignItems: 'center',
        flexWrap: 'unwrap',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 36,

    },  

    title: {
        color: '#321DEF',
        fontSize: 60,
        marginBottom: 24,
    },

    note: {
        fontSize: 30,
    }
});

export default Header;
