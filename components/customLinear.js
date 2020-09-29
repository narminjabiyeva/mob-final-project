import React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet} from 'react-native';
export const CustomLinear = ({children}) => {
    return (
        <LinearGradient colors={['#74B9FF','#74B9FF','#ABD4FE','white','white']} style={styles.linearGradient}>
            {children}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        width:'100%'
    },
});
