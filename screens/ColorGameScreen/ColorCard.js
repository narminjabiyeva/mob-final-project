import React from 'react';
import { StyleSheet,  View } from 'react-native';

import { CustomText } from '../../components'
  
export const ColorCard = ( {color,name,box} ) => {
   return(     
        <View style={styles.colorContainer}>
            <CustomText weight="medium" style={[styles.colorName,{color:color}]}>
                {name}
            </CustomText>
            <View style={[styles.color,{backgroundColor: box}]}/>
        </View>
  )
};

const styles = StyleSheet.create({
  
    colorContainer: {
        width: 300,
        height: 300,
        justifyContent:"center",
        alignItems: "center", 
        backgroundColor: "#fff",
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        borderRadius: 15,
        elevation: 8,                
     },
  
    colorName: {
        fontSize: 40,
        textTransform: "capitalize"
    },
    color: {
       width: 150,
       height: 150,
       borderRadius: 75
    },
   
});