import React from 'react';
import {View, StyleSheet} from 'react-native';


export const BackgroundBubbles = () => {
    return (
        <View >
            <View style={styles.bubbleBig}/>
            <View style={styles.bubbleSmall}/>
        </View>
    );
};

const styles = StyleSheet.create({
    bubbleBig: {
        width: 400,
        height: 400,
        backgroundColor: 'rgba(255,255,255,0.15)',
        position: 'absolute',
        borderRadius: 300,
        top: -150,
        left: -100,
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.18)',
        //box-shadow: inset 0 0 5px grey;
    },
    bubbleSmall: {
        width: 250,
        height: 250,
        backgroundColor: 'rgba(255,255,255,0.15)',
        position: 'absolute',
        borderRadius: 300,
        top: -80,
        right: -80,
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.18)',
    }
});
