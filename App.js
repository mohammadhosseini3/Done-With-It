import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text ,
  View ,
  SafeAreaView ,
  Image ,
  TouchableHighlight} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <TouchableHighlight onPress={() => console.log("Hi")}>
        <Image style={styles.image} source={require('./assets/icon.png')} />
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"center"
  },
  image: {
    width:100,
    height:100
  }
});
