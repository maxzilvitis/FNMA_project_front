import React from 'react';
import { View, Image, ScrollView, Button } from 'react-native';

import styles from './styles';
//import { Button } from 'react-native-elements';

export default ({captures=[]}) => (
    <ScrollView 
        horizontal={true}
        style={[styles.bottomToolbar, styles.galleryContainer]} 
    >
        {captures.map(({ uri }) => (
            <View 
            style={styles.galleryImageContainer} 
            key={uri}        
            >
                <Image source={{ uri }} style={styles.galleryImage}/>
                <Button
                    onPress={() => { this.props.navigation.navigate('Home')} }
                    title={"Use image"}
                />
            </View>
        ))}
    </ScrollView>
);