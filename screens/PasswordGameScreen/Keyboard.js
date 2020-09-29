import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



const buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];


export const Keyboard = ({input,numberButtonHandler,clear,sumbitButtonHandler}) => {
  

  return (
    
      <View style={styles.buttonsContainer}>
      
        {
          buttons.map((btn) => {
            return(
              <TouchableOpacity
               key={btn} 
               onPress={() => {numberButtonHandler(btn)}}
               disabled={input.length === 4 ? true : false} 
               >
                <View style={styles.btn} >
                  <Text style={styles.btnTitle}>
                    {btn}
                  </Text>
                </View>
              </TouchableOpacity>
              
            )
            
          })
        }
        <TouchableOpacity onPress={clear}>
          <View style={styles.btn} >
            <Text style={styles.btnTitle}>
              C
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={sumbitButtonHandler}
         disabled={input.length < 4 ? true : false}
        >
          <View style={styles.btn}>
            <Text style={styles.btnTitle}>
               OK
            </Text>
          </View>
        </TouchableOpacity>
      </View>
     
  );
}

const styles = StyleSheet.create({
  
 
  buttonsContainer: {  
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
      backgroundColor: "#74B9FF",
      width: 90,
      margin: 10,
      paddingVertical: 10,
      borderRadius: 10,
      alignItems: "center",
  },
  btnTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white"
  }
});



