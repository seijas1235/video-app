import React from 'react';
import { View,
        Text,
        TouchableHighlight,
        Image,
        StyleSheet, } from 'react-native';
    //titulo
    // urlimagen
    //descripcion

const Card = ({title, image, description}) => {
    // ejecucion de esta funcion: 


    
    const imageSource = {
        uri: image
    };
    const onPressButton = () => {
        console.log('Se presiono el botton');

    };
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                {title}
            </Text>
            <Image style={styles.mainImage}
                    source = {imageSource} />
            <Text style={styles.description}>
            {description}
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
        height: 500,
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