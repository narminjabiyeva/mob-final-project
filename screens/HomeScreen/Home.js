import React, {useState} from 'react';
import { StyleSheet,  View ,ScrollView,TouchableOpacity} from 'react-native';

import {GameInfo} from "./GameInfo";
import { About } from "./About"
import {Games} from "../../utils/gamesList";
import {CustomHeader, WarningModal} from "../../components"


export const Home = ({navigation}) => {

    const games = Games.slice(0,4);
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
        <View style={styles.container}>
           <CustomHeader name={"Home"} navigation={navigation}/>
                <ScrollView style={styles.games}>
                 <About navigation={navigation}/>
                    <View style={styles.gamesWrapper}>
                        <View style={styles.gamesWrapperInner}>
                            {
                                games.map((g) =>
                                    <TouchableOpacity
                                        key={g.id}
                                        onPress={() => gamePressed(g)}
                                    >
                                        <GameInfo
                                            category={g.category}
                                            name={g.name}
                                            img={g.img}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </View>
                </ScrollView>
            {isOpen && <WarningModal message={game.about} functionality={[{button: 'Close', onPress: close}, {button: 'Play', onPress: playGame}]} isNotWarning={true}/>}
        </View>

    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    gamesWrapper:{
    },
    gamesWrapperInner: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: 'wrap'
    }
});
