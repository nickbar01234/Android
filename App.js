import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Header from './Header.js';
import Blogs from './Blogs.js';
import { registerRootComponent  } from 'expo';
export default function App() {
  const addButtonImage = './assets/add_circle_FILL0_wght400_GRAD0_opsz24.png';

  const addButtonOnPress = () => {

  };


  return (
    <View style={styles.container}>
      {/* <StatusBar/>
      <Header />

      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.addButton} onPress={addButtonOnPress}>
          <Image source={require(addButtonImage)}></Image>
        </TouchableOpacity>
      </View> */}
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FCE2AD',
  },

  addButton: {
    
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },
});


registerRootComponent(App);