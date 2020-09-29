import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Row from './row';

export default class Grid extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            values: this.props.values,
            cellSize: this.props.cellSize
        }
    }

    componentWillMount() {
        this._processData(this.props.values);
    }

    componentWillReceiveProps(x) {
        this._processData(x.values);
    }

    _processData(values) {
        let rowItems = [];
        for (let i = 0; i < 4; i++) {
            rowItems.push(values.slice(i * 4, (i + 1) * 4));
        }
        this.setState({ values: rowItems });
    }

    render() {
        return (<View>
            {
                this.state.values.map((values, index) => {
                    return (<Row
                        key={'r' + index}
                        values={values}
                        cellSize={this.state.cellSize}
                        _onItemTapped={this.props._onItemTapped}
                    />);
                })
            }

        </View>);
    }
}