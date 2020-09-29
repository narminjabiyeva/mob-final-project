
import React from "react";
import { StyleSheet, View } from "react-native";


export const TrafficLights = ({index}) => {

  return (
    <View style={styles.container}>

        <View style={[styles.circle,{backgroundColor: index === 1 ? "red" : "#eee"}]}/>
        <View style={[styles.circle,{backgroundColor: index === 2 ? "yellow" : "#eee"}]}/>
        <View style={[styles.circle,{backgroundColor: index === 3 ? "green" : "#eee"}]}/>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    marginVertical: 20,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  circle: {
      width: 60,
      height: 60,
      borderRadius : 30,
      borderColor: "grey",
      borderWidth: 1,
      marginVertical: 20
      
  }
});
