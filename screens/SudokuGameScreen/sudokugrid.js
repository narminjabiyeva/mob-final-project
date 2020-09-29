import React, { Component } from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';
import { ThreeByThreeGrid } from './threebythreegrid';
import {colors, theme} from './colors';

export class SudokuGrid extends React.Component{
	constructor(props){
		super(props);
		this.state = {message: '', alertClass: "alert alert-success", messageVisibility: "hidden"};
		//this.test = '0';
		this.test = this.test.bind(this);
		this.grid = [['','','','','','','','',''], 
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','','']
		];
		this.message = "";
		this.solve = this.solve.bind(this);
		this.clearGrid = this.clearGrid.bind(this);
		this.newGrid = this.newGrid.bind(this);
		this.displayMsg = this.displayMsg.bind(this);
		//this.newGridFast = this.newGridFast.bind(this);
	}
	
	clearGridArray(){
		this.grid = [['','','','','','','','',''], 
					 ['','','','','','','','',''],
					 ['','','','','','','','',''],
					 ['','','','','','','','',''],
					 ['','','','','','','','',''],
					 ['','','','','','','','',''],
					 ['','','','','','','','',''],
					 ['','','','','','','','',''],
					 ['','','','','','','','','']
					];
	}
	
	clearGrid(e){
		this.clearGridArray();
		this.printToGUI('clearGrid');
		this.displayMsg();
	}
	
	getRandomBetweenRange(min, max){
		return Math.floor((Math.random() * (max-min)) + min);
	}
	
	getRandomPermutation(min, max){
let orgList = [];
		let permList = [];
		for (let i=min; i<=max; i++){
			orgList.push(i);
		}
		for (let i=min; i<=max; i++){
			let j = this.getRandomBetweenRange(0, orgList.length-1);
			let elm = orgList[j];
			orgList.splice(j, 1);
			permList.push(elm);
		}
		return permList;
	}
	
	newGrid(level){
		let initProblem = false;
		while(!initProblem){
			this.clearGridArray();
			let cnt = 0;
			let row = 0;
			let col = 0;
			let val = 0;
			while(cnt<8){
				row = this.getRandomBetweenRange(0,8);
				col = this.getRandomBetweenRange(0,8);
				val = this.getRandomBetweenRange(1,9);
				this.grid[row][col] = val.toString();
				if (this.isSudokuGridValid(this.grid)){
					cnt++;
				}
				else{
					this.grid[row][col] = '';
				}				
			}
			initProblem = this.solveSudoku(this.grid, 0, 0);
		}
		
		let list = this.getRandomPermutation(0, 80);
		//console.log(list);
		//console.log('Init grid: ' + this.grid);
		let upperBound = list.length;
		if (level === 'easy'){
			upperBound = Math.floor(upperBound/3);
		}
		else if (level === 'medium'){
			upperBound = Math.floor(upperBound/2);
		}
		for (let i = 0; i<upperBound; i++){
			let elm = this.grid[Math.floor(parseInt(list[i])/9)][parseInt(list[i])%9];
			this.grid[Math.floor(parseInt(list[i])/9)][parseInt(list[i])%9] = '';
			let solutions = [];
			this.noOfSudokuSolutions(this.grid, 0, 0, solutions);
			//console.log('After: ' + this.grid);
			if (solutions.length > 1){
				this.grid[Math.floor(parseInt(list[i])/9)][parseInt(list[i])%9] = elm;
			}
		}
		this.printToGUI('newGrid');
		this.displayMsg();
	}
	
	newGridFast(e){
		this.clearGridArray();
		let solutions = [];
		this.fastSudokuGenerator(this.grid, 0, 0, solutions, '1'); 
		this.printToGUI('newGrid');
	}
	
