import React from 'react';
import { ImageBackground,StyleSheet, View, Image } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/welcome.jpg")}>
                <Image source={require("../assets/icon.png")} style={styles.logo}/>
                <View style={styles.loginbtn}/>
                <View style={styles.registerbtn}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    loginbtn:{
        width:"100%",
        height:70,
        backgroundColor:"blue",
    },
    registerbtn:{
        width:"100%",
        height:70,
        backgroundColor:"green",
    },
    logo:{
        width:100,
        height:100,
        position:"absolute",
        top:100

    }
})

export default WelcomeScreen;