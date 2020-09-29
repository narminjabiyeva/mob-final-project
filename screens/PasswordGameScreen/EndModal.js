import React from "react";
import {StyleSheet, Modal, View, TouchableOpacity,} from "react-native";
import { CustomText, CustomBtn } from "../../components";
import {COLORS} from "../../styles/colors";
import {FontAwesome5} from "@expo/vector-icons";


export const EndModal = ({ isWin, close, visible,numbers, steps,navigation}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.warningIconContainer}>
            <CustomText  style={styles.warningIcon}>&#9733;</CustomText>
          </View>
          <CustomText style={styles.header} weight="bold">
            You {isWin ? "found the password!" : "give up"}
          </CustomText>
          <CustomText weight="semi" style={styles.password}>
            The password was {numbers}
          </CustomText>
          
            {
              isWin ? 
              <View style={styles.text}>
                <CustomText>You found the password in </CustomText>   
                <CustomText weight="bold" style={styles.steps}>{steps}</CustomText> 
                <CustomText>steps!</CustomText>              
              </View>
              : 
              <View style={styles.text}>
                <CustomText>You tried  </CustomText>   
                <CustomText weight="bold" style={styles.steps}>{steps}</CustomText> 
                <CustomText>times!</CustomText>              
              </View>
             
            }
          
         <View style={styles.btnContainer}>
           <TouchableOpacity
               onPress={close}
               style={{flexDirection: "row", alignItems: 'center'}}>
             <CustomText weight={"semi"} style={styles.errorClose}>Replay</CustomText>
           </TouchableOpacity>
           <TouchableOpacity
               onPress={() => {close(); navigation.navigate("All Games")}}
               style={{flexDirection: "row", alignItems: 'center'}}>
             <CustomText weight={"semi"} style={styles.errorClose}>Exit</CustomText>
           </TouchableOpacity>

         </View>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    padding: 30,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
  },
  password: {

  },
  steps: {
    fontSize: 30,  
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  },
  btnContainer: {
    flexDirection: "row",
    borderTopColor: '#74B9FF',
    borderTopWidth: 1,
    paddingTop: 3,
    width: "100%",
    justifyContent: 'space-around'
  },
  btn: {
    width: 100,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  errorClose: {
    fontSize: 20,
    marginTop: 5
  },
  warningIcon: {
    fontSize: 30,
    color: 'white',
  },
  warningIconContainer: {
    backgroundColor: '#FFC048',
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
});
