import React from 'react';
import { StyleSheet, View } from 'react-native';
import {BoardView} from "./BoardView";
import {BackButton} from "../../components/backButton";
export class AlphaRefGame extends React.Component{
    render() {
        return <View style={styles.container}>
            <BackButton navigation={this.props.navigation}/>
            <BoardView navigation={this.props.navigation}/>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#edf9fa',
    },
});
