import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Cell from './cell';
import style from './style';

export default class Row extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            values: this.props.values,
            cellSize: this.props.cellSize
        }
    }

    componentWillReceiveProps(x) {
        this.setState({ values: x.values });
    }

    render() {
        return (<View style={[style.rowView, { height: this.state.cellSize }]}>
            {
                this.state.values.map((value, index) => {
                    return (<Cell
                        key={'c' + index}
                        value={value}
                        cellSize={this.state.cellSize}
                        _onItemTapped={this.props._onItemTapped}
                    />);
                })
            }

        </View>);
    }
}