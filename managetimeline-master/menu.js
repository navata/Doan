/*React Native TimeLine ListView / Flatlist*/
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BasicTimeLine from './components/BasicTimeLine.js';
import CustomTimeLine from './components/CustomTimeLine.js';
import DotTimeLine from './components/DotTimeLine.js';
import IconTimeLine from './components/IconTimeLine.js';
import OverrideRenderTimeLine from './components/OverrideRenderTimeLine.js';
import RefreshLoadMoreTimeLine from './components/RefreshLoadMoreTimeLine.js';
import SingleRightTimeLine from './components/SingleRightTimeLine.js';
import TemplateTimeLine from './components/TemplateTimeLine.js';
import TimeLinePress from './components/TimeLinePress.js';
import TwoColumnTimeLine from './components/TwoColumnTmeLine.js';

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    //state to manage the screen visible at a time
    this.state = { val: 1 };
  }
  renderElement() {
    //You can add N number of Views here in if-else condition
    if (this.state.val === 1) {
      return <BasicTimeLine />;
    } else if (this.state.val === 2) {
      return <CustomTimeLine />;
    } else if (this.state.val === 3) {
      return <DotTimeLine />;
    } else if (this.state.val === 4) {
      return <IconTimeLine />;
    } else if (this.state.val === 5) {
      return <OverrideRenderTimeLine />;
    } else if (this.state.val === 6) {
      return <RefreshLoadMoreTimeLine />;
    } else if (this.state.val === 7) {
      return <SingleRightTimeLine />;
    } else if (this.state.val === 8) {
      return <TemplateTimeLine />;
    } else if (this.state.val === 9) {
      return <TimeLinePress />;
    } else if (this.state.val === 10) {
      return <TwoColumnTimeLine />;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <ScrollView horizontal>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ val: 1 })}>
                <Text style={{ color: '#ffffff' }}>Basic TimeLine</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ val: 2 })}>
                <Text style={{ color: '#ffffff' }}>Custom TimeLine</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ val: 3 })}>
                <Text style={{ color: '#ffffff' }}>Dot TimeLine</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ val: 4 })}>
                <Text style={{ color: '#ffffff' }}>Icon TimeLine</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ val: 5 })}>
                <Text style={{ color: '#ffffff' }}>
                  Override Render TimeLine
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ val: 6 })}>
                <Text style={{ color: '#ffffff' }}>
                  Refresh Load More TimeLine
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ val: 7 })}>
                <Text style={{ color: '#ffffff' }}>Single Right TimeLine</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ val: 8 })}>
                <Text style={{ color: '#ffffff' }}>Template TimeLine</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ val: 9 })}>
                <Text style={{ color: '#ffffff' }}>TimeLine Press</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ val: 10 })}>
                <Text style={{ color: '#ffffff' }}>Two Column TimeLine</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/*View to hold the child screens 
        which can be changed on the click of a button*/}
        <View style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
          {this.renderElement()}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 8,
    marginTop: 30,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 10,
    margin: 2,
  },
});