import React from 'react';
import { StyleSheet,  View, FlatList } from 'react-native';

import { CustomText } from '../../components'
import { genID } from "../../utils/genID"
  
export const History = ({ history }) => {
   return(     
            <FlatList
                horizontal={true}
                data={history}
                renderItem={({ item,index }) => 
                    <View style={styles.container}>
                        <CustomText style={styles.ind}>{index+1}</CustomText>
                         <CustomText style={styles.input}> {item.inputs}</CustomText>
                         <View style={styles.scores}>
                            <CustomText weight="bold" style={styles.yellow}> {item.y-item.g}</CustomText>
                            <CustomText weight="bold" style={styles.green}> {item.g}</CustomText>
                         </View>
                    </View>
                }
                keyExtractor={()=>genID()}
                style={{flexGrow: 0, height: 120}}
            />
  )
};

const styles = StyleSheet.create({
    container: {
       width: 80,
       height: 80,
       marginHorizontal: 10,
       marginVertical: 30,
       backgroundColor: "#fff",
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 4,
       },
        borderRadius:15,
       shadowOpacity: 0.30,
       shadowRadius: 4.65,
       
       elevation: 8,    
    },
    ind: {
       fontSize: 10,
       color: "grey",
       textAlign: "left",
       marginVertical: 5,
       marginHorizontal: 5

    },
    scores: {
       flexDirection: "row",
       justifyContent: "space-evenly",
       alignItems: "center"
    },
    input: {
        textAlign: "center"
    },
    yellow: {
       color: "#FFC048"
    },
    green: {
        color : "#19EAFF"
    }
})
