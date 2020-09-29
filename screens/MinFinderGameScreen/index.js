import React, { Component } from 'react';
import { Text, View, Dimensions, Modal } from 'react-native';
import { Button } from 'native-base';
import Grid from './grid';
import style from './style';
import {CustomText,CustomBtn,EndModal} from "../../components";
import GameConfig from './gameConfig';
import Data from './data';
import {BackButton} from "../../components/backButton";
let SortedList = require('sortedlist');

const { width, height } = Dimensions.get("window");
const cellSize = (Math.min(width, height) - 35) / 5;

export class MinFinderGameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedValues: [],
      values: [],
      score: 0,
      bestScore: GameConfig.bestScore,
      backgroundColor: 'white',
      timer: 15,
      endModalVisible: false,
    }

    this._updateTime = this._updateTime.bind(this);
    this._onItemTapped = this._onItemTapped.bind(this);
    this._closeEndGameModal = this._closeEndGameModal.bind(this);
    this._replay = this._replay.bind(this);
  }

  componentWillMount() {
    this._initializeList();
  }

  _initializeList() {
    let sortedList = SortedList.create();
    let list = [];

    while (sortedList.length < 16) {
      let val = Math.round(Math.random() * 100) + 1;
      if (sortedList.key(val) == null) {
        sortedList.insert(val);
        list.push({
          key: list.length,
          val: val
        });
      }
    }

    this.state.backgroundColor = Data.backgroundColors[(this.state.score % 160) / 10];
    this.setState({ sortedValues: sortedList, values: list });
    this.forceUpdate();
    this.state.timer = 15;
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(this._updateTime, 1000);
  }

  _updateTime() {
    this.state.timer--;
    this.forceUpdate();
    if (this.state.timer == 0) {
      clearInterval(this.timerInterval);
      this.setState({ endModalVisible: true });
    }
  }

  async _onItemTapped(item) {
    if (item.val == this.state.sortedValues[0]) {
      this.state.time += 2;
      this.state.score++;

      if (this.state.score > this.state.bestScore) {
        await GameConfig.updateBestScore(this.state.score);
        this.setState({ bestScore: this.state.score });

        let sortedList = this.state.sortedValues;
        let list = this.state.values;
        this.setState({ sortedValues: [], values: [] });

        if (this.state.score % 10 == 0) {
          this._initializeList();
          return;
        }

        let newVal = Math.round(Math.random() * 100) + 1;
        while (sortedList.key(newVal) == null) {
          let newVal = Math.round(Math.random() * 100) + 1;
        }

        sortedList.remove(0);

        list.splice(item.key, 1, { key: item.key, val: newVal });
        sortedList.insert(newVal);
        this.setState({ sortedValues: sortedList, values: list });
        this.forceUpdate();
      }
    } else {
      this.setState({ endModalVisible: true });
    }
  }

  _closeEndGameModal() {
    this.setState({ endModalVisible: false });
  }

  _replay() {
    this.state.score = 0;
    this._closeEndGameModal();
    this._initializeList();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: this.state.backgroundColor }}>
        <BackButton navigation={this.props.navigation}/>
        <View style={[style.topView, { height: cellSize }]}>
          <View style={style.indexRowView}>
            <Text style={[style.indexVerticalText, { fontSize: cellSize * 0.6 }]}>{this.state.score}</Text>
          </View>
          <View style={style.indexRowView}>
            <Text style={[style.indexVerticalText, { fontSize: cellSize * 0.6 }]}>{this.state.timer >= 60 ? this.state.timer / 60 : ''}{':'}{this.state.timer % 60}</Text>
          </View>
          <View style={style.indexSimpleView}>
            <Text style={[style.indexText, { fontSize: cellSize * 0.2 }]}>BEST SCORE</Text>
            <Text style={[style.indexText, { fontSize: cellSize * 0.4 }]}>{this.state.bestScore}</Text>
          </View>
        </View>
        <Grid
          values={this.state.values}
          cellSize={cellSize}
          _onItemTapped={this._onItemTapped}
        />
        <EndModal
          navigation={this.props.navigation}
          points={this.state.score}
          visible={this.state.endModalVisible}
          close={this._replay}
        />


      </View >
    );
  }
}
