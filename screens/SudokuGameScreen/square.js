import React, { Component } from 'react';
import { AppRegistry, TextInput} from 'react-native';
import {colors, theme} from './colors';


export class Square extends Component {
  constructor(props) {
    super(props);
	this.state = {val: '', disabled:false};
	this.val = '';
	this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  
  onChangeHandler(e){
		if(!(parseInt(e.nativeEvent.text)>=1 && parseInt(e.nativeEvent.text)<=9)){
			//console.log("kmksmdkms");
			this.setState({val: ''});
			this.val = '';
		}else{
			//console.log("##");
			this.setState({val: e.nativeEvent.text});
			this.val = e.nativeEvent.text;
		}	
		//console.log(this.val);
		this.props.propTest(this.val, this.props.gridId, this.props.squareId);
		this.props.displayMsg();
	}

  render() {
    let enabledSquare = (
	  <TextInput
        style={{fontSize:theme.gridFontSize, textAlign:"center", borderColor: theme.borderColor, color:theme.gridEnabledTextColor, borderWidth: 1, backgroundColor:this.props.sqColor, borderRadius:3}}
		onChange={(e) => this.onChangeHandler(e)}
		value={this.state.val}
		maxLength={1}
		keyboardType={'numeric'}
      />
    );
	
	let disabledSquare = (
		<TextInput
		  style={{fontSize:theme.gridFontSize, textAlign:"center", borderColor: theme.borderColor, color:theme.gridDisabledTextColor, borderWidth: 1, backgroundColor:this.props.sqColor, borderRadius:3}}
		  onChange={(e) => this.onChangeHandler(e)}
		  value={this.state.val}
		  maxLength={1}
		  editable={false}
		/>
	);
	
	if(this.state.disabled === true){
		return disabledSquare;
	}
	return enabledSquare;
  }
}
