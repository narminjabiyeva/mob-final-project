import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Square } from './square';

export class ThreeByThreeGrid extends React.Component{
	constructor(props){
		super(props);
		//console.log('Inside 3*3: ');
		//console.log(this.props.propTest);
	}
	
	render(){
		return (
			<View style={{flexDirection:'column'}}>
				<View style={{flexDirection:'row'}}>
				<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
					<Square ref="0" propTest={this.props.propTest} displayMsg={this.props.displayMsg} gridId={this.props.gridId} squareId='0' sqColor={this.props.gridColor}/>
				</View>
				<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
					<Square ref="1" propTest={this.props.propTest} displayMsg={this.props.displayMsg} gridId={this.props.gridId} squareId='1' sqColor={this.props.gridColor}/>
					</View>
					<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
					<Square ref="2" propTest={this.props.propTest} displayMsg={this.props.displayMsg} gridId={this.props.gridId} squareId='2' sqColor={this.props.gridColor}/>
				</View>
				</View>
				<View style={{flexDirection:'row'}}>
				<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
					<Square ref="3" propTest={this.props.propTest} displayMsg={this.props.displayMsg} gridId={this.props.gridId} squareId='3' sqColor={this.props.gridColor}/>
				</View>
				<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
					<Square ref="4" propTest={this.props.propTest} displayMsg={this.props.displayMsg} gridId={this.props.gridId} squareId='4' sqColor={this.props.gridColor}/>
					</View>
					<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
					<Square ref="5" propTest={this.props.propTest} displayMsg={this.props.displayMsg} gridId={this.props.gridId} squareId='5' sqColor={this.props.gridColor}/>
					</View>
				</View>
				<View style={{flexDirection:'row'}}>
				<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
					<Square ref="6" propTest={this.props.propTest} displayMsg={this.props.displayMsg} gridId={this.props.gridId} squareId='6' sqColor={this.props.gridColor}/>
					</View>
					<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
					<Square ref="7" propTest={this.props.propTest} displayMsg={this.props.displayMsg} gridId={this.props.gridId} squareId='7' sqColor={this.props.gridColor}/>
					</View>
					<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
					<Square ref="8" propTest={this.props.propTest} displayMsg={this.props.displayMsg} gridId={this.props.gridId} squareId='8' sqColor={this.props.gridColor}/>
					</View>
				</View>
			</View>
		);
	}
}