	printToGUI(callFrom='default'){
		//this.grid = this.solve();
		for(let i=0;i<9;i++){
			for(let j=0;j<9;j++){
				let row = Math.floor(parseInt(i)/3)*3 + Math.floor(parseInt(j)/3);
				let col = (parseInt(i)%3)*3 + (parseInt(j)%3);
				if (callFrom === 'newGrid'){
					this.refs[i].refs[j].setState({val:this.grid[row][col], disabled:!(this.grid[row][col]==='')});
				}
				else if (callFrom === 'clearGrid'){
					this.refs[i].refs[j].setState({val:this.grid[row][col], disabled:false});
				}
				else{
					this.refs[i].refs[j].setState({val:this.grid[row][col]});
				}
			}
		}
		
	}
	
	test(num, threeByThreeGridNo, squareNo){
		let row = Math.floor(parseInt(threeByThreeGridNo)/3)*3 + Math.floor(parseInt(squareNo)/3);
		let col = (parseInt(threeByThreeGridNo)%3)*3 + (parseInt(squareNo)%3);
		this.grid[row][col] = num;
	}
	
	getNextCell(grid, row, col){
		for(let i = row; i < 9; i++){
			for(let j = 0; j < 9; j++){
				if (grid[i][j] === ''){
					return [i, j];
				}
				
			}
		}
		return [null, null];
	}
	
	isValid(grid, row, col, val){
		// check in row
		if (val === ''){
			return true;
		}
		for(let i=0; i<9;i++){
			if (grid[row][i] === val){
				return false;
			}
		}
		
		// check in col
		for(let i=0; i<9;i++){
			if (grid[i][col] === val){
				return false;
			}
		}
		
		// check in 3*3 grid
		let rowStart = Math.floor(parseInt(row)/3)*3;
		let colStart = Math.floor(parseInt(col)/3)*3;
		for(let i=0; i<3;i++){
			for(let j=0; j<3;j++){
				if (grid[rowStart+i][colStart+j] === val){
					return false;
				}
			}
		}
		
		return true;
	}

	noOfSudokuSolutions(grid, row, col, allSolutions){
		// Find next unassigned cell
		let cell = this.getNextCell(grid, row, col);
		//console.log(cell);
		if (cell[0] == null){
			let gridCopy = [];
			for (let i = 0; i < grid.length; i++){
				gridCopy[i] = grid[i].slice();
			}
			allSolutions.push(gridCopy);
			return;
		}
		for (let i=1; i<=9;i++){
			if (this.isValid(grid, cell[0], cell[1], i.toString())){
				grid[cell[0]][cell[1]] = i.toString();
				this.noOfSudokuSolutions(grid, cell[0], cell[1], allSolutions);
				if (allSolutions.length >= 2){
					grid[cell[0]][cell[1]] = '';
					return;
				}
				grid[cell[0]][cell[1]] = '';
			}
		}
	}
	
	solveSudoku(grid, row, col){
		// Find next unassigned cell
		let cell = this.getNextCell(grid, row, col);
		//console.log(cell);
		if (cell[0] == null){
			return true;
		}
		for (let i=1; i<=9;i++){
			if (this.isValid(grid, cell[0], cell[1], i.toString())){
				grid[cell[0]][cell[1]] = i.toString();
				if (this.solveSudoku(grid, cell[0], cell[1])){
					return true;
				}
				grid[cell[0]][cell[1]] = '';
			}
		}
		
		return false;
	}
	
	isSudokuGridValid(grid){
		for (let i=0; i<9; i++){
			for (let j=0; j<9; j++){
				let val = grid[i][j];
				grid[i][j] = '';
				if (!this.isValid(grid, i, j, val)){
					grid[i][j] = val;
					return false;
				}
				grid[i][j] = val;
			}
		}
		return true;
	}
	
	solve(e){
		let gridCopy = [];
		for (let i = 0; i < this.grid.length; i++){
			gridCopy[i] = this.grid[i].slice();
		}
		//check if input is valid
		let valid = this.isSudokuGridValid(gridCopy);
		if (!valid){
			alert('Wrong input!!!');
			return gridCopy;
		}
		let result = this.solveSudoku(gridCopy, 0, 0);
		//console.log(result);
		this.grid = gridCopy;
		this.printToGUI();
		this.displayMsg();
	}

