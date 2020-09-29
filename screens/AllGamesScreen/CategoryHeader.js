import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

import  { CustomText } from "../../components"
import {COLORS} from "../../styles/colors";

export const CategoryHeader = ({name}) => {
    return(
        <View style={styles.header}>
            <CustomText style={styles.headerText} weight={"medium"}>{ name }</CustomText>
        </View>)
};
const styles= StyleSheet.create({
    headerText:{
        fontSize:20,
        color: "#fff"
    },
    header:{
        marginTop: 30,
        marginBottom: 15,
        marginHorizontal: 15,
        backgroundColor: COLORS.mainWarning,
        justifyContent:'center',
        alignItems: "center",
        padding: 10,
        borderRadius: 10


    },
});
