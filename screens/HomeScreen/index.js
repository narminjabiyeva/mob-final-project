import React from 'react';
import { StyleSheet,  View ,ScrollView,TouchableOpacity} from 'react-native';
import { connect } from "react-redux";



import {getUserCredentials} from "../../store/userCredentials"
import  {CustomLinear ,BackgroundBubbles} from "../../components"
import { Home } from "./Home"
import {UserHome} from "./UserHome";

const mapStateToProps = (state) => ({
    userCredentials: getUserCredentials(state),
});


export const HomeScreen = connect(mapStateToProps)(({navigation,userCredentials}) => {


  return (
      <CustomLinear>
          <BackgroundBubbles/>
          <View style={styles.container}>
              {
                  !userCredentials.fullName ?
                      <Home navigation={navigation}/>
                      :
                      <UserHome navigation={navigation} userCredentials={userCredentials}/>

              }
          </View>
      </CustomLinear>

  )
});

const styles = StyleSheet.create({
    container:{
        flex:1,
        zIndex: 2
    },
});
