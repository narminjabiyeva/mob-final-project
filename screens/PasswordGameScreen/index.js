import React, { useState,useRef } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import { createNumber } from "../../utils/createNumber"
import {CustomText, CustomBtn, WarningModal, CustomLinear} from "../../components";
import { EndModal } from "./EndModal"
import { History } from "./History"
import { Keyboard } from "./Keyboard"
import {BackButton} from "../../components/backButton";


export const PasswordGameScreen = ({navigation}) => {

  const [numbers,setNumbers] = useState(createNumber(4,10));
  const [input,setInput] = useState([]);
  const [history, setHistory ]= useState([]);
  const [modal, setModal ]= useState(false);
  const [win, setWin ]= useState(true);
  const [warning,setWarning] = useState(false);

  const yellow = useRef(0);
  const green = useRef(0)


  const yellowCount = () => {    
    let y = 0;
    for(const num of input){
      if(numbers.includes(num)) {
        y++;
      }
    } 
    yellow.current = y
  };

  const greenCount = () => {    
    let g = 0;
    for(let i = 0; i <input.length; i++){
      if(input[i] === numbers[i]) {
        g++;
      }
    } 
    green.current = g
  };

  const numberButtonHandler = (btn) => {   
      setInput([...input, btn]);   
    };
  
  const setInputHistory = () => {
     setHistory([
        ...history,
        {
          inputs: input,
          y: yellow.current,
          g: green.current
        },
        
      ])
  }

  const submitButtonHandler = () => {
    if(input.length === 4)
    {
      if((new Set(input)).size !== input.length) {
        setWarning(true);
        setInput([]);
      }
      else {
        yellowCount();
        greenCount();
        setInput([]);
        if(green.current === 4 ) {
          setModal(true)
        }
      setInputHistory();
      }

      }
  } ;

  const resetGame = () => {
    setInput("");
    yellow.current = 0;
    green.current = 0;
    setNumbers(createNumber(4,10));
    setHistory([]);
    setModal(false);

  }
  
  const showPassWord = () => {
    setWin(false);
    setModal(true);
  }

  

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation}/>
      {warning ? <WarningModal
          message={"There is no repeated digit"}
          functionality={[
            { button: 'OK',
              onPress: () => setWarning(false)},
          ]}/> : null}
        
      <History history={history}/>

      <View style={styles.codeContainer}>
        <View style={styles.yellowCode}>
           <CustomText style={styles.fontColor} weight="bold">
               {yellow.current - green.current}
           </CustomText>
        </View>
        <View style={styles.greenCode}>
           <CustomText style={styles.fontColor} weight="bold">
               {green.current}
           </CustomText>
        </View>
      </View>

      <View style={styles.inputContainer}>        
        <CustomText style={styles.input}> {input[0]} </CustomText>
        <CustomText style={styles.input}> {input[1]} </CustomText>
        <CustomText style={styles.input}> {input[2]} </CustomText>
        <CustomText style={styles.input}> {input[3]} </CustomText>
      </View>
      
      <Keyboard
       input={input}
       numberButtonHandler={numberButtonHandler}
       clear={() => { setInput("")}}
       sumbitButtonHandler={() => submitButtonHandler()}
      />

       
      <TouchableOpacity onPress={() => showPassWord()}>
        <View style={styles.showBtn} >
          <Text style={styles.showBtnTitle}>
            show password
          </Text>
        </View>
      </TouchableOpacity> 

      <EndModal  
        visible={modal}
        close={() => resetGame()}
        isWin={win}
        numbers={numbers}
        steps={history.length}
        navigation={navigation}
       />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf9fa",
    alignItems: 'center',

  },

  codeContainer: {
    flexDirection: "row",
    width: "50%",
    marginVertical: 20,
    justifyContent: "space-evenly"
  },
  yellowCode: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFC048",
    borderRadius: 30

  },
  greenCode: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#19EAFF",
    borderRadius: 30
  },  
  inputContainer: {
    flexDirection: "row",
     marginVertical:10,
    zIndex:  -1,
  }, 
  input: {  
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 20,
    padding:10,
    textAlign: "center",
    marginHorizontal:5,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },

  showBtn: {
    backgroundColor: "#6C5CE7",
     paddingVertical: 5,
     paddingHorizontal: 15,
     borderRadius: 10,
     marginVertical:10
     
  },
  showBtnTitle: {
     fontSize: 15,
     textTransform: "capitalize",
     color: "#fff",
     fontWeight: "bold"
  },
  fontColor: {
    color: "#fff"
  }
});



