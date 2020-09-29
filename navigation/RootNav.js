import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import {
    GameScreen,
    PasswordGameScreen,
    ColorGameScreen,
    MemoryGridGameScreen,
    TrafficLightGameScreen,
    HomeScreen,
    TicTacGameScreen,
    MatchingBoxesGameScreen,
    LoginScreen,
    ProfileScreen,
    AllGamesScreen,
    MinFinderGameScreen,
    AlphaRefGame,
    SudokuGameScreen,
    MemoriserGameScreen, MoneyChange,
} from "../screens";

const {Navigator,Screen} = createStackNavigator();
export const RootNav = () => (
    <NavigationContainer>
        <Navigator headerMode="none">
            <Screen  name="Home" component={HomeScreen}/>
            <Screen name="All Games" component={AllGamesScreen}/>
            <Screen name="Login" component={LoginScreen}/>
            <Screen name="Profile" component={ProfileScreen}/>
            <Screen name="GameScreen" component={GameScreen}/>
            <Screen name="Guess the password" component={PasswordGameScreen}/>
            <Screen name="Color crash" component={ColorGameScreen}/>
            <Screen name="Cashout" component={MoneyChange}/>
            <Screen name="MEMORY GRID" component={MemoryGridGameScreen}/>
            <Screen name="TRAFFIC LIGHTS" component={TrafficLightGameScreen}/>
            <Screen name="COINCIDENCE" component={MatchingBoxesGameScreen}/>
            <Screen name="MIN FINDER" component={MinFinderGameScreen}/>
            <Screen name="TIC TAC TOE" component={TicTacGameScreen}/>
            <Screen name="Alpha Reflex" component={AlphaRefGame}/>
            <Screen name="Sudoku" component={SudokuGameScreen}/>
            <Screen name="MEMORISER" component={MemoriserGameScreen}/>
        </Navigator>
    </NavigationContainer>
);
