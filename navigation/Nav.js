import React  from 'react';
import { StyleSheet,  View, TouchableOpacity } from 'react-native';
import { Entypo as Icon} from 'react-native-vector-icons';
import {COLORS} from "../styles/colors";

export const Nav = ({navigation}) => {
    return (
        <View style={styles.color}>
            <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
                <Icon name="home" style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("All Games")}>
                <Icon name="game-controller" style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Icon name="user" style={styles.img}/>
            </TouchableOpacity>

        </View>
    );
};
const styles= StyleSheet.create({
    color:{
        backgroundColor: COLORS.secondBg ,
        width:"100%",
        flexDirection: 'row',
        paddingTop:10,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'space-around',
        zIndex: 2
    },

    img: {
        fontSize: 50,
        color: 'white',
        paddingBottom:10
    }

});
