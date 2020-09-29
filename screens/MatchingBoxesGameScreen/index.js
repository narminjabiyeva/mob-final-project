import React from 'react';

import { StyleSheet, View} from 'react-native';
import Container from './src/components/Container';

import {BackButton} from '../../components/backButton'

export class MatchingBoxesGameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BackButton navigation={this.props.navigation}/>
      <Container startTiles={3} size={4} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
