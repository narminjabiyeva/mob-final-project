import React, {useState} from 'react';
import { StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import {CustomText, WarningModal} from "../../components"
import {COLORS} from "../../styles/colors";

export const Game = ({game}) => {
    return(
        <View  style={styles.game}>

                    <Image style={styles.gameImg}
                       source={game.img}/>

                <View style={styles.text}>
                    <CustomText weight={"bold"} style={styles.name}>{game.name}</CustomText>
                    <CustomText weight={"medium"} style={styles.category}>{game.category}</CustomText>
                </View>

        </View>

    )
};
const styles= StyleSheet.create({
    game:{
        backgroundColor: '#fff',
        justifyContent: "center",
        borderRadius: 5,
        width: 150,
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        margin : 10,
    },
    gameImg: {
        width: 110,
        height: 100,
        alignSelf: "center"
    },
    text: {
        marginTop:5,
        padding: 10,
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        textTransform: "uppercase",
        fontSize : 12,
        color: COLORS.mainBg,
        marginBottom:5,
    },
    category: {
        fontSize: 10,
        color: COLORS.mainWarning
    }


});
