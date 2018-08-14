import React from 'react';
import {ScrollView, Text} from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

const CardSet = ({items}) => (
    <ScrollView>
        {
            //ES6 'funcion Map'
            //
            items.map((item) => <Card 
                                    key ={item.title}
                                {...item} > 
                                </Card>)
        }        
    </ScrollView>
);
CardSet.propTypes = {
    items: PropTypes.arrayOf(
                            PropTypes.shape(
                                    {title: PropTypes.string.isRequired,
                                    image: PropTypes.string,
                                    description: PropTypes.string.isRequired,
                                    })
                            ).isRequired,          
                                     
                                
};
export default CardSet;