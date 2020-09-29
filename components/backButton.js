import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';
import {COLORS} from "../styles/colors";
export const BackButton = ({navigation}) => {
    return (
        <TouchableOpacity  onPress={() => navigation.goBack()} style={styles.container}>
            <Icon name="arrow-left" style={styles.img} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: '5%',
        left: 0
    },
    img: {
        fontSize: 36,
        color: COLORS.mainBg
    }
});
