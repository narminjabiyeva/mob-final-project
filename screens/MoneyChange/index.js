import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, StyleSheet, Image, ScrollView} from "react-native";
import {CustomBtn, CustomText, EndModal} from "../../components";
import {COLORS} from "../../styles/colors";
import manat1 from './money/1_manat_obv.jpg';
import manat5 from './money/5_manat_rev.jpg';
import manat10 from './money/10_manat_obv.jpg';
import manat20 from './money/20_manat_rev.jpg';
import manat50 from './money/50-manat_front.jpg';
import manat100 from './money/100_manat_obv.jpg';
import manat200 from './money/200_manat_obv.jpg';

import qepik1 from './money/1qepik.png';
import qepik3 from './money/3qepik.png';
import qepik5 from './money/5qepik.png';
import qepik10 from './money/10qepik.png';
import qepik20 from './money/20qepik.png';
import qepik50 from './money/50qepik.png';
import {BackButton} from "../../components/backButton";


export const MoneyChange = ({navigation}) => {
    const [time, setTime] = useState(null);
    const [amount, setAmount] = useState(null);
    const [hardness, setHardness] = useState("");
    const [start, setStart] = useState(false);
    const [totalCount, setTotalCount] = useState(null);
    const [totalSource, setTotalSource] = useState(null);
    const [sum, setSum] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [endGame, setEndGame] = useState(false);
    const openedTimer = useRef(null);
    let timer;
    const totalAmounts = [
        [{count: 100, source: manat1}, {count: 500, source: manat5}],
        [{count: 500, source: manat5}, {count: 1000, source: manat10},{count: 2000, source: manat10}],
        [{count: 1000, source: manat10}, {count: 2000, source: manat20}, {count: 5000, source: manat50}, {count: 10000, source: manat100}, {count: 20000, source: manat200}]];
    const allMoney = [{count: 1, source: qepik1}, {count: 3, source: qepik3}, {count: 5, source: qepik5},{count: 10, source: qepik10}, {count: 20, source: qepik20}, {count: 50, source: qepik50},{count: 100, source: manat1}, {count: 500, source: manat5}, {count: 1000, source: manat10},{count: 2000, source: manat20}, {count: 5000, source: manat50}, {count: 10000, source: manat100}];
    const totalValue = (totalVal) => {
        let val1,val2;
        if (totalVal === 'easy') {
            val1 =  totalAmounts[0][Math.floor(Math.random()*totalAmounts[0].length)];
        } else if(totalVal === 'medium') {
            val1 = totalAmounts[1][Math.floor(Math.random()*totalAmounts[1].length)];
        } else if(totalVal === 'hard'){
            val1 = totalAmounts[2][Math.floor(Math.random()*totalAmounts[2].length)];
        }
        val2 =  (val1.count - Math.floor(Math.random() * (val1.count)));
        setTotalCount(val1.count);
        setTotalSource(val1.source);
        setAmount(val2);
        setStart(true);
    };
    const setStartGame = (val) => {
        setHardness(val);
        totalValue(val);
        setTime(60);
    };
    const checkAnswer = () => {
        if(totalCount - amount === sum) {
            setCorrect(correct+1);
        }
        totalValue(hardness);
        setSum(0);
    };
    const restart = () => {
        clearTimeout(timer);
      setCorrect(0);
      setSum(0);
      setEndGame(false);
      totalValue(hardness);
    };
    const gameTimer = () => {
        if (openedTimer.current) {
            clearTimeout(openedTimer.current);
        }
        openedTimer.current = setTimeout(() => setEndGame(true), 60000);
    };

    useEffect(() => {
        gameTimer();
    }, [time]);
    return (
        <ScrollView style={styles.wrapper}>
            <BackButton navigation={navigation}/>
            <View style={styles.container}>
                {!start &&
                <View style={styles.btnContainer}>
                    <CustomBtn title={"Easy"} style={styles.button} color={COLORS.secondWarning} onPress={() => setStartGame('easy')}/>
                    <CustomBtn title={"Medium"} style={styles.button} color={COLORS.secondBg} onPress={() => setStartGame('medium')}/>
                    <CustomBtn title={"Hard"} style={styles.button} color={COLORS.secondWarning} onPress={() => setStartGame('hard')}/>
                </View>
                }
                {start &&
                <View>
                    <View style={styles.btnContainer}>
                        <CustomText style={styles.text}>{amount/100}</CustomText>
                        <Image source={totalSource} style={styles.image}/>
                    </View>
                    <View style={styles.sumContainer}>
                        <CustomText style={styles.sum} weight={"bold"}>{correct}</CustomText>
                        <CustomText style={{...styles.sum,backgroundColor: COLORS.secondBg}} weight={"bold"}>{sum/100}</CustomText>
                    </View>
                    <View>
                        <View style={styles.optionsContainer}>
                            {allMoney.map((item, index) =>index < 6 && <TouchableOpacity key={index} onPress={() => setSum(sum + item.count)}>
                                <Image source={item.source} style={styles.options}/>
                            </TouchableOpacity>)}
                        </View>
                        <View style={styles.optionsContainer}>
                            {allMoney.map((item, index) => index > 5 && <TouchableOpacity key={index} onPress={() => setSum(sum + item.count)}>
                                <Image source={item.source} style={styles.options}/>
                            </TouchableOpacity>)}
                        </View>
                    </View>
                    <View style={{...styles.btnContainer,...styles.bottomContainer}}>
                        <CustomBtn title={"Clear"} color={COLORS.mainWarning} style={styles.button} onPress={() => setSum(0)}/>
                        <CustomBtn title={"Submit"} color={COLORS.mainBg} style={styles.button} onPress={checkAnswer}/>
                    </View>
                </View>
                }

            </View>
            <EndModal navigation={navigation} visible={endGame} win={false} close={restart} points={correct}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container:{
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        width: '30%',
    },
    image:{
        width: '60%',
        height: 100,
        resizeMode: 'contain',
    },
    optionsContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    options: {
        width: 120,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    text: {
        fontSize: 30,
    },
    bottomContainer:{
        marginTop: 20,
    },
    sum: {
        fontSize: 30,
        backgroundColor: COLORS.mainWarning,
        color: 'white',
        width: 150,
        borderRadius: 10,
        textAlign: 'center',
        marginHorizontal:15,
    },
    sumContainer: {
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
