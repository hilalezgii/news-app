import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './NewsCard.style';
const NewsCard = ({news}) => {

    return (
        <View style={styles.container}>
            <Image source={{uri:news.imageUrl}} style={styles.image} /> 
            <View style={styles.inner_container}>
            <Text style={styles.title}>
                {news.title}  
            </Text>
            <Text style={styles.description}>
                {news.description}
            </Text>
            <Text style={styles.author}>{news.author}</Text>

        </View>
        </View>
    )
}
export default NewsCard;