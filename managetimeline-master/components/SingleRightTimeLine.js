/*React Native TimeLine ListView / Flatlist*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

export default class SingleRightTimeLine extends Component {
  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);
    this.renderDetail = this.renderDetail.bind(this);

    this.data = [
      {
        time: '09:00',
        title: 'Event 1',
        description:
          'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        lineColor: '#009688',
        icon: require('../img/place_holder.png'),
        imageUrl:
          'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      },
      {
        time: '10:45',
        title: 'Event 2',
        description:
          'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        icon: require('../img/place_holder.png'),
        imageUrl:
          'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      },
      {
        time: '12:00',
        title: 'Event 3',
        icon: require('../img/place_holder.png'),
      },
      {
        time: '14:00',
        title: 'Event 4',
        description:
          'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        lineColor: '#009688',
        icon: require('../img/place_holder.png'),
        imageUrl:
          'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      },
      {
        time: '16:30',
        title: 'Event 5',
        description:
          'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        icon: require('../img/place_holder.png'),
        imageUrl:
          'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      },
    ];
    this.state = { selected: null };
  }

  onEventPress(data) {
    this.setState({ selected: data });
  }

  renderSelected() {
    if (this.state.selected)
      return (
        <Text style={{ marginTop: 10 }}>
          Selected event: {this.state.selected.title} at{' '}
          {this.state.selected.time}
        </Text>
      );
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    var desc = null;
    if (rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{ uri: rowData.imageUrl }} style={styles.image} />
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      );

    return (
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            padding: 16,
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Right Side Single TImeline Example
        </Text>
        {this.renderSelected()}
        <Timeline
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor="rgba(0,0,0,0)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#ff9797',
            color: 'white',
            padding: 5,
            borderRadius: 13,
          }}
          descriptionStyle={{ color: 'gray' }}
          options={{
            style: { paddingTop: 5 },
          }}
          innerCircle={'icon'}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
          separator={false}
          detailContainerStyle={{
            marginBottom: 20,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: '#BBDAFF',
            borderRadius: 10,
          }}
          columnFormat="single-column-right"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray',
  },
});