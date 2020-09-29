import React, {  useState,useRef,useEffect } from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import { TrafficLights }  from  "./TrafficLight"
import { randomInt } from "../../utils/randomInt"
import {CustomBtn, CustomText,EndModal} from "../../components"
import {BackButton} from "../../components/backButton";


export const TrafficLightGameScreen = ({navigation}) => {
   
    const [light,setlight] = useState(randomInt(1,3));
    const [prev,setPrev] = useState(0);
    const [points,setPoints] = useState(0);
    const [wrongs, setWrongs] = useState(0);
    const [modal,setModal] = useState(false);
    const [time, setTime] = useState(20);


    const openedTimer = useRef(null);

    const clickHandler = (value) => {
        setlight(null);
        setPrev(light)
        if(value === "yes"){
          
             if(light === prev) {
                 setPoints(points+1);
             }
             else {
                setWrongs(wrongs+1);
             }
         }
         if(value === "no"){
            if(light !== prev) {
                setPoints(points+1);
            }
            else {
                setWrongs(wrongs+1);
            }
        }
        if(wrongs === 4) {
            setModal(true);
        }
        setTimeout(() => setlight(randomInt(1,3)),900)

       };

    const resetGame = () => {
        setPrev(0);
        setWrongs(0),
        setlight(randomInt(1,3));
        setPoints(0);
        setModal(0);
    }

    const gameTimer = () => {
        if (openedTimer.current) {
            clearTimeout(openedTimer.current);
          }
          openedTimer.current = setTimeout(() => setModal(true), 20000);
         }
    
       useEffect(() => {
           setTimeout(() => setlight(randomInt(1,3)),1000);
           gameTimer();
       }, [time]);



  return (
    <View style={styles.container}>
        <BackButton navigation={navigation}/>
        <CustomText weight="bold" style={styles.points}>
            {points}
        </CustomText>
       <TrafficLights index={light}/>
       <View style={styles.btnContainer}> 
                             
            <CustomBtn
             color="#FFC048"
             style={styles.btn}
             title="No"
             onPress={() => clickHandler("no")}
             />
            <CustomBtn
            color="#74B9FF"
             style={styles.btn} 
             title="yes" 
             onPress={() => clickHandler("yes")}
             />
        </View>
        <EndModal  
          visible={modal}
          close={() => resetGame()}
          points={points}
          navigation={navigation}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#edf9fa",
    padding: 15,
  },
  btn: {
    width: 100,
    margin: 10
 },
 btnContainer: {
     flexDirection: "row"
 },
    points :{
        width: 50,
        textAlign: "center",
        paddingVertical: 10,
        backgroundColor: "gold",
        marginVertical: 10,
        color:"#fff",
        borderRadius: 5
    }
});
