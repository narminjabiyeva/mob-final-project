import React, {useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

import {CustomText, EndModal} from "../../components"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let SIZE = 4; // four-by-four grid
let CELL_SIZE = Math.floor(width * .2); // 20% of the screen width
let CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
let BORDER_RADIUS = CELL_PADDING * 2;
let TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
let LETTER_SIZE = Math.floor(TILE_SIZE * .75);

function shuffle(array) {
    let i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));


        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

let nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

export const BoardView = ({navigation}) => {
    const [modal,setModal] = useState(false);
    const [number,setNumber] = useState(0);
    const [ranNums,setRanNums] = useState(shuffle(nums));
    const [win,setWin]=useState(false);
    const openedTimer = useRef(null);


    const renderTiles = () => {
        let result = [];
        for (let row = 0; row < SIZE; row++) {
            for (let col = 0; col < SIZE; col++) {
                let key = row * SIZE + col;
                let letter = String.fromCharCode(65 + ranNums[key]);
                let position = {
                    left: col * CELL_SIZE + CELL_PADDING,
                    top: row * CELL_SIZE + CELL_PADDING
                };
                result.push(renderTile(ranNums[key], position, letter))
            }
        }
        return result;
    };


    const renderTile = (id, position, letter) => {
        return <View key={id} style={[styles.tile, position]}>
                      <TouchableOpacity onPress={() => clickTile(id)} style={[styles.tile]}>
                          <Text style={styles.letter}>{letter}</Text>
                      </TouchableOpacity>

              </View>;
    };

    const clickTile = (id) => {

        if(id !== number) {

            setModal(true);
        }
        setNumber((number) => number+1) ;
        // console.log(id);
       if (number===15){
           setWin(true);
           setModal(true);
           // console.log(win);
           // console.log(modal);
       }

    };

    const resetGame = () => {
        setModal(false);
        setWin(false);
        setNumber(0);
        setRanNums(shuffle(nums));
        gameTimer();
    };
    const gameTimer = () => {
        if (openedTimer.current) {
            clearTimeout(openedTimer.current);
        }
        openedTimer.current = setTimeout(() => setModal(true), 30000);
    };

    useEffect(() => {
        gameTimer();
    }, []);


    return (<View style={styles.container}>
            {renderTiles()}
            <EndModal
                visible={modal}
                navigation={navigation}
                close={resetGame}
                points={number ? number-1 : 0}
                win={win}
            />
        </View>)
};

const styles = StyleSheet.create({
    container: {
        width: CELL_SIZE * SIZE,
        height: CELL_SIZE * SIZE,
        backgroundColor: 'transparent',
    },
    tile: {
        position: 'absolute',
        width: TILE_SIZE,
        height: TILE_SIZE,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ABD4FE',
    },
    letter: {
        color: '#333',
        fontSize: LETTER_SIZE,
        backgroundColor: 'transparent',
    },

});
