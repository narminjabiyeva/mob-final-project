import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';

import Data from './data';
import style from './style';

export default class Cell extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            cellSize: this.props.cellSize
        }
    }


    componentWillReceiveProps(x) {
        this.setState({ value: x.value });
    }

    render() {
        return (<TouchableHighlight key={this.state.value.key} onPress={() => { this.props._onItemTapped(this.state.value) }}
            style={[style.cellTouchableHighlight, { backgroundColor: Data.cellColors[this.state.value.key], height: this.state.cellSize, width: this.state.cellSize }]}>
            <Text style={[style.cellText, { fontSize: this.state.cellSize * 0.3 }]}>{this.state.value.val}</Text>
        </TouchableHighlight>);
    }
}