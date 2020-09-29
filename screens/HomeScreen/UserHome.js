import React, {useState} from 'react';
import { StyleSheet,  View ,ScrollView,TouchableOpacity} from 'react-native';

import {BackgroundBubbles, CustomHeader, CustomText, WarningModal} from "../../components"
import {Welcome} from "./Welcome";
import {Nav} from "../../navigation/Nav";
import { Game } from "./Game"
import {Games} from "../../utils/gamesList";
import {randomInt} from "../../utils/randomInt";




export const UserHome = ({navigation,userCredentials}) => {
    const date = new Date();
    const today = date.getDate();
    const logic = Games.filter((g) => g.category === "logical thinking");
    const attention = Games.filter((g) => g.category === "attention");
    const speed = Games.filter((g) => g.category === "speed");
    const memory = Games.filter((g) => g.category === "memory");

    const logicGame = today%logic.length;
    const attentionGame = today%attention.length;
    const speedGame = today%speed.length;
    const memoryGame = today%memory.length;

    const [isOpen, setIsOpen] = useState(false);
    const [games,setGames] = useState(false);
    const gamePressed = (item) =>{
        setGames(item);
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };
    const playGame = () => {
        setIsOpen(false);
        navigation.navigate("GameScreen", {game: games});
    };

    return (
        <View style={styles.container}>
            <CustomHeader name={"Home"} navigation={navigation}/>
            <ScrollView >
                <Welcome name={userCredentials.fullName}  img={userCredentials.img}/>
                <CustomText style={styles.text}>We have prepared 4 games for you! Enjoy your journey! Become the best version of yourself! </CustomText>
                <View style={styles.games}>
                    <TouchableOpacity
                        onPress={() => gamePressed(logic[logicGame])}>
                        <Game
                            game={logic[logicGame]}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => gamePressed(attention[attentionGame])}>
                        <Game
                            game={attention[attentionGame]}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.games}>
                    <TouchableOpacity
                        onPress={() => gamePressed(speed[speedGame])}>
                        <Game
                            game={speed[speedGame]}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => gamePressed(memory[memoryGame])}>
                        <Game
                            game={memory[memoryGame]}/>
                    </TouchableOpacity>

                </View>


            </ScrollView>
            <Nav navigation={navigation}/>
            {isOpen && <WarningModal  message={games.about} functionality={[{button: 'Close', onPress: close}, {button: 'Play', onPress: playGame}]} isNotWarning={true}/>}
        </View>

    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom: 60,
    },
    text:{
        fontSize : 17,
        paddingHorizontal: 15,
        marginBottom: 15,
        color: "#fff"
    },
    games: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: 'wrap'
    }
});
