import React from 'react';
import { View,
        Text,
        TouchableHighlight,
        Image,
        StyleSheet, } from 'react-native';


const Card = () => {
    // ejecucion de esta funcion: 
    const imageSource = {
        uri: 'https://www.revistawelldone.cl/wp-content/uploads/2017/12/avengersinfinitywar-1494357736132_1280w.jpg'
    };
    const onPressButton = () => {

    };
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                CARD (EJEMPLO)!
            </Text>
            <Image style={styles.mainImage}
                    source = {imageSource} />
            <Text style={styles.description}>
            descripcion de ejemplo de video
            largo
            </Text> 
            <TouchableHighlight
                style = {styles.button}
                underlayColor='#EEE'
                onPress = {onPressButton}>
                <Text style={styles.buttonText}> Ver Más
                </Text>
            </TouchableHighlight>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0F0',
        height:300,
        width: 300
    },
    title: {
        fontSize: 30 
    },
    mainImage: {
        height: 150,
        width: 280,
        marginLeft: 10,
    },
    button:{
        height: 30,
        width: 280,
        marginLeft: 10,
        backgroundColor: '#999'
    },
    buttonText:{
       fontSize:20,
       color: '#222' ,
    },
    description:{
        marginLeft: 10,
        fontSize: 13,
        color:'#EEE'
    }

});
export default Card;