	displayMsg(){
		if (this.getNextCell(this.grid, 0, 0)[0] === null){
			console.log("Called");
			if (this.isSudokuGridValid(this.grid)){
				this.setState({message: "Well done! You got it right!", alertClass: "alert alert-success", messageVisibility: "visible"});
			}
			else{
				this.setState({message: "Oops! This is not right!", alertClass: "alert alert-danger", messageVisibility: "visible"});
			}
		}
		else{
				this.setState({message: "", messageVisibility: "hidden"});
		}
		console.log(this.state.message);
	}
	
	render(){
		return (
				<View ref="sudoku" style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
					<View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' }}>
						<Button color={theme.btnEasyColor} style={{justifyContent:'center'}} onPress={(e) => this.newGrid('easy')} title='Easy'/>
						<Button color={theme.btnMediumColor} style={{justifyContent:'center'}} onPress={(e) => this.newGrid('medium')} title='Medium'/>
						<Button color={theme.btnHardColor} style={{justifyContent:'center'}} onPress={(e) => this.newGrid('hard')} title='Hard'/>
					</View>
					
					<View style={{flex:10,flexDirection:'column', justifyContent:'flex-start'}}>
						<View style={{flexDirection:'row', justifyContent:'center'}}>
							<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
							<ThreeByThreeGrid propTest={this.test} displayMsg={this.displayMsg} gridId='0' gridColor={theme.gridPrimaryColor} ref="0"/>
							</View>
							
							<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
							<ThreeByThreeGrid propTest={this.test} displayMsg={this.displayMsg} gridId='1' gridColor={theme.gridSecondaryColor} ref="1"/>
							</View>
							
							<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
							<ThreeByThreeGrid propTest={this.test} displayMsg={this.displayMsg} gridId='2' gridColor={theme.gridPrimaryColor} ref="2"/>
							</View>
							
						</View>
						<View style={{flexDirection:'row', justifyContent:'center'}}>
						<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
							<ThreeByThreeGrid propTest={this.test} displayMsg={this.displayMsg} gridId='3' gridColor={theme.gridSecondaryColor} ref="3"/>
							</View>
							<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
							<ThreeByThreeGrid propTest={this.test} displayMsg={this.displayMsg} gridId='4' gridColor={theme.gridPrimaryColor} ref="4"/>
							</View>
							<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
							<ThreeByThreeGrid propTest={this.test} displayMsg={this.displayMsg} gridId='5' gridColor={theme.gridSecondaryColor} ref="5"/>
							</View>
						</View>
						<View style={{flexDirection:'row', justifyContent:'center'}}>
						<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
							<ThreeByThreeGrid propTest={this.test} displayMsg={this.displayMsg} gridId='6' gridColor={theme.gridPrimaryColor} ref="6"/>
							</View>
							<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
							<ThreeByThreeGrid propTest={this.test} displayMsg={this.displayMsg} gridId='7' gridColor={theme.gridSecondaryColor} ref="7"/>
							</View>
							<View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
							<ThreeByThreeGrid propTest={this.test} displayMsg={this.displayMsg} gridId='8' gridColor={theme.gridPrimaryColor} ref="8"/>
							</View>
						</View>
						<View style={{flexDirection:'row', hide: this.state.messageVisibility, justifyContent:'center'}} className={this.state.alertClass} role="alert">
							<Text style={{color: theme.gridStatusColor, fontSize:theme.gridFontSize}}>{this.state.message}</Text>
						</View>
					</View>
					
					<View style={{flex:1, flexDirection:'column', justifyContent:'flex-start'}}>
						<Button color={theme.btnSolveColor} style={{justifyContent:'center'}} onPress={(e) => this.solve(e)} title='Solve'/>
						<Button color={theme.btnClearGridColor} style={{justifyContent:'center'}} onPress={(e) => this.clearGrid(e)} title='Clear Gr i d '/>
					</View>
				</View>		
		);
	}	
}
