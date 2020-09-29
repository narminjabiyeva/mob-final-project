import React, {useState} from 'react';
import { StyleSheet,  View, TouchableOpacity, ScrollView } from 'react-native';

import  { Games } from "../../utils/gamesList"
import  { genID } from "../../utils/genID"

import  { CategoryHeader } from "./CategoryHeader"
import {Nav} from "../../navigation/Nav";
import {BackgroundBubbles, CustomHeader, CustomLinear, WarningModal} from "../../components";
import {GameInfo} from "../HomeScreen/GameInfo";


export const AllGamesScreen = ({navigation}) => {

    const categories = ["attention", "logical thinking","memory","speed"];

    const [isOpen,setIsOpen] = useState(false);
    const [game,setGame] = useState(false);
    const gamePressed = (item) =>{
        setGame(item);
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };
    const playGame = () => {
        setIsOpen(false);
        navigation.navigate("GameScreen", {game: game});
    };
    return (
        <View style={{flex:1}}>
            <CustomLinear>
                <BackgroundBubbles/>
            <CustomHeader name={"All Games"} navigation={navigation} />

            <ScrollView style={styles.container}>
            {
                categories.map((c) =>
                    <View style={{width: "100%"}} key={genID()}>
                        <CategoryHeader name={c}/>
                        <View style={styles.gamesWrapperInner}>
                            {
                                Games.filter((game) => game.category === c)
                                    .map((g) =>
                                        <TouchableOpacity
                                            key={g.id}
                                            onPress={() => gamePressed(g)}
                                        >
                                            <GameInfo
                                                name={g.name}
                                                img={g.img}
                                            />
                                        </TouchableOpacity>
                                    )
                            }
                        </View>
                    </View>
                )
            }
          </ScrollView>
            <Nav navigation={navigation}/>
                {isOpen && <WarningModal message={game.about} functionality={[{button: 'Close', onPress: close}, {button: 'Play', onPress: playGame}]} isNotWarning={true}/>}
            </CustomLinear>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        marginBottom: 60,

    },
    gamesWrapperInner: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: 'wrap',
        paddingBottom:50
    }

});
