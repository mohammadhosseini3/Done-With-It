import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import styles from '../components/styles';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            resizeMode="contain"
            style={styles.background}
            source={require("../assets/welcome.jpg")}>
                <Image source={require("../assets/icon.png")} style={styles.logo}/>
                <View style={styles.loginbtn}/>
                <View style={styles.registerbtn}/>
                <Text style={{position:"absolute",top:250,color:"black"}}>{props.title}</Text>
        </ImageBackground>
    );
}


export default WelcomeScreen;