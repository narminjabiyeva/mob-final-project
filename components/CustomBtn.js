import React from 'react';
import { StyleSheet, View,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';

import {CustomText} from "./CustomText";

export const CustomBtn = ({title,onPress,style,color,...rest}) => {
    const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return(
        <View style={[style,styles.container]}>
            <Touchable onPress={onPress} {...rest} >
                <View style={[styles.btn, {backgroundColor: color ? color: "gray" }]}>
                    <CustomText weight="bold" style={styles.title}>
                        {title}
                    </CustomText>
                </View>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        overflow:"hidden",
        borderRadius:10,
    },
    btn:{
        width:"100%",
        padding:15,
        alignItems: "center",
    },        
    title:{
        textTransform:"uppercase",
        color:"white",
        textAlign: "center",
        fontSize:14,
        lineHeight:17
    },

});