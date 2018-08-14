import React from 'react';
import PropTypes from 'prop-types';

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
        flex: 0,
        width: 300,
        padding: 10
    },
    title: {
        fontSize: 30 
    },
    mainImage: {
        height: 190,
        
    },
    button:{
        height: 30,
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

Card.propTypes={
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,

};

export default Card;