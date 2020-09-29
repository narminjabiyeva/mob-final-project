import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SudokuGrid } from './sudokugrid';
import {theme} from './colors';
import {BackButton} from "../../components/backButton";

export class SudokuGameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <BackButton navigation={this.props.navigation}/>
        <View style={{flex:1, flexDirection:'column', justifyContent:'flex-end'}}>
	      <Text style={{ fontSize:35, color:theme.titleColor, fontWeight:'bold'}}>Sudoku</Text>
        </View>
        <View style={{flex:7, flexDirection:'row'}}>
          <SudokuGrid />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column' 
  },
});
