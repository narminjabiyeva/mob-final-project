import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

import  { CustomText } from "./CustomText"
import arrowImg from "../assets/backArrow.png"
export const CustomHeader = ({name,navigation,back}) => {



    return(
            <View style={styles.header}>
                {
                    back ?
                        <TouchableOpacity style={styles.imgBtn} onPress={() => navigation.goBack()}>
                           <Image source={arrowImg} style={styles.imgBtn}/>
                        </TouchableOpacity>
                        : null
                }
                <CustomText style={styles.headerText} weight={"semi"}>{ name }</CustomText>

            </View>
    )
};
const styles= StyleSheet.create({

    header:{
        width: "100%",
        marginTop: 25,
        backgroundColor: "transparent",
        justifyContent:'center',
        alignItems: "center",
        padding: 15,
        flexDirection: "row"
    },
    imgBtn: {
        position: "absolute",
        left: 5,
        width: 25,
        height: 20
    },
    headerText:{
        fontSize:25,
        color: "#fff"
    },
    close: {
        position: 'absolute',
        right: 5,
        color: 'white',
        fontSize: 20,
        top: 7,
        zIndex: 10
    }
});
