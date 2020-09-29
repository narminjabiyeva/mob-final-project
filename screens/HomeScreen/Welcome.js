import React from 'react';
import { StyleSheet, View,Image} from 'react-native';
import { CustomText } from "../../components";
export const Welcome = ({name,img}) => {
    return (

            <View style={styles.container}>
                <CustomText style={styles.name} weight={"semi"}>Welcome {name}!</CustomText>
                {
                    img && <Image source={img} style={styles.img}/>
                }

            </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 20,
        alignItems: "center",

    },
    img: {
        width: 90,
        height: 100,
        borderRadius: 50

    }
,
    name: {
        fontSize: 20,
        color: "#fff"
    }
});